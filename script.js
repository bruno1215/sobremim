document.addEventListener("DOMContentLoaded", function () {
    console.log("Página carregada!");
    // Ajustando responsividade para telas pequenas
    function ajustarLayout() {
        if (window.innerWidth < 600) {
            document.body.style.fontSize = "16px";
        } else {
            document.body.style.fontSize = "20px";
        }
    }
    ajustarLayout();
    window.addEventListener("resize", ajustarLayout);
    // Adicionando animação de fade-in ao carregar
    document.body.style.opacity = "0";
    setTimeout(() => {
        document.body.style.transition = "opacity 1.5s ease-in-out";
        document.body.style.opacity = "1";
    }, 200);
});
