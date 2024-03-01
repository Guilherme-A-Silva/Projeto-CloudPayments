# Projeto-CloudPayments

CloudPayments é um sistema simples em desenvolvimento de um Banco Virtual com algumas funções ainda em produção. 

![CloudPayments](https://raw.githubusercontent.com/Guilherme-A-Silva/Projeto-CloudPayments/5cce087fff6294b5d714298543a8949788f9459f/Front-End/Assets/Logo%201.svg?token=AQKNIPGPIOMDB3ABVVLT3QLF4EMQY)

# Resumo do CloudPayments

Este projeto foi iniciado por causa da disciplina de Modelos avançados de Banco de Dados, onde foi proposto um aplicação real de algum modelo de banco de dados para resolver algum problema ou implemtar uma solução para algum. <br>

Ao longo da disciplina foi debatido bastante problemas relevantes no ambito da ciencia de dados <br>
Problemas esses que pretendemos abordar em algumas funções neste projeto.<br>

#Comandos para criação do banco de dados em SQL <br>

(Foi utilizado o MySQL para iniciar o projeto )<br>

```c++
CREATE DATABASE Cloudpayments;

USE Cloudpayments;

CREATE TABLE ContaBancaria (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    NomeCompleto VARCHAR(100),
    CPF VARCHAR(14) UNIQUE NOT NULL,
    Email VARCHAR(100) UNIQUE,
    Telefone VARCHAR(15),
    Senha VARCHAR(100) NOT NULL,
    Saldo VARCHAR(100),
    FotoPerfil VARCHAR(255),
    Endereco VARCHAR(255),
    NumeroCartao VARCHAR(16) UNIQUE,
    NomeTitular VARCHAR(100),
    DataExpiracao VARCHAR(7),
    CodigoSeguranca VARCHAR(3),
    Limite DECIMAL(15, 2)
);

```

# Sistemas criados em Andamento ou Finalizadas!

Janelas [Figma] - Finalizado <br>
Sistema de Login - Finalizado <br>
Sistema de Cadastro - Finalizado <br>
Sistema de Transferencia - Incompleto <br>
Sistema de Depositon - Incompleto <br>
Sistema de Gerenciamento de Pix - Incompleto <br>
Sistema de Agendamento de Pagamentos - Incompleto <br>
Sistema de Cartão de Credito - Incompleto <br>
Sistema de Suporte 24/7 - Incompleto <br>

<br>

# Para conexão do servidor Node com o Banco de Dados do MySQL

```c++

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  password: '',
  database: 'cloudpayments'
})

```

Altere user e password se necessario. [Script Server.js]
