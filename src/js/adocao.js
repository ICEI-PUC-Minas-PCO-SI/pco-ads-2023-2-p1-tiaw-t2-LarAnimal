// Máscara idade
function mascaraIdade(input) {
    input.value = input.value.replace(/\D/g, '').substring(0, 2);
}

// Máscara para telefone
function mascaraTelefone(input) {
    input.value = input.value.replace(/\D/g, '').substring(0, 11);

    if (input.value.length === 11) {
        // Máscara DDD
        input.value = input.value.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    }
}

// Função 11 dígitos Telefone
function validarTelefone(telefone) {
    return telefone.length >= 11;
}

// Função erro Telefone
function exibirAlertaTelefone() {
    alert("Por favor, insira um número de telefone válido com pelo menos 11 dígitos.");
}

// Função para validar o formato de e-mail
function validarEmail(email) {
    // Expressão regular simples para verificar um formato de e-mail básico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Função para exibir mensagem de erro para e-mail
function exibirAlertaEmail() {
    alert("Por favor, insira um endereço de e-mail válido.");
}

// Objeto para armazenar informações do novo pet
var novoPet = {};

// Função para carregar os pets da API e exibir na página
function carregarPets() {
  
    const apiUrl = "http://localhost:3333/pets";

    // Use fetch para obter os pets da API
    fetch(apiUrl)
        .then(response => response.json())
        .then(pets => {
            // Itera sobre os pets e cria os cards
            pets.forEach(pet => {
                adicionarCard(pet);
            });
        })
        .catch(error => console.error('Erro ao carregar pets:', error));
}

// Função para adicionar um novo card com base nas informações do pet
function adicionarCard(pet) {
    var newCard = document.createElement("div");
    newCard.className = "col";
    newCard.innerHTML = `
    <div class="card">
        <div class="card-body text-center" style="background-color: #F2AA52;">
            <a href="#" data-bs-toggle="modal" data-bs-target="#modalPet${pet.nome}">
                <img src="${pet.imagemPet}" class="img-thumbnail" style="width: 200px; height: 200px;">
            </a>
            <h5 class="card-title">${pet.nome}</h5>
            <p class="card-text">${pet.descricao}</p>
            <button type="button" class="btn" data-bs-toggle="modal"
                style="color: white; background-color:#55038C;" data-bs-target="#modalPet${pet.nome}">Mostrar mais</button>
        </div>
    </div>
    `;

    document.querySelector(".row").appendChild(newCard);

    // Adiciona o modalPet
    adicionarModalPet(pet);
}

// Função para adicionar um novo modalPet com base nas informações do pet
function adicionarModalPet(pet) {
    var modalPet = document.createElement("div");
    modalPet.className = "modal fade mx-auto";
    modalPet.id = `modalPet${pet.nome}`;
    modalPet.tabIndex = -1;
    modalPet.setAttribute("aria-labelledby", `modalPet${pet.nome}Label`);
    modalPet.setAttribute("aria-hidden", "true");
    modalPet.setAttribute("data-bs-backdrop", "false");
    modalPet.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header" style="background-color: #F2AA52;">
                    <h5 class="modal-title" id="modalPet${pet.nome}Label">Detalhes do Pet</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p style=" text-align: center; "><strong style="color: #55038C;">Nome:</strong> ${pet.nome}</p>
                    <div class="d-flex justify-content-center">
                        <img src="${pet.imagemPet}" class="img-thumbnail" style="width: 200px; height: 200px;">
                    </div>
                    <h3><strong style="color: #55038C;">Espécie/Raça:</strong> ${pet.especie}</h3>
                    <h3><strong style="color: #55038C;">Idade:</strong> ${pet.idade}</h3>
                    <h3><strong style="color: #55038C;">Descrição:</strong> ${pet.descricao}</h3>
                </div>
                <div class="modal-footer" style="background-color: #F2AA52;">
                    <button type="button" class="btn mx-auto" data-bs-toggle="modal" data-bs-target="#DonoModal"
                        style="background-color: #55038C; color: white;">
                        Quero adotar!
                    </button>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modalPet);
}

// Função para salvar um novo pet
function salvarNovoPet() {
    // Obtenha os valores do formulário
    const petNome = document.getElementById('petNome').value;
    const petEspecie = document.getElementById('petEspecie').value;
    const petIdade = document.getElementById('petIdade').value;
    const petImagem = document.getElementById('petImagem').value;
    const petDescricao = document.getElementById('petDescricao').value;
    const donoEmail = document.getElementById('donoEmail').value;
    const donoTelefone = document.getElementById('donoTelefone').value;

    // Verifique se todos os campos foram preenchidos
    if (!petNome || !petEspecie || !petIdade || !petImagem || !petDescricao || !donoEmail || !donoTelefone) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Construa o objeto novoPet
    const novoPet = {
        nome: petNome,
        especie: petEspecie,
        idade: petIdade,
        imagemPet: petImagem,
        descricao: petDescricao,
        dono: {
            email: donoEmail,
            telefone: donoTelefone
        }
    };

    // Envie os dados para a API (substitua a URL pela sua URL de API)
    const apiUrl = 'http://localhost:3333/pets';

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(novoPet),
    })
    .then(response => response.json())
    .then(data => {
        // Limpe o formulário
        document.getElementById('novoPetForm').reset();

        // Adicione o novo card na página
        adicionarCard(data);

        // Feche o modal de novo pet
        $('#novoPetModal').modal('hide');
    })
    .catch((error) => {
        console.error('Erro ao salvar novo pet:', error);
    });
}


// Ouvintes de eventos
document.getElementById('petIdade').addEventListener('input', function () {
    mascaraIdade(this);
});

document.getElementById('donoTelefone').addEventListener('input', function () {
    mascaraTelefone(this);
});

// Carrega os pets ao carregar a página
document.addEventListener('DOMContentLoaded', carregarPets);

