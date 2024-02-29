# Projeto-CloudPayments

CloudPayments é um sistema simples em desenvolvimento de um Banco Virtual com algumas funções ainda em produção. 

![C-programming-1024x530]([https://user-images.githubusercontent.com/68473916/226371932-ed4684f7-fded-4170-802b-20a3271421c2.png](https://github.com/Guilherme-A-Silva/Projeto-CloudPayments/blob/main/Front-End/Assets/Logo%201.svg)

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

Janelas [Figma] - Finalizado
Sistema de Login - Finalizado
Sistema de Cadastro - Finalizado
Sistema de Transferencia - Incompleto
Sistema de Depositon - Incompleto
Sistema de Gerenciamento de Pix - Incompleto
Sistema de Agendamento de Pagamentos - Incompleto
Sistema de Cartão de Credito - Incompleto
Sistema de Suporte 24/7 - Incompleto

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
