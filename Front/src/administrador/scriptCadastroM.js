document.getElementById('cadastroMForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obter os valores dos campos do formulário
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    // Verificar se os campos estão preenchidos
    if (nome === '' || email === '' || senha === '') {
      document.getElementById('mensagem').textContent = 'Por favor, preencha todos os campos.';
    } else {

      // Criar um objeto com os dados do usuário
      var usuario = {
        nome: nome,
        email: email,
        senha: senha
      };
  
      // Aqui você pode fazer o que quiser com o objeto 'usuario'
      // Por exemplo, enviar os dados para o servidor através de uma requisição AJAX

      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
      };
    
      // Realiza a requisição para a API
      fetch('http://localhost:3001/api/adm/cadsM', requestOptions)
        .then(response => response.json())
        .then(data => {
          // Processa a resposta da API
          console.log(data);
        
      document.getElementById('mensagem').className = '';
      document.getElementById('mensagem').textContent = 'Cadastro realizado com sucesso!';
        })
        .catch(error => {
          // Trata erros
          console.error('Erro:', error);
          document.getElementById('mensagem').className = '';
      document.getElementById('mensagem').textContent = 'Erro No cadastro';
        });
  
      // Limpar os campos do formulário
      document.getElementById('nome').value = '';
      document.getElementById('email').value = '';
      document.getElementById('senha').value = '';

    }
  });