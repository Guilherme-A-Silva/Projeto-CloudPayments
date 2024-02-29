const { app, connection } = require('./server')

app.post('/login', (req, res) => {
  console.log('dsdad')
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
      {
        res.redirect('http://127.0.0.1:5500/Front-End/Html/Home.html')
      }
    }
  )
})
