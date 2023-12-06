function saveAppointmentsLocally(appointments) {
    localStorage.setItem('appointments', JSON.stringify(appointments));
}

function loadAppointments() {
    const storedAppointments = localStorage.getItem('appointments');
    return storedAppointments ? JSON.parse(storedAppointments) : [];
}

function showPopup(clinicName, clinicAddress) {
    document.getElementById('clinicName').textContent = clinicName;
    document.getElementById('clinicAddress').textContent = 'Endereço: ' + clinicAddress;
    document.getElementById('clinicPopup').style.display = 'block';
}

function closePopup() {
    document.getElementById('clinicPopup').style.display = 'none';
}

function agendarConsulta() {
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
    showAppointmentsList();
}

function formatarDataBrasil(data) {
    const partes = data.split('-');
    return `${partes[2]}/${partes[1]}/${partes[0]}`;
}

function showAppointmentsList() {
    const appointmentsList = document.getElementById('appointmentsList');
    appointmentsList.innerHTML = '';

    const existingAppointments = loadAppointments();

    existingAppointments.forEach((appointment, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<div class="appointment-box"><strong>Clinica:</strong> ${appointment.clinicName} - <strong>Data:</strong> ${formatarDataBrasil(appointment.appointmentDate)} - <strong>Hora:</strong> ${appointment.appointmentTime}
        <div class="appointment-buttons"><button onclick="editAppointment(${index})">Editar</button><button id="btn-delete" onclick="deleteAppointment(${index})">Excluir</button></div></div>`;
        appointmentsList.appendChild(listItem);
    });
}

function deleteAppointment(index) {
    const existingAppointments = loadAppointments();
    existingAppointments.splice(index, 1);
    saveAppointmentsLocally(existingAppointments);
    showAppointmentsList();
}

function editAppointment(index) {
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
    showAppointmentsList();

    // Exibir o popup
    document.getElementById('clinicPopup').style.display = 'block';
}

// Event listener quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function () {
    // Restante do seu código...
    showAppointmentsList();
});