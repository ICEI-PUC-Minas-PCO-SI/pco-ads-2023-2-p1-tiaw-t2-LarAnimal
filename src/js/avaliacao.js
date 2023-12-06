
const stars = document.querySelectorAll('.star');
const commentInput = document.getElementById('comment');
const usernameInput = document.getElementById('username');
const submitBtn = document.getElementById('submitBtn');
const commentsDiv = document.getElementById('comments');

stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        const rating = star.getAttribute('data-rating');
        stars.forEach((s, i) => {
            if (i < rating) {
                s.classList.add('rated');
            } else {
                s.classList.remove('rated');
            }
        });
    });
});

submitBtn.addEventListener('click', () => {
    const ratedStars = document.querySelectorAll('.star.rated');
    const comment = commentInput.value;
    const username = usernameInput.value;

    if (ratedStars.length > 0 && comment && username) {
        const commentElement = document.createElement('div');
        commentElement.innerHTML = `<strong>Nome do usuário:</strong> ${username}<br><strong>Avaliação:</strong> ${ratedStars.length} estrela(s)<br><strong>Comentário:</strong> ${comment}`;
        commentsDiv.appendChild(commentElement);

        const hr = document.createElement('hr');
        commentsDiv.appendChild(hr);

        stars.forEach(star => star.classList.remove('rated'));
        commentInput.value = '';
        usernameInput.value = '';
    } else {
        alert('Por favor, preencha todos os campos: avaliação, comentário e nome do usuário.');
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('formulario-doacao'); // Alterando o ID do formulário para o de avaliações

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const rating = document.querySelectorAll('.star.rated').length; // Obtendo a quantidade de estrelas avaliadas
        const comment = document.getElementById('comment').value;

        const novaAvaliacao = {
            username,
            rating,
            comment
        };

        fetch('http://localhost:3333/avaliacoes', { // Rota para a criação de novas avaliações
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(novaAvaliacao)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Avaliação realizada com sucesso:', data);

            // Limpar os campos do formulário após a avaliação
            document.getElementById('username').value = '';
            document.querySelectorAll('.star').forEach(star => star.classList.remove('rated'));
            document.getElementById('comment').value = '';

            alert('Avaliação realizada com sucesso!');
        })
        .catch(error => {
            console.error('Erro ao fazer a avaliação:', error);
            alert('Erro ao fazer a avaliação. Tente novamente mais tarde.');
        });
    });
});









