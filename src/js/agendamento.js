async function loadAppointments() {
    try {
        const response = await $.get("http://localhost:3333/agendamentos");
        return response || [];
    } catch (error) {
        window.alert("Erro ao carregar os agendamentos");
        return [];
    }
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
    const btnAgendamento = document.getElementById('btn-agendar');

    btnAgendamento.addEventListener('click', async function (event) {
        event.preventDefault();

        const clinicName = document.getElementById('clinicName').textContent;
        const appointmentDate = document.getElementById('appointmentDate').value;
        const appointmentTime = document.getElementById('appointmentTime').value;

        const novoAgendamento = {
            clinicName,
            appointmentDate,
            appointmentTime
        };async function loadAppointments() {
    try {
        const response = await fetch("http://localhost:3333/agendamentos");
        if (response.ok) {
            const data = await response.json();
            return data || [];
        } else {
            throw new Error('Erro ao carregar os agendamentos');
        }
    } catch (error) {
        window.alert(error.message);
        return [];
    }
}

async function saveAppointments(appointments) {
    try {
        const response = await fetch("http://localhost:3333/agendamentos", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(appointments),
        });
        if (response.ok) {
            const data = await response.json();
            console.log('Agendamentos salvos:', data);
        } else {
            throw new Error('Erro ao salvar os agendamentos');
        }
    } catch (error) {
        window.alert(error.message);
    }
}

async function deleteAppointment(index) {
    let existingAppointments = await loadAppointments();
    existingAppointments.splice(index, 1);
    await saveAppointments(existingAppointments);
    await showAppointmentsList();
}

async function editAppointment(index) {
    let existingAppointments = await loadAppointments();
    const appointment = existingAppointments[index];

    document.getElementById('clinicName').textContent = appointment.clinicName;
    document.getElementById('clinicAddress').textContent = '';
    document.getElementById('appointmentDate').value = appointment.appointmentDate;
    document.getElementById('appointmentTime').value = appointment.appointmentTime;

    // Exibir o popup
    document.getElementById('clinicPopup').style.display = 'block';
}

// Restante do seu código...

        // Restante do seu código...
        

        try {
            const response = await $.post({
                url: "http://localhost:3333/agendamentos",
                data: novoAgendamento
            });
            console.log("POST request successful:", response);
        } catch (error) {
            window.alert("Erro ao cadastrar usuário");
        }
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

    const existingAppointments = await loadAppointments();
    existingAppointments.push(appointmentData);
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
    let existingAppointments = await loadAppointments();
    existingAppointments.splice(index, 1);
     saveAppointments(existingAppointments);
    await showAppointmentsList();
}

async function editAppointment(index) {
    let existingAppointments = await loadAppointments();
    const appointment = existingAppointments[index];

    document.getElementById('clinicName').textContent = appointment.clinicName;
    document.getElementById('clinicAddress').textContent = '';
    document.getElementById('appointmentDate').value = appointment.appointmentDate;
    document.getElementById('appointmentTime').value = appointment.appointmentTime;

    // Exibir o popup
    document.getElementById('clinicPopup').style.display = 'block';
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

document.addEventListener('DOMContentLoaded', async function () {

    await showAppointmentsList();
});
