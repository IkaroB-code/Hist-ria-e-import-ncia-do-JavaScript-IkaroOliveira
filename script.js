// Exemplo 1 — Mostrar mensagem no console
console.log("JavaScript carregado com sucesso!");

// Exemplo 2 — Manipular o DOM
document.getElementById("titulo").style.color = "darkblue";

// Exemplo 3 — Função simples
function saudacao(nome) {
  return "Olá, " + nome + "!";
}

console.log(saudacao("Ikaro"));

// Exemplo 4 — Evento de clique
document.getElementById("botao").addEventListener("click", () => {
  alert("Você clicou no botão! Isso é JavaScript funcionando no navegador.");
});
