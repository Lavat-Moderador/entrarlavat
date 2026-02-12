
LAVAT - Laboratório de Variáveis Ambientais Tropicais 

https://lavat-moderador.github.io/entrarlavat/index.html

=====================================================

LAVAT (Laboratório de Variáveis Ambientais Tropicais) é um portal informativo dedicado às atividades de pesquisa realizadas pelo laboratório, especializado no monitoramento de variáveis ambientais tropicais, como ozônio, radiação ultravioleta e outras condições meteorológicas. Este site oferece informações sobre a história do LAVAT, os equipamentos utilizados, a equipe envolvida e as sondagens de ozônio, além de permitir o contato com a instituição.

Funcionalidades
-------------------

- __Página Principal__ (```index.html```): Apresenta o LAVAT, com informações gerais, links para as seções do site, mapa com a localização e outros dados importantes. Este arquivo é a página principal e contém as seções "Sobre", "Equipe", "Equipamentos", etc.

- __História__: Apresentação detalhada da história do laboratório, desde sua fundação até suas conquistas e inovações.

- __Equipamentos__: Descrição dos principais equipamentos utilizados no laboratório, como o espectrofotômetro Dobson, o Brewer, o radiômetro GUV e a estação solarimétrica.

- __Equipe__: Detalhes sobre a equipe responsável pelas atividades de pesquisa, incluindo técnicos, bolsistas e responsáveis pela operação do laboratório.

- __Sondagens e Dados__: Acesso a dados e informações sobre as sondagens de ozônio e outros resultados de medições.

- __Interatividade__: O site oferece funcionalidades interativas como mapas (Google Maps) para exibir a localização do laboratório, além de botões e links para facilitar a navegação entre as diferentes abas.

- __Responsividade__: O design do site é responsivo, adaptando-se a diferentes dispositivos, como desktops, tablets e smartphones.

Como Rodar
-----------

Este projeto foi desenvolvido utilizando ```HTML```, ```CSS``` e ```JavaScript```, e pode ser visualizado diretamente em qualquer navegador moderno, sem necessidade de instalação de servidores ou ferramentas adicionais.

Passos:

1. Clone ou baixe o repositório:
   ```git clone https://github.com/Lavat-Moderador/entrarlavat```

2. Abra o arquivo index.html em seu navegador:
   - Não há necessidade de instalar ou configurar nada.
   - Basta abrir o arquivo index.html em seu navegador preferido para visualizar a página principal e navegar entre as abas.

Arquivos principais:
----------------------

- __index.html__: Página principal contendo a estrutura e conteúdo do site, com links para as outras seções do site.
- __historia.html__: Página com informações sobre a história do LAVAT.
- __sondagem.html__: Página dedicada às sondagens de ozônio realizadas pelo laboratório.
- __dados.html__: Página que contém dados e informações sobre as medições.
- __documentos.html__: Página com a documentação do laboratório.
- __style.css__: Arquivo CSS com os estilos e layout do site.
- __app.js__: Arquivo JavaScript que contém a lógica de interatividade, como a agenda de lançamentos.
- __Imagens__: O projeto utiliza imagens para representar a logo do LAVAT, fotos de equipamentos e mapas. Essas imagens estão localizadas nas pastas figuras/ e imagens_equipamento/.

Estrutura do Projeto
----------------------

A estrutura de pastas do projeto é a seguinte:

<pre>
/LAVAT
  ├── index.html           # Página principal do site
  ├── historia.html        # Página com informações sobre a história do LAVAT
  ├── sondagem.html        # Página sobre as sondagens de ozônio
  ├── dados.html           # Página com dados de medições
  ├── documentos.html      # Página com a documentação
  ├── style.css            # Arquivo de estilos
  ├── app.js               # Lógica de interatividade
  ├── figuras/             # Pasta com imagens (logo, mapas, etc.)
  ├── imagens_equipamento/ # Pasta com imagens dos equipamentos
  └── imagens_histórico/   # Pasta com imagens históricas do laboratório
</pre>

Equipamentos
-------------

O LAVAT utiliza diversos equipamentos para medir variáveis ambientais e contribuir para o avanço da pesquisa científica. Alguns dos principais equipamentos incluem:

1. __Dobson__: Espectrofotômetro utilizado para medir o perfil da camada de ozônio. É o equipamento mais antigo utilizado para esse fim e funciona manualmente.
2. __Brewer__: Espectrofotômetro automatizado que mede não apenas a densidade de ozônio, mas também a radiação ultravioleta e a concentração de dióxido de enxofre (SO₂).
3. __GUV__: Radiômetro que mede radiação ultravioleta (UV) em vários comprimentos de onda e radiação fotossinteticamente ativa (PAR).
4. __Estação Solarimétrica__: Equipamento para medir radiação solar e outras variáveis ambientais como temperatura, umidade e direção do vento. A estação está localizada na COENE-INPE, em Natal.
5. __Estação Meteorológica Davis__: Estação meteorológica portátil que monitora diversas variáveis climáticas, como pressão, temperatura, umidade e velocidade do vento.
6. __Sondas de Ozônio__: Utilizadas para medir a concentração de ozônio na atmosfera, as sondas são lançadas semanalmente pelo INPE em parceria com a NASA.

Esses equipamentos são fundamentais para o monitoramento e estudo de variáveis ambientais nos trópicos, contribuindo para a pesquisa sobre a camada de ozônio e a radiação ultravioleta.

Dependências
-------------

Este projeto não depende de frameworks complexos, mas utiliza as seguintes bibliotecas externas:

- __FontAwesome__: Para os ícones utilizados no site.
- __Google Fonts__: Para a fonte "Poppins", que é utilizada no design do site.

Contribuições
--------------

Se você deseja contribuir com este projeto, siga as etapas abaixo:

1. Faça um fork deste repositório.
2. Clone o repositório para a sua máquina local.
3. Crie uma nova branch para suas alterações (git checkout -b minha-contribuicao).
4. Faça suas alterações e commit com uma mensagem descritiva.
5. Envie um pull request para o repositório original.

Contato
--------

Para mais informações ou dúvidas, entre em contato com o **Laboratório de Variáveis Ambientais Tropicais**:

- Endereço: Rua Carlos Serrano, 2073, Lagoa Nova, Natal/RN, Brasil
- Telefone: (84) 3204-9100 / 3204-9115

Licença
--------

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE para mais detalhes.


Documentação do CSS
------

1. **Rolagem Suave**
    ```css
    html {
        scroll-behavior: smooth;
    }
    ```
    Adiciona um efeito de rolagem suave ao navegar entre as seções da página.

1. __Reset de Estilos__
    ```css
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Rawline', sans-serif;
    }
    ```
    Define um "reset" para garantir que todos os elementos da página comecem com margens e preenchimentos iguais a zero. Utiliza box-sizing: border-box para que o padding e a borda sejam incluídos no tamanho dos elementos. A fonte padrão é Rawline, com fallback para sans-serif.
1. __Cor Padrão para Ícones__
    ```css
    .fa {
        color: #0075c9;
    }
    ```
    Aplica a cor azul (```#0075c9```) a todos os ícones que utilizam a classe ```.fa``` (geralmente _Font Awesome_).
1. __Estrutura Centralizada (Layout)__
    ```css
    .center {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2%;
        display: flex;
        flex-wrap: wrap;
    }
    ```
    Centraliza o conteúdo com uma largura máxima de 1200px, adiciona espaçamento lateral (2%) e permite que os itens dentro do contêiner se ajustem em várias linhas com ```flex-wrap: wrap```.
1. __Cabeçalho Padrão Gov (Estilo do Cabeçalho)__
    ```css
    header {
        background-color: #FFFFFF;
        padding: 20px 0;
        border-bottom: 1px solid #e1e1e1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
    }
    ```
    Define o estilo do cabeçalho com fundo branco, padding de 20px, borda inferior sutil e usa ```display: flex``` para organizar os itens de forma responsiva.
1. __Logo__
    ```css
    .logo {
        display: flex;
        align-items: center;
    }
    .logo-img {
        height: 40px;
        margin-right: 10px;
        margin-left: 10px;
    }
    .logo h2 {
        color: #333333;
        font-weight: normal;
        font-size: 18px;
        text-align: left;
    }
    ```
    Organiza o logo e o texto de forma horizontal com ```display: flex```. A imagem do logo tem altura de 40px e margens para espaçamento. O título do logo é cinza escuro e com fonte de tamanho 18px.
1. __Menu__
    ```css
    .menu {
        width: 60%;
        text-align: center;
    }
    .menu a {
        color: #0C326F;
        font-size: 16px;
        text-decoration: none;
        margin-right: 20px;
        transition: 0.3s;
    }
    .menu a:hover {
        color: #0075C9;
    }
    ```
    O menu ocupa 60% da largura, centraliza os itens e aplica uma cor azul escura aos links. Ao passar o mouse sobre um link, a cor muda para azul mais claro.
1. __Botões do Menu__
    ```css
    .menu .btn-menu {
        background-color: #3366CC;
        display: inline-block;
        padding: 6px 12px;
        color: #FFFFFF;
        border-radius: 4px;
        margin-right: 20px;
    }
    .menu .btn-menu:hover {
        background-color: #005E82;
    }
    ```
    Os botões do menu possuem fundo azul, texto branco e bordas arredondadas. Ao passar o mouse sobre o botão, a cor de fundo muda para um azul mais escuro.
1. __Responsividade (Media Queries)__
    ```css
    @media (max-width: 768px) {
        header {
            flex-direction: column;
            align-items: flex-start;
            padding: 10px 20px;
        }
        .menu {
            justify-content: flex-start;
            width: 100%;
            flex-wrap: wrap;
            gap: 10px;
        }
        .menu a {
            font-size: 14px;
        }
        .menu .btn-menu {
            padding: 4px 8px;
        }
    }
    ```
    Ajusta o layout para dispositivos com largura menor que 768px (típico para celulares). O cabeçalho organiza os itens verticalmente, e o menu ocupa toda a largura da tela.
1. __Seção Principal__
    ```css
    section.main {
        background-color: #F9F9F9;
        padding: 40px 0;
        background-size: cover;
        background-attachment: fixed;
    }
    ```
    Define a seção principal com fundo cinza claro e um fundo de imagem que fica fixo ao rolar a página.
1. __Botão da Chamada para Ação (CTA)__
    ```css
    .main-cta button {
        background-color: #0075C9;
        padding: 10px 20px;
        color: #FFFFFF;
        font-size: 16px;
        border-radius: 4px;
        border: 0;
        cursor: pointer;
        margin-top: 10px;
    }
    .main-cta button:hover {
        background-color: #005E82;
        transition: 0.3s;
    }
    ```
    O botão da chamada para ação tem um fundo azul, texto branco e bordas arredondadas. O fundo muda para um tom de azul mais escuro ao passar o mouse.
1. __Rodapé__
    ```css
    footer {
        background-color: #0b1e44;
        text-align: center;
        padding: 20px 0;
        font-size: 14px;
        color: #F9F9F9;
    }
    ```
    O rodapé tem fundo azul escuro e texto centralizado em branco. O tamanho da fonte é de 14px.

Documentação do app.js
----

1. **Evento de Clique no Botão**
    ```javascript
    document.getElementById("myButton").addEventListener("click", function() {
        document.getElementById("message").textContent = "Você clicou no botão!";
    });
    ```
    * __Objetivo__: Este trecho de código adiciona um event listener (ou ouvinte de evento) ao botão com o ID myButton. Quando o botão é clicado, a função de callback é executada, e ela altera o conteúdo de texto do elemento com o ID message para "Você clicou no botão!".
    * __Explicação__:
        1. ```document.getElementById("myButton")```: Seleciona o botão com o ID myButton.
        1. ```.addEventListener("click", function() {...})```: Adiciona um ouvinte de evento de clique ao botão, de forma que quando ele for clicado, a função de callback seja chamada.
        1. ```document.getElementById("message").textContent```: Altera o conteúdo de texto do elemento com o ID message.
1. __Função de Redirecionamento para Agenda__
    ```javascript
    function openAgenda() {
        window.location.href = "agenda.html"; // Substitua pelo link correto da página de agenda
    }
    ```
    * __Objetivo__: Esta função openAgenda redireciona o usuário para uma página de agenda (agenda.html) quando chamada. Isso é útil, por exemplo, quando um botão ou link é clicado e deve levar o usuário para a página de agenda do site.
    * __Explicação__:<br>
        * ```window.location.href = "agenda.html";```: Este comando altera a localização atual do navegador, fazendo com que ele navegue até a página agenda.html.
        * Nota: Substitua "agenda.html" pelo link correto se a página de agenda estiver em um caminho diferente.


1. __Resumo__:
    - O primeiro bloco de código manipula um evento de clique no botão, alterando o conteúdo de texto de um elemento específico quando o botão é clicado.
    - O segundo bloco de código é uma função que realiza o redirecionamento do navegador para uma nova página de agenda.
