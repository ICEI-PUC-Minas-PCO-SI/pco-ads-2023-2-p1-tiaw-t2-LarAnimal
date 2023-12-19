$(document).ready(function () {
    const baseUrl = "https://lar-animal--rhillarycarvalh.repl.co/usuario";

    function getDadosUsuario(tipo) {
        const usuario = {
            nome: $('input[name="nome"]').val(),
            email: $('input[name="email"]').val(),
            senha: $('input[name="senha"]').val(),
            documento: $('input[name="documento"]').val(),
            cep: $('input[name="cep"]').val(),
            estado: $('input[name="estado"]').val(),
            cidade: $('input[name="cidade"]').val(),
            bairro: $('input[name="bairro"]').val(),
            logradouro: $('input[name="logradouro"]').val(),
            numero: $('input[name="numero"]').val(),
            telefone: $('input[name="telefone"]').val(),
            tipo: tipo //PF ou PJ
        };

        return usuario;
    }

    function salvarDadosUsuario(usuario) {
        $.post({
            url: baseUrl,
            data: usuario,
            success: function (response) {
                console.log("POST request successful:", response);
                window.location.href = "login.html";
            },
            error: function (error) {
                window.alert("Erro ao cadastrar usuário");
            }
        });
    }

    // Evento de submissão do formulário PF
    $('#cadastro-form-pf').on('submit', function (e) {
        e.preventDefault(); // Impede o envio padrão do formulário

        const nome = $('input[name="nome"]').val();
        const email = $('input[name="email"]').val();
        const senha = $('input[name="senha"]').val();
        const documento = $('input[name="documento"]').val();
        const cep = $('input[name="cep"]').val();
        const estado = $('input[name="estado"]').val();
        const cidade = $('input[name="cidade"]').val();
        const bairro = $('input[name="bairro"]').val();
        const logradouro = $('input[name="logradouro"]').val();
        const numero = $('input[name="numero"]').val();
        const telefone = $('input[name="telefone"]').val();

        // Verificação de campos em branco
        if (nome === '' || email === '' || senha === '' || documento === '' ||
            cep === '' || estado === '' || cidade === '' || bairro === '' ||
            logradouro === '' || numero === '' || telefone === '') {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return; // Impede o envio do formulário se algum campo estiver em branco
        }

        const usuario = getDadosUsuario('PF');
        salvarDadosUsuario(usuario);
    });

    // Evento de submissão do formulário PJ
    $('#cadastro-form-pj').on('submit', function (e) {
        e.preventDefault(); // Impede o envio padrão do formulário

        const nome = $('input[name="nome"]').val();
        const email = $('input[name="email"]').val();
        const senha = $('input[name="senha"]').val();
        const documento = $('input[name="documento"]').val();
        const cep = $('input[name="cep"]').val();
        const estado = $('input[name="estado"]').val();
        const cidade = $('input[name="cidade"]').val();
        const bairro = $('input[name="bairro"]').val();
        const logradouro = $('input[name="logradouro"]').val();
        const numero = $('input[name="numero"]').val();
        const telefone = $('input[name="telefone"]').val();

        // Verificação de campos em branco
        if (nome === '' || email === '' || senha === '' || documento === '' ||
            cep === '' || estado === '' || cidade === '' || bairro === '' ||
            logradouro === '' || numero === '' || telefone === '') {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return; // Impede o envio do formulário se algum campo estiver em branco
        }

        const usuario = getDadosUsuario('PJ');
        usuario.tipoEstabelecimento = $('select[name="tipo"]').val();
        salvarDadosUsuario(usuario);
    });
});
