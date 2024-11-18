document.getElementById("myButton").addEventListener("click", function() {
    document.getElementById("message").textContent = "Você clicou no botão!";
});


function openAgenda() {
    window.location.href = "agenda.html"; // Substitua pelo link correto da página de agenda
}

document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.1 });

    // Seleciona todos os elementos de histórico
    document.querySelectorAll(".conteudo-historico").forEach(element => {
        element.classList.add("hidden"); // Adiciona classe 'hidden' inicialmente
        observer.observe(element); // Observa cada elemento
    });
});
