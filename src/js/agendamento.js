async function loadAppointments() {
    let appointments = [];
    await $.get({
        url: "http://localhost:3333/agendamentos",
        success: function (response) {
            appointments = response;
        },
        error: function (error) {
            window.alert("Erro ao cadastrar usuário");
        }
    })
    return appointments;
}

function showPopup(clinicName, clinicAddress) {
    document.getElementById('clinicName').textContent = clinicName;
    document.getElementById('clinicAddress').textContent = 'Endereço: ' + clinicAddress;
    document.getElementById('clinicPopup').style.display = 'block';
}

function closePopup() {
    document.getElementById('clinicPopup').style.display = 'none';
}

$(document).ready(function () {
        const btnAgendamento = document.getElementById('btn-agendar'); // Alterando o ID para o formulário de agendamento
        
        btnAgendamento.addEventListener('click', function (event) {
            event.preventDefault();
    
            const clinicName = document.getElementById('clinicName').textContent;
            const appointmentDate = document.getElementById('appointmentDate').value;
            const appointmentTime = document.getElementById('appointmentTime').value;
    
            const novoAgendamento = {
                clinicName,
                appointmentDate,
                appointmentTime
            };
    
            $.post({
                url: "http://localhost:3333/agendamentos",
                data: novoAgendamento,
                success: function (response) {
                    console.log("POST request successful:", response);
                },
                error: function (error) {
                    window.alert("Erro ao cadastrar usuário");
                }
            })
        });
});


async function agendarConsulta() {
    const clinicName = document.getElementById('clinicName').textContent;
    const appointmentDate = document.getElementById('appointmentDate').value;
    const appointmentTime = document.getElementById('appointmentTime').value;

    const appointmentData = {
        clinicName,
        appointmentDate,
        appointmentTime
    };

    const existingAppointments = loadAppointments();
    existingAppointments.push(appointmentData);
    saveAppointmentsLocally(existingAppointments);
    alert(`Consulta agendada em ${clinicName} em ${appointmentDate} às ${appointmentTime}`);
    closePopup();
    await showAppointmentsList();
}

function formatarDataBrasil(data) {
    const partes = data.split('-');
    return `${partes[2]}/${partes[1]}/${partes[0]}`;
}

async function showAppointmentsList() {
    const appointmentsList = document.getElementById('appointmentsList');
    appointmentsList.innerHTML = '';

    const existingAppointments = await loadAppointments();

    console.log('Agendamentos existentes:', existingAppointments)
    existingAppointments.forEach((appointment, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<div class="appointment-box"><strong>Clinica:</strong> ${appointment.clinicName} - <strong>Data:</strong> ${formatarDataBrasil(appointment.appointmentDate)} - <strong>Hora:</strong> ${appointment.appointmentTime}
        <div class="appointment-buttons"><button onclick="editAppointment(${index})">Editar</button><button id="btn-delete" onclick="deleteAppointment(${index})">Excluir</button></div></div>`;
        appointmentsList.appendChild(listItem);
    });
}

async function deleteAppointment(index) {
    const existingAppointments = loadAppointments();
    existingAppointments.splice(index, 1);
    saveAppointmentsLocally(existingAppointments);
    await showAppointmentsList();
}

async function editAppointment(index) {
    const existingAppointments = loadAppointments();
    const appointment = existingAppointments[index];

    document.getElementById('clinicName').textContent = appointment.clinicName;
    document.getElementById('clinicAddress').textContent = '';
    document.getElementById('appointmentDate').value = appointment.appointmentDate;
    document.getElementById('appointmentTime').value = appointment.appointmentTime;

    // Excluir o agendamento antigo
    existingAppointments.splice(index, 1);
    saveAppointmentsLocally(existingAppointments);

    // Atualizar a lista de agendamentos
    await showAppointmentsList();

    // Exibir o popup
    document.getElementById('clinicPopup').style.display = 'block';
}

// Event listener quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', async function () {
    // Restante do seu código...
    await showAppointmentsList();
});