//URL DA API DE DADOS
URL = 'http://localhost:3000'

//============================================================================================================
//GET - Recuperação de dados e adição dos posts default

const postsList = document.getElementById('posts');

fetch(URL)
    .then(res => res.json())
    .then(threads => {
        let posts_respostas = '';
        for (let i = 0; i < threads.length; i++) {
            posts_respostas += `
            <div class="thread">
               <h3>${threads[i].post - title}</h3>
                 <div class="respostas">
                      <p>${posts[i].comment - content}</p>
                        <hr>
                 </div>
             </div>
             `;
             postsList.innerHTML = posts_respostas;
        }

    }
    );

    //===================================================================================
    //CREATE OR UPDATE - Procedimento para criar o editar um post 

    const postForm = document.getElementById('post-form');

    postForm.addEventListener('submit', (e) => {
        let id = parseInt($('#post-content').text());

        const novo_post = JSON.stringify({
            post_content: document.getElementById('post-content').value
        })

        if (post-content >=""){
            fetch(`${URL}/${post-content}`,{
                method: 'PUT',
                headers: {
                    'Content-Type' : 'aplication/json'
                },
                body: novo-post
            })
            .then(res => res.json())
            .then(() => location.reload());
        }
        else{
            fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type' : 'aplication/json'
                },
                body: novo-post
            })
            .then(res => res.json())
            .then (() => location.reload());
        }
    })

    //======================================================================
    