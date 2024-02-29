# Projeto-CloudPayments
 
#Passo a Passo para Testar o Sistema.

Baixe o VsCode, Node.Js e MySQL.

Crie o banco de dados Pelo MySQL

Comandos para criação do banco de Dados.

{
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
}

Apos isso, abra o VSCode e Inicie o servidor Node com o script Servidor.js (Talvez seja necessario alterar os dados de login e senha do banco de dados do MySQL.)

Iniciando o servidor do Node e recebendo a mensagem de conexão bem sucessida. Você pode acessar a pagina, com o localhost. Pode usar a extensão GoLive para acessar as paginas front-end. E Apos isso, deve criar o seu usuario no sistema. Criando o usuario você pode logar e acessar o sistema.

O sistema ainda esta incompleto. Pretendo concluir todas as funções dele, e inserir um passo a passo com videos futuramente de como usa-las e como modificar possiveis dados. 
