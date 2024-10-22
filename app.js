document.getElementById("myButton").addEventListener("click", function() {
    document.getElementById("message").textContent = "Você clicou no botão!";
});


function openAgenda() {
    window.location.href = "agenda.html"; // Substitua pelo link correto da página de agenda
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('reveal-button').addEventListener('click', function() {
        var maisSobre = document.getElementById('mais-sobre');
        var seta = document.querySelector('.seta');
        if (maisSobre.style.display === 'none' || maisSobre.style.display === '') {
            maisSobre.style.display = 'block';
            seta.style.transform = 'rotate(180deg)'; // Gira a seta para cima
        } else {
            maisSobre.style.display = 'none';
            seta.style.transform = 'rotate(0deg)'; // Gira a seta para baixo
        }
    });
});
