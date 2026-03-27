const form = document.getElementById("form");

const nome = document.getElementById("nome");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const mensagem = document.getElementById("mensagem");
const termos = document.getElementById("termos");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let valido = true;

  if (nome.value.length < 3) {
    erroNome.innerText = "Mínimo 3 caracteres";
    valido = false;
  } else {
    erroNome.innerText = "";
  }

  if (!email.value.includes("@")) {
    erroEmail.innerText = "E-mail inválido";
    valido = false;
  } else {
    erroEmail.innerText = "";
  }

  if (telefone.value.length < 14) {
    erroTelefone.innerText = "Telefone inválido";
    valido = false;
  } else {
    erroTelefone.innerText = "";
  }

  if (mensagem.value.length < 10) {
    erroMensagem.innerText = "Mínimo 10 caracteres";
    valido = false;
  } else {
    erroMensagem.innerText = "";
  }

  if (!termos.checked) {
    erroTermos.innerText = "Aceite os termos";
    valido = false;
  } else {
    erroTermos.innerText = "";
  }

  if (valido) {
    alert("Dados enviados com sucesso!");
    form.reset();
  }
});

telefone.addEventListener("input", () => {
  let v = telefone.value.replace(/\D/g, "");
  v = v.replace(/^(\d{2})(\d)/, "($1) $2");
  v = v.replace(/(\d{5})(\d)/, "$1-$2");
  telefone.value = v;
});