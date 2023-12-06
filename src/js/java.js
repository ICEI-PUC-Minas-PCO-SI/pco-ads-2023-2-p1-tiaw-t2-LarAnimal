// URL AGENDAMENTOS
let ULL = "http://localhost:3000/agendamentos";

//========================================================================================================================================================================================================================================================================

// GET - Recupera os agendamentos já feitos 

const agendamentoList = document.getElementById('appointmentsList');

fetch(ULL)
    .then(res => res.json())
    .then(agendamentos => {
        let listaAgendamentos = "";
        agendamentos.forEach((appointment, index) => {
            listaAgendamentos += `
        <div class="appointment-box"><strong>Clinica:</strong> ${appointment.clinicName} - <strong>Data:</strong> ${formatarDataBrasil(appointment.appointmentDate)} - <strong>Hora:</strong> ${appointment.appointmentTime}
                <div class="appointment-buttons"><button onclick="editAppointment(${index})">Editar</button><button onclick="deleteAppointment(${index})">Excluir</button></div></div>
        `;
        });
        agendamentoList.innerHTML = listaAgendamentos;
    });

//==========================================================================================================================================================================================================================================================
// DELETE - Exclui um agendamento

const agendamentoDelete = document.getElementById('btn-delete');

agendamentoDelete.addEventListener('click', (e) => {
    let appointmentDate = $('#appointmentDate').text();

    fetch(`${ULL}/${appointmentDate}`, {
        method: 'DELETE',
    })
        .then(res => res.json())
        .then(() => location.reload());
});

//============================================================================================================================================================================================================================================================================

// RECUPERA OS DADOS DA API

function getAgendamento(appointmentDate) {
    if (appointmentDate == 0) {
        $('#edit-appointment-date').text("");
        $('#appointmentDate').prop("disabled", false);
        $("#appointmentDate").val("");
        $("#appointmentTime").val("");
        $("#clinicName").val("");
        // Corrigir o uso de 'val()' para 'val("")'
        $("#clinicAdress").val("");
    } else {
        $('#edit-appointment-date').text(appointmentDate);
        fetch(`${ULL}/${appointmentDate}`)
            .then(res => res.json())
            .then(data => {
                $('#appointmentDate').prop("disabled", true);
                $("#appointmentDate").val(data.appointmentDate);
                $("#appointmentTime").val(data.appointmentTime);
                $("#clinicName").val(data.clinicName);
                // Corrigir o uso de 'val()' para 'val(data.clinicAdress)'
                $("#clinicAdress").val(data.clinicAdress);
            });
    }
}

//====================================================================================================================================================================================================

// PUT - POST - Cria ou edita um agendamento

const agendamentoForm = document.getElementById('clinicPopup');

agendamentoForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Evitar o comportamento padrão do formulário

    let appointmentDate = parseInt($('#edit-appointment-date').text());

    const agendamento = JSON.stringify({
        clinicName: document.getElementById('clinicName').value,
        // Corrigir o id para 'clinicAdress'
        clinicAdress: document.getElementById('clinicAdress').value,
        // Corrigir o id para 'appointmentDate'
        appointmentDate: document.getElementById('appointmentDate').value,
        // Corrigir o id para 'appointmentTime'
        appointmentTime: document.getElementById('appointmentTime').value
    });

    if (appointmentDate >= 0) {
        fetch(`${ULL}/${appointmentDate}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: agendamento
        })
        .then(res => res.json())
        .then(() => location.reload());  
    } else { 
        // Corrigir para 'ULL', pois 'URL' não está definido
        fetch(ULL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: agendamento
        })
        .then(res => res.json())
        .then(() => location.reload());  
    }      
});