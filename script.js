function rolar() {
    document.getElementById("introducao").scrollIntoView({
        behavior: "smooth"
    });
}

function contador(id, final, velocidade){
    let numero = 0;

    const intervalo = setInterval(() => {
        numero += Math.ceil(final / 100);

        if(numero >= final){
            numero = final;
            clearInterval(intervalo);
        }

        document.getElementById(id).innerText = numero + "+";
    }, velocidade);
}

window.onload = () => {
    contador("num1", 5000, 30);
    contador("num2", 120, 50);
    contador("num3", 300, 40);
};
