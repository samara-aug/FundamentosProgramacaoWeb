function validarCampos() {
    let nome = document.getElementById('nome').value.trim();
    let email = document.getElementById('email').value.trim();
    let mensagem = document.getElementById('mensagem').value.trim();

    console.log(nome)
  
    if(nome == '' || email == '' || mensagem == '') {
        alert('Preencha todos os campos!');
    }

    else {
        alert('Mensagem enviada com sucesso!');

        document.getElementById('nome').value = '';
        document.getElementById('email').value = '';
        document.getElementById('mensagem').value = '';
    }
}