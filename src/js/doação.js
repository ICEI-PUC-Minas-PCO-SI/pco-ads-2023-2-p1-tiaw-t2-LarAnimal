document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('formulario-doacao');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const nome = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const valor = document.getElementById('amount').value;

        const novaDoacao = {
            nome,
            email,
            valor
        };

        fetch('https://lar-animal--rhillarycarvalh.repl.co/doacoes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(novaDoacao)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Doação realizada com sucesso:', data);

            form.reset();
            alert('Doação realizada com sucesso!');
        })
        .catch(error => {
            console.error('Erro ao fazer a doação:', error);
            alert('Erro ao fazer a doação. Tente novamente mais tarde.');
        });
    });
});


const listaDoacoesElement = document.getElementById('lista-doacoes');
const totalArrecadadoElement = document.getElementById('total-arrecadado');

function listarDoacoes() {
    fetch('https://lar-animal--rhillarycarvalh.repl.co/doacoes')
        .then(response => response.json())
        .then(doacoes => {
            listaDoacoesElement.innerHTML = ''; // Limpa a lista para evitar duplicações

            let totalArrecadado = 0;

            doacoes.forEach(doacao => {
                const valorNumerico = parseFloat(doacao.valor);
                if (!isNaN(valorNumerico)) {
                    totalArrecadado += valorNumerico;
                    const formattedValor = `R$ ${valorNumerico.toFixed(2)}`;
                    const listItem = document.createElement('li');
                    listItem.className = 'lista-doacoes-item';
                    listItem.textContent = `Nome: ${doacao.nome}, Email: ${doacao.email}, Valor: ${formattedValor}`;
                    listaDoacoesElement.appendChild(listItem);
                }
            });

            totalArrecadadoElement.textContent = `Total arrecadado: R$ ${totalArrecadado.toFixed(2)}`;
        })
        .catch(error => {
            console.error('Erro ao buscar as doações:', error);
            listaDoacoesElement.innerHTML = '<li>Erro ao buscar as doações. Tente novamente mais tarde.</li>';
            totalArrecadadoElement.textContent = 'Erro ao calcular o total arrecadado.';
        });
}

setInterval(listarDoacoes, 1000);
listarDoacoes();
