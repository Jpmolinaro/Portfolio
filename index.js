let i = 0;
let text = "Desenvolvedor Front End";

function typeWriter(){
    if(i<text.length){
        document.querySelector(".typeWriter").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

setTimeout(typeWriter, 800);

let technologyName = document.querySelector(".technology-name");
let technologyDescription = document.querySelector(".technology-description");

function iconEvent(icon){
    switch(icon){
        case "html5":
            technologyName.innerHTML = "HTML5";
            technologyDescription.innerHTML = "HTML (Linguagem de Marcação de HiperTexto) é o bloco de construção mais básico da web. Define o significado e a estrutura do conteúdo da web.";
            console.log("html");
            break;
        case "css3":
            technologyName.innerHTML = "CSS3";
            technologyDescription.innerHTML = "CSS (Cascate Style Sheet) é uma linguagem de estilo usada para personalização visual de um site. Ou seja, elas servem para otimizar o conteúdo das páginas e permitir uma apresentação mais amigável para o usuário.";
            console.log("css");
            break;
        case "js":
            technologyName.innerHTML = "JavaScript";
            technologyDescription.innerHTML = "JavaScript é uma linguagem de programação de comportamento que permite a criação de conteúdos dinâmicos, controle de mídias e animações para deixar seu site mais interativo e interessante.";
            console.log("js");
            break;
        case "sass":
            technologyName.innerHTML = "Sass";
            technologyDescription.innerHTML = "SASS (Syntactically Awesome Style Sheets) é uma linguagem de extensão do CSS. A sua ideia é adicionar recursos especiais como variáveis, mixins, funções e operações e outras opções variadas com o obhetivo de tornar o processo de desenvolvimento mais simples e eficiente.";
            console.log("sass");
            break;
        case "node":
            technologyName.innerHTML = "Node";
            technologyDescription.innerHTML = "Node pode ser definido como um ambiente de execução Javascript server-side. Isso significa que com ele é possível criar aplicações JavaScript para rodar como uma aplicação standalone em uma máquina, não dependendo de um browser para a execução.";
            console.log("node");
            break;
        case "github":
            technologyName.innerHTML = "GitHub";
            technologyDescription.innerHTML = "Git e Github nos possibilitam ter uma forma fácil de gerenciar o código-fonte de uma aplicação. O Git é um sistema de controle de versão e o GitHub é uma plataforma para gerenciar o código e criar um ambiente de colaboração entre desenvolvedores, utilizando o Git como sistema de controle.";
            console.log("github");
            break;
    }
};