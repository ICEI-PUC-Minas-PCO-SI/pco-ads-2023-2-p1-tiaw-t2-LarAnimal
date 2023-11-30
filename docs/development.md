# Programação de Funcionalidades

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo.

O professor Rommel Carneiro apresenta alguns exemplos prontos para serem utilizados como referência:
- Login do sistema: [https://repl.it/@rommelpuc/LoginApp](https://repl.it/@rommelpuc/LoginApp) 
- Cadastro de Contatos: [https://repl.it/@rommelpuc/Cadastro-de-Contatos](https://repl.it/@rommelpuc/Cadastro-de-Contatos)


> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)

## Exemplo

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

|ID    | Descrição do Requisito | Prioridade | Artefato Criado |
|------|------------------------|------------|-----------------|
|RF-001| Usuários comuns não cadastrados podem criar seus perfis. | ALTA | cadastroPF.html e PF_PJ.html|
|RF-002| Clínicas veterinárias e Ongs não cadastradas podem criar seus perfis. | ALTA | cadastroPJ.html e PF_PJ.html |
|RF-003| Usuários logados podem acessar e visualizar modulo de doações e adoção de pets. | ALTA | adoca.html e adocao_detalhes.html / doacoes.html |
|RF-004| Usuários logados podem ver o mapa interativo e visualizar parceiros e serviços por perto. | ALTA | usuario.html / perfil_instituicao.html |
|RF-005| Usuários podem pesquisar por parceiros ou serviços. | ALTA |  |
|RF-006| Usuários logados podem avaliar os parceiros e a aplicação. | ALTA | avaliacao.html |
|RF-007| Usuários logaos podem entrar em contato com os parceiros para suporte. | ALTA | contato.html |
|RF-008| Usuários podem visualizar parceiros pela região. | ALTA | usuario.html / perfil_instituicao.html |
|RF-009| Usuários logados podem agendar consultas ou serviços com parceiros disponíveis. | ALTA | agendamentos.html |
|RF-010| Usuários logados podem participar de discussões e criar posts. | ALTA | forum_1.html |
|RF-011| Usuários podem acessar e visualizar artigos e mídias educacionais. | ALTA | educacional.html e artigo.html |
|RF-012| Usuários podem visualizar conteúdo básico sobre a natureza da aplicação. | ALTA | home.html |


## Descrição das estruturas:

## Notícia
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id             | Numero (Inteiro)  | Identificador único da notícia            | 1                                              |
| Título         | Texto             | Título da notícia                         | Sistemas de Informação PUC Minas é o melhor                                   |
| Conteúdo       | Texto             | Conteúdo da notícia                       | Sistemas de Informação da PUC Minas é eleito o melhor curso do Brasil                            |
| Id do usuário  | Numero (Inteiro)  | Identificador do usuário autor da notícia | 1                                              |

