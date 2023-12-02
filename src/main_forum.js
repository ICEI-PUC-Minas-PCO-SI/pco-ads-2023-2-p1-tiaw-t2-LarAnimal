//URL DA APLICAÇÃO
URL = 'http;//localhost:3000'
    //=============================================================================================================================

    // Funções CRUD utilizando Fetch API
    constapiUrl = 'https://jsonplaceholder.typicode.com/posts';

async function createPost(content) {
    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: 'Novo Post', body: content, userId: 1 }),
    });

    const data = await response.json();
    fetch('/seu-endpoint-no-servidor', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: postDataJSON,
    })
        .then(response => response.json())
        .then(data => {
            // Lógica para lidar com a resposta do servidor, se necessário
            console.log('Resposta do servidor:', data);
        })
        .catch(error => {
            console.error('Erro ao enviar dados para o servidor:', error);
        });

    // Atualizar a exibição após criar um post
    renderPosts();
}

async function getPosts() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
}

async function renderPosts() {
    const postsContainer = document.getElementById('posts');
    const posts = await getPosts();

    postsContainer.innerHTML = '';

    posts.forEach((post) => {
        const postElement = document.createElement('div');
        postElement.classList.add('thread');
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <div class="respostas">
                <p>${post.body}</p>
            </div>
        `;

        postsContainer.appendChild(postElement);
    });
}

document.getElementById('post-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Obter dados do formulário
    const postData = {
        content: document.getElementById('post-content').value,
    };

    // Converter dados para JSON
    const postDataJSON = JSON.stringify(postData);


    console.log('Dados do post em JSON:', postDataJSON);

    // Limpar o campo de conteúdo do post
    document.getElementById('post-content').value = '';

    // Renderizar os posts ao carregar a página
    window.onload = renderPosts;

});