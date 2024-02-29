document.addEventListener('DOMContentLoaded', function () {
  document
    .getElementById('signup-form')
    .addEventListener('submit', function (event) {
      event.preventDefault()

      const formData = {
        nomeCompleto: document.getElementById('nome').value,
        cpf: document.getElementById('cpf').value,
        email: document.getElementById('email').value,
        telefone: document.getElementById('telefone').value,
        senha: document.getElementById('senha').value
      }

      fetch('http://localhost:3000/contas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
        .then(res => {
          console.log(res.status)
          if (res.status === 201) {
            window.location.href =
              'http://127.0.0.1:5500/Front-End/Html/Cadastro1.html'
          } else {
            console.log(res.status)
            throw new Error('Erro ao criar usuário')
          }
        })
        .catch(error => {
          console.error('Erro ao criar usuário:', error)
          alert('Erro ao criar usuário')
        })
    })
})
