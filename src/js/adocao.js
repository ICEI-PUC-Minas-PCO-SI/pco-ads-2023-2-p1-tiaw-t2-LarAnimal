// Máscara idade
function mascaraIdade(input) {
    input.value = input.value.replace(/\D/g, '').substring(0, 2);
}

// Máscara telefone
function mascaraTelefone(input) {
    input.value = input.value.replace(/\D/g, '').substring(0, 11);

    if (input.value.length === 11) {
        // Máscara DDD
        input.value = input.value.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    }
}

// Máscara para e-mail
function mascaraEmail(input) {

    input.value = input.value.replace(/[^\w@.]/g, '');
}
function salvarNovoPet() {
    var nome = document.getElementById("petNome").value;
    var especie = document.getElementById("petEspecie").value;
    var idade = document.getElementById("petIdade").value;
    var descricao = document.getElementById("petDescricao").value;
    var imagemPet = document.getElementById("petImagem");
    var imagemPetUrl = URL.createObjectURL(imagemPet.files[0]);
    var emailDono = document.getElementById("donoEmail").value;
    var telefoneDono = document.getElementById("donoTelefone").value;
    document.getElementById("modalDonoEmail").innerText = emailDono;
    document.getElementById("modalDonoTelefone").innerText = telefoneDono;
    if (!nome || !especie || !idade || !descricao || !imagemPet.files[0] || !emailDono || !telefoneDono) {
        alert("Por favor, preencha todos os campos antes de salvar o novo pet.");
        return;
    }

    var newCard = document.createElement("div");
    newCard.className = "col";
    newCard.innerHTML = `
        <div class="card">
            <div class="card-body text-center" style="background-color: #F2AA52;">
                <a href="#" data-bs-toggle="modal" data-bs-target="#modalPet${nome}">
                    <img src="${imagemPetUrl}" class="img-thumbnail" style=" width: 200px; height: 200px;">
                </a>
                <h5 class="card-title">${nome}</h5>
                <p class="card-text">${descricao}</p>
                <button type="button" class="btn" data-bs-toggle="modal"
                    style="color: white; background-color:#55038C;" data-bs-target="#modalPet${nome}">Mostrar mais</button>
            </div>
        </div>
    `;

    document.querySelector(".row").appendChild(newCard);

    var modalPet = document.createElement("div");
    modalPet.className = "modal fade mx-auto";
    modalPet.id = `modalPet${nome}`;
    modalPet.tabIndex = -1;
    modalPet.setAttribute("aria-labelledby", `modalPet${nome}Label`);
    modalPet.setAttribute("aria-hidden", "true");
    modalPet.setAttribute("data-bs-backdrop", "false");
    modalPet.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header" style="background-color: #F2AA52;">
                    <h5 class="modal-title" id="modalPet${nome}Label">Detalhes do Pet</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p style=" text-align: center; "><strong style="color: #55038C;">Nome:</strong> ${nome}</p>
                    <div class="d-flex justify-content-center">
                        <img src="${imagemPetUrl}" class="img-thumbnail" style="width: 60%; height: 60%;">
                    </div>
                    <p><strong style="color: #55038C;">Espécie/Raça:</strong> ${especie}</p>
                    <p><strong style="color: #55038C;">Idade:</strong> ${idade}</p>
                    <p><strong style="color: #55038C;">Descrição:</strong> ${descricao}</p>
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

    document.getElementById("petNome").value = "";
    document.getElementById("petEspecie").value = "";
    document.getElementById("petIdade").value = "";
    document.getElementById("petDescricao").value = "";
    document.getElementById("donoEmail").value = "";
    document.getElementById("donoTelefone").value = "";
    imagemPet.value = "";
}
// Ouvintes de eventos
document.getElementById('petIdade').addEventListener('input', function () {
    mascaraIdade(this);
});

document.getElementById('donoEmail').addEventListener('input', function () {
    mascaraEmail(this);
});

document.getElementById('donoTelefone').addEventListener('input', function () {
    mascaraTelefone(this);
});
