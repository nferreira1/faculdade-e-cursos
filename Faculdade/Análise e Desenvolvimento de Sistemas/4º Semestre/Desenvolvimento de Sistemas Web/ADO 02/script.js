const btnAcao = document.getElementById("btnAcao");
const resultado = document.getElementById("resultado");

document.addEventListener('DOMContentLoaded', () => {
    alert("Página carregada!");
});

btnAcao.addEventListener("click", () => {
    for (let i = 1; i <= 1000; i++) {
        const p = document.createElement("p");

        if (i === 1) {
            p.style.color = "red";
        }

        if (i % 2 !== 0) {
            p.className = "paragrafo-impar";
        }

        if (i % 3 === 0) {
            p.textContent = `Texto ${i} pin`;
        } else {
            p.textContent = `Texto ${i}`;
        }

        resultado.appendChild(p);
    }

    const json = '{"imagem": "./foto.jpg", "nome": "Nathan Henrique Vieira Ferreira","email": "nathan.1402@hotmail.com", "telefone": "(11) 96250-6450", "dataNascimento": "14/02/2001", "linkedin": "https://www.linkedin.com/in/nathan-ferreira-97a355231/", "github": "https://github.com/nferreira1"}'

    const informacoes = JSON.parse(json)

    document.getElementById("imagem").src = informacoes.imagem;
    document.getElementById("nome").textContent = informacoes.nome;
    document.getElementById("email").textContent = informacoes.email;
    document.getElementById("telefone").textContent = informacoes.telefone;
    document.getElementById("dataNascimento").textContent = informacoes.dataNascimento;
    document.getElementById("linkedin").href = informacoes.linkedin;
    document.getElementById("linkedin").textContent = informacoes.linkedin;
    document.getElementById("github").href = informacoes.github;
    document.getElementById("github").textContent = informacoes.github;
});

