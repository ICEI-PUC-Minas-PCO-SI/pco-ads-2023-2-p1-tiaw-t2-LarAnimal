# Testes

Neste projeto serão realizados dois tipos de testes:

 - O **Teste de Software**, que utiliza uma abordadem de caixa preta, e tem por objetivo verificar a conformidade do software com os requisitos funcionais e não funcionais do sistema.
 - O **Teste de Usabilidade**, que busca avaliar a qualidade do uso do sistema por um usuário do público alvo. 

Se quiser conhecer um pouco mais sobre os tipos de teste de software, leia o documento [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/).

A documentação dos testes é dividida nas seguintes seções:

 - [Plano de Testes de Software](#plano-de-testes-de-software)
 - [Registro dos Testes de Software](#registro-dos-testes-de-software)
 - [Avaliação dos Testes de Software](#avaliação-dos-testes-de-software)
 - [Cenários de Teste de Usabilidade](#cenários-de-teste-de-usabilidade)
 - [Registro dos Testes de Usabilidade](#registro-dos-testes-de-usabilidade)
 - [Avaliação dos Testes de Usabilidade](#avaliação-dos-testes-de-usabilidade)

# Teste de Software
**REQUISITOS FUNCIONAIS**
RF-001: Registro de Usuário<b>
Objetivo do Teste: Verificar se o sistema permite que os usuários se registrem com sucesso e se eles conseguem fazer login após o registro.<br>
Passos do Teste:
Acesse a página de registro.
Preencha todos os campos obrigatórios.
Submeta o formulário de registro.
Faça login com as credenciais recém-registradas.
Verifique se o login é bem-sucedido.
<br>
Resultado: O registro e o login são concluídos com sucesso.

RF-002: Perfil de Usuário Comum ou Administrador
Objetivo do Teste: Garantir que o sistema atribua corretamente os perfis de usuário (Comum ou Administrador) e que as permissões de acesso sejam aplicadas conforme o esperado.

Passos do Teste:

Crie uma conta de usuário comum.
Verifique se as funcionalidades disponíveis para o usuário comum estão corretas.
Crie uma conta de administrador.
Verifique se as funcionalidades administrativas estão disponíveis apenas para o perfil de administrador.

Resultado: Os perfis de usuário são atribuídos corretamente, e as permissões de acesso estão de acordo.

RF-003: Módulo de Doações
Objetivo do Teste: Confirmar que o módulo de doações permite aos usuários realizar doações para causas específicas ou organizações beneficentes.
Passos do Teste:
Acesse o módulo de doações.
Selecione uma causa ou organização.
Complete o processo de doação.
Verifique se a doação é registrada corretamente no sistema.

Resultado: O módulo de doações permite doações bem-sucedidas.

RF-004: Gerenciamento de Parceiros
Objetivo do Teste: Testar as funcionalidades de gerenciamento de parceiros para adicionar, editar e remover informações de parceiros.
Passos do Teste:
Adicione um novo parceiro.
Edite as informações do parceiro recém-adicionado.
Remova o parceiro do sistema.
Verifique se as alterações são refletidas corretamente no sistema.

Resultado: O sistema gerencia parceiros conforme especificado.

RF-005: Busca de Serviços e Detalhes
Objetivo do Teste: Verificar se os usuários podem realizar buscas por serviços e obter informações detalhadas sobre cada serviço.
Passos do Teste:
Utilize a função de busca para encontrar um serviço específico.
Verifique se as informações detalhadas do serviço são exibidas corretamente.

Resultado: A busca por serviços e a visualização de detalhes são bem-sucedidas.

RF-006: Avaliações e Comentários dos Serviços
Objetivo do Teste: Testar a funcionalidade de avaliações e comentários dos serviços.
Passos do Teste:
Avalie um serviço.
Adicione um comentário ao serviço avaliado.
Verifique se a avaliação e o comentário são exibidos corretamente.

Resultado: Avaliações e comentários são registrados e exibidos conforme esperado.

RF-007: Suporte ao Usuário
Objetivo do Teste: Certificar-se de que os usuários conseguem entrar em contato com o suporte para obter assistência ou relatar problemas.
Passos do Teste:
Acesse a função de suporte ao usuário.
Envie uma mensagem de teste para o suporte.
Verifique se a mensagem é recebida e registrada no sistema.

Resultado: O suporte ao usuário funciona corretamente.

RF-008: Mapeamento de Lojistas
Objetivo do Teste: Testar a funcionalidade de mapeamento de lojistas para localizar lojas físicas associadas ao serviço.
Passos do Teste:
Acesse a função de mapeamento de lojistas.
Pesquise lojas em uma localização específica.
Verifique se o mapa exibe corretamente as lojas encontradas.

Resultado: O mapeamento de lojistas funciona conforme esperado.

RF-009: Agendamentos On-line
Objetivo do Teste: Confirmar que os usuários conseguem agendar serviços on-line, escolhendo datas e horários disponíveis.
Passos do Teste:
Acesse a função de agendamento on-line.
Escolha um serviço e uma data disponível.
Complete o processo de agendamento.
Verifique se o agendamento é refletido corretamente no sistema.

Resultado: O agendamento on-line é bem-sucedido.

RF-010: Fóruns de Discussão
Objetivo do Teste: Testar a funcionalidade dos fóruns de discussão para interação entre usuários.
Passos do Teste:
Acesse os fóruns de discussão.
Crie um tópico de discussão.
Comente em um tópico existente.
Verifique se as interações são registradas corretamente.

Resultado: Os fóruns de discussão suportam interações entre usuários.

RF-011: Aba Educacional com Suporte em Texto e Vídeo
Objetivo do Teste: Confirmar que a aba educacional fornece suporte adequado em texto e vídeo para ajudar os usuários a compreender os serviços e recursos disponíveis.
Passos do Teste:
Acesse a aba educacional.
Explore os recursos de suporte em texto.
Verifique se os vídeos de suporte são reproduzidos corretamente.

Resultado: A aba educacional oferece suporte em texto e vídeo conforme esperado.

**REQUISITOS NÃO FUNCIONAIS** 
RNF-001: Responsividade em Dispositivos Móveis
Objetivo do Teste: Verificar se o sistema é responsivo e apresenta corretamente em dispositivos móveis.
Passos do Teste:
Acesse o sistema a partir de um dispositivo móvel.
Navegue pelas diferentes funcionalidades.
Verifique se a interface se ajusta adequadamente ao tamanho da tela.

Resultado: O sistema é responsivo e proporciona uma experiência de usuário consistente em dispositivos móveis.

RNF-002: Processamento de Requisições em 5s
Objetivo do Teste: Confirmar que o sistema processa as requisições do usuário dentro do limite máximo de 5 segundos.
Passos do Teste:
Execute diferentes operações no sistema.
Meça o tempo de resposta para cada requisição.
Verifique se todas as requisições são processadas em no máximo 5 segundos.

Resultado: Todas as requisições são processadas dentro do limite de tempo especificado.

RNF-003: Acessibilidade
Objetivo do Teste: Garantir que o sistema é acessível, atendendo aos padrões de acessibilidade.
Passos do Teste:
Utilize ferramentas de leitura de tela para navegar pelo sistema.
Verifique se todos os elementos são adequadamente descritos.
Teste a navegação utilizando apenas o teclado.

Resultado: O sistema atende aos requisitos de acessibilidade, proporcionando uma experiência inclusiva.

RNF-004: Segurança de Dados
Objetivo do Teste: Verificar se as medidas de segurança de dados estão implementadas conforme especificado.
Passos do Teste:
Tente acessar dados protegidos sem as devidas permissões.
Verifique se há criptografia adequada para dados sensíveis.
Teste a integridade dos dados após possíveis violações de segurança.

Resultado: As medidas de segurança são eficazes na proteção dos dados.

RNF-005: Realização de Backups Regularmente
Objetivo do Teste: Confirmar que o sistema realiza backups regularmente e que esses backups podem ser restaurados.
Passos do Teste:
Verifique a programação de backup.
Execute um backup manual.
Tente restaurar o sistema a partir de um backup.

Resultado: O sistema realiza backups conforme programado e a restauração é bem-sucedida.

RNF-006: Customização de Perfil do Usuário
Objetivo do Teste: Testar se os usuários conseguem personalizar seus perfis conforme necessário.
Passos do Teste:
Acesse a página de edição de perfil.
Faça alterações nas configurações do perfil.
Verifique se as alterações são salvas corretamente.

Resultado: Os usuários podem customizar seus perfis com sucesso.

RNF-007: Compartilhamento de Informações nas Redes Sociais
Objetivo do Teste: Confirmar que os usuários podem compartilhar informações do sistema em redes sociais.
Passos do Teste:
Utilize a opção de compartilhamento em uma funcionalidade específica.
Verifique se as informações são compartilhadas corretamente nas redes sociais selecionadas.

Resultado: O compartilhamento de informações nas redes sociais está funcional.

RNF-008: Escolha de Localização
Objetivo do Teste: Testar se os usuários podem escolher sua localização no sistema.
Passos do Teste:
Acesse as configurações de localização.
Escolha uma nova localização.
Verifique se a localização é atualizada corretamente.

Resultado: Os usuários conseguem escolher e atualizar sua localização no sistema.

RNF-009: Suporte a Incrementos
Objetivo do Teste: Verificar se o sistema suporta incrementos, permitindo futuras expansões ou melhorias.
Passos do Teste:
Identifique uma área do sistema para incremento.
Implemente uma melhoria ou expansão.
Verifique se a adição é integrada sem causar problemas no sistema existente.

Resultado: O sistema suporta incrementos sem comprometer a funcionalidade existente.

RNF-010: Robustez do Sistema
Objetivo do Teste: Testar a robustez do sistema em condições adversas.
Passos do Teste:
Introduza dados incorretos ou inválidos.
Simule tráfego intenso no sistema.
Avalie a resposta do sistema a falhas inesperadas.

Resultado: O sistema é robusto e mantém um desempenho aceitável mesmo em condições adversas.

RNF-011: Integração com Outro Sistema
Objetivo do Teste: Confirmar que o sistema pode trabalhar integradamente com outro sistema.
Passos do Teste:
Estabeleça a conexão entre os dois sistemas.
Transmita dados entre os sistemas.
Verifique se as operações integradas são bem-sucedidas.

Resultado: O sistema pode trabalhar de forma integrada com o sistema especificado.

## Plano de Testes de Software

Preencha a tabela com o plano dos testes. Para cada Caso de Teste (CT), associe qual o Requisito  Funcional ou não funcional que ele está verificando. Associe também a página (ou artefato) onde o teste será realizado e descreva o cenário do teste. Veja a tabela de exemplo.


**Caso de Teste** | **CT01 - Criar conta parte 1**
 :--------------: | ------------
**Procedimento**  | 1) Usuário informa nome, sobrenome, email, senha, Estado e Cidade e clica no botão "Continuar".<br>2) A aplicação verifica se os dados são válidos e informa ao usuário caso não sejam.
**Requisitos associados** | RF-001
**Resultado esperado** | Prosseguir para a parte 2 do cadastro.
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT02 - Criar conta parte 2**
 :--------------: | ------------
**Procedimento**  | 1) Usuário informa gênero, seu tipo de usuário (cuidador ou comum), data de nascimento e clica em criar.<br>2) A aplicação verifica se os dados são válidos e informa ao usuário caso não sejam.<br> 3) A aplicação armazena os dados e direciona o usuário para a tela de login.
**Requisitos associados** | RF-001
**Resultado esperado** | Criação de cadastro
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro.
**Resultado obtido** | Sucesso.

## Registro dos Testes de Software

Esta seção deve apresentar o relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado no plano de testes pré-definido. Documente cada caso de teste apresentando um vídeo ou animação que comprove o funcionamento da funcionalidade. Veja os exemplos a seguir.

|*Caso de Teste*                                 |*TC-01 - Criar uma conta*                                         |
|---|---|
|Requisito Associado | RF-004 - Usuários não autenticados podem se cadastrar para criar uma conta e serem autenticados.|
|Link do vídeo do teste realizado: | https://1drv.ms/u/s!AhD2JqpOUvJChapRtRSQ9vPzbNLwGA?e=mxZs6t| 

|*Caso de Teste*                                 |*TC-02 - Efetuar Login (usuário autenticado)*                                         |
|---|---|
|Requisito Associado | RF-004 - Usuários não autenticados podem se cadastrar para criar uma conta e serem autenticados.|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar | 


## Avaliação dos Testes de Software

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.



## Testes de unidade automatizados (Opcional)

Se o grupo tiver interesse em se aprofundar no desenvolvimento de testes de software, ele podera desenvolver testes automatizados de software que verificam o funcionamento das funções JavaScript desenvolvidas. Para conhecer sobre testes unitários em JavaScript, leia 0 documento  [Ferramentas de Teste para Java Script](https://geekflare.com/javascript-unit-testing/).


# Testes de Usabilidade

**Cenário 1: Aline - Veterinária**
Funcionalidades Avaliadas:

°Divulgação de Serviços
°Campanhas para Adoções Responsáveis
°Bem-Estar Animal

1-Taxa de Sucesso:Aline conseguiu executar as tarefas propostas com sucesso.
2-Satisfação Subjetiva: Aline considerou que a aplicação atendeu satisfatoriamente às suas necessidades, mas acredita que algumas melhorias podem ser feitas. 
Avaliação: 4 (Bom). 
3-Tempo para Conclusão da Tarefa: Aline levou um tempo razoável para concluir as tarefas propostas, semelhante ao que um especialista (desenvolvedor) levaria.

**Cenário 2: Gustavo - Estudante**
Funcionalidades Avaliadas:

°Auxílio com Cuidados Médicos
°Informações sobre Cuidados Básicos

1-Taxa de Sucesso: Gustavo conseguiu executar as tarefas propostas com sucesso.
2-Satisfação Subjetiva: Gustavo ficou satisfeito com as informações fornecidas, mas acredita que algumas funcionalidades podem ser mais intuitivas. 
Avaliação: 4 (Bom). 
3-Tempo para Conclusão da Tarefa: Gustavo levou um tempo aceitável para concluir as tarefas propostas, comparável ao tempo de um especialista.

**Cenário 3: Camila - Fisioterapeuta**
Funcionalidades Avaliadas:

°Auxílio em Clínicas para Animais em Situação Vulnerável
°Divulgação de Eventos de Adoção e Castração
°Divulgação de Pets Perdidos e para Adoção

1-Taxa de Sucesso: Camila conseguiu executar as tarefas propostas com sucesso.
2-Satisfação Subjetiva: Camila ficou muito satisfeita com a aplicação, considerando-a extremamente útil para suas atividades de apoio à causa animal. 
Avaliação: 5 (Ótimo). 
3-Tempo para Conclusão da Tarefa: Camila levou um tempo rápido para concluir as tarefas, demonstrando eficiência na utilização da aplicação.

**Cenário 4: Sofia - Empresária**
Funcionalidades Avaliadas:

°Serviços Gratuitos e a Preço Social
°Parcerias com ONGs

1-Taxa de Sucesso: Sofia conseguiu executar as tarefas propostas com sucesso.
2-Satisfação Subjetiva: Sofia considerou a aplicação eficaz, mas sugeriu algumas melhorias no design para facilitar a navegação.
Avaliação: 4 (Bom). 
3-Tempo para Conclusão da Tarefa: 
Sofia levou um tempo razoável para concluir as tarefas, similar ao tempo de um especialista.
## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Você é um usuário que deseja divulgar seus serviços de veterinária. Acesse a aplicação, encontre a seção de "Fóruns", crie um anúncio para seus serviços e compartilhe as informações relevantes. Avalie a facilidade de uso e a eficácia do processo de divulgação. |
| 2             | Você é um usuário com orçamento limitado que precisa encontrar serviços médicos acessíveis para seu animal de estimação. Utilize o mapa na aplicação para encontrar clínicas e serviços veterinários com preços acessíveis. Avalie a clareza das informações e a facilidade de navegação. |
| 3             | Você é um voluntário. Acesse a seção de "Voluntariado", se cadastre e faça suas doações. |
| 4             | Você é um empresário comprometido com a responsabilidade social que procura estabelecer parcerias com ONGs. Acesse a seção de "Parcerias com ONGs", encontre informações sobre organizações disponíveis para parcerias e inicie o processo de estabelecer uma parceria. Avalie a facilidade de encontrar informações relevantes. |


## Registro de Testes de Usabilidade

Cenário 1: Você é uma pessoa que deseja comprar um iphone. Encontre no site um iphone e veja detalhes de localização e contato da loja que anunciando.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 27.87 segundos                  |
| 2       | SIM             | 5                    | 17.11 segundos                  |
| 3       | SIM             | 5                    | 39.09 segundos                  |
|  |  |  |  |
| **Média**     | 0%           | 0                | 0 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 8.66 segundos |


    Comentários dos usuários: Achei o site muito bom e intuitivo. 
    Não tive dificuldades e acho que ficou bem intuitivo.




Cenário 2: Você é uma pessoa que deseja comprar um smartphone até R$ 2.000,00. Encontre no site smartphone's nessa faixa de preço.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 22.54 segundos                          |
| 2       | SIM             | 5                    | 31.42 segundos                          |
| 3       | SIM             | 5                    | 36.21 segundos                          |
|  |  |  |  |
| **Média**     | 0%           | 0                | 0 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 13.57 segundos |


    Comentários dos usuários: O site é fácil de acessar, mas algumas páginas poderiam 
    redirecionar a gente automaticamente para outras. Senti a falta de mais opções de filtros, 
    tanto na hora da pesquisa, quanto depois dela, nos resultados.




## Avaliação dos Testes de Usabilidade


Tomando como base os resultados obtidos, foi possível verificar que a aplicação web apresenta bons resultados quanto à taxa de sucesso na interação dos usuários, tendo em vista que os cenários propostos foram concluídos com sucesso.

Além disso, a aplicação obteve também uma elevada satisfação subjetiva dos usuários no momento que realizavam os cenários propostos. Prova são as médias das avaliações em cada um dos cenários, que variou entre 4 (bom) e 5 (ótimo).

Com relação ao tempo para conclusão de cada tarefa/cenário, notamos discrepância entre a média de tempo dos usuários e o tempo do especialista/desenvolvedor em todos os cenários. Tal discrepância, em certa medida, é esperada, tendo em vista que o desenvolvedor já tem prévio conhecimento de toda a interface da aplicação, do posicionamento dos elementos, lógica de organização das páginas, etc.

Contudo, tendo em vista que a diferença foi relevante (por exemplo, 113 segundos — média usuários — contra 25 segundos — especialista — no cenário três), e ainda os comentários feitos por alguns usuários, entendemos haver oportunidades de melhoria na usabilidade da aplicação.



