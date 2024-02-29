const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express()
const port = 3000

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'cloudpayments'
})

connection.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err)
    return
  }
  console.log('Conexão bem sucedida ao banco de dados!')
})
app.use(express.json())
app.use(cors())

app.get('/contas', (req, res) => {
  connection.query('SELECT * FROM ContaBancaria', (err, results) => {
    if (err) {
      console.error('Erro ao executar a consulta:', err)
      res.status(500).send('Erro ao buscar contas bancárias')
      return
    }
    res.json(results)
  })
})

function gerarNumeroCartao() {
  let numero = ''
  for (let i = 0; i < 16; i++) {
    numero += Math.floor(Math.random() * 10)
  }
  return numero
}

function gerarDataExpiracao() {
  const mes = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')
  const ano = String(
    new Date().getFullYear() + Math.floor(Math.random() * 5)
  ).slice(-2)
  return `${mes}/${ano}`
}

function gerarCodigoSeguranca() {
  return String(Math.floor(Math.random() * 1000)).padStart(3, '0')
}

function gerarLimite() {
  return (Math.random() * 5000).toFixed(2)
}

app.post('/contas', (req, res) => {
  const { nomeCompleto, cpf, email, telefone, senha, fotoPerfil, endereco } =
    req.body

  connection.beginTransaction(err => {
    if (err) {
      console.error('Erro ao iniciar a transação:', err)
      res.status(500).send('Erro ao criar conta bancária')
      return
    }

    const numeroCartao = gerarNumeroCartao()
    const dataExpiracao = gerarDataExpiracao()
    const codigoSeguranca = gerarCodigoSeguranca()
    const limite = gerarLimite()

    connection.query(
      'INSERT INTO ContaBancaria (NomeCompleto, CPF, Email, Telefone, Senha, Saldo, NumeroCartao, NomeTitular, DataExpiracao, CodigoSeguranca, Limite) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [
        nomeCompleto,
        cpf,
        email,
        telefone,
        senha,
        '0.00',
        numeroCartao,
        nomeCompleto,
        dataExpiracao,
        codigoSeguranca,
        limite
      ],
      (err, result) => {
        if (err) {
          connection.rollback(() => {
            console.error(
              'Erro ao executar a consulta para criar conta bancária:',
              err
            )
            res.status(500).send('Erro ao criar conta bancária')
          })
          return
        }

        connection.commit(err => {
          if (err) {
            connection.rollback(() => {
              console.error('Erro ao confirmar a transação:', err)
              res.status(500).send('Erro ao criar conta bancária')
            })
            return
          }

          res.status(201).json(result)
        })
      }
    )
  })
})

app.post('/login', (req, res) => {
  const { cpf, senha } = req.body
  connection.query(
    'SELECT * FROM ContaBancaria WHERE CPF = ? AND Senha = ?',
    [cpf, senha],
    (err, results) => {
      if (err) {
        console.error('Erro ao executar a consulta:', err)
        res.status(500).send('Erro ao fazer login')
        return
      }
      if (results.length > 0) {
        res.status(200).json(results[0])
      } else {
        res.status(401).send('CPF ou senha incorretos')
      }
    }
  )
})

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})
