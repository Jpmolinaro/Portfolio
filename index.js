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