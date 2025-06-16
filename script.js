function mostrarSurpresa() {
    const div = document.getElementById("surpresa");
    if (div) {
        div.style.display = "block";

        confetti({
            particleCount: 200,
            spread: 120,
            origin: { y: 0.6 }
        });
    } else {
        console.error("Div 'surpresa' não encontrada!");
    }
}
