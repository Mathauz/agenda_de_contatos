const form = document.getElementById("fa");
const ndc = [];
const tel = [];

let lins = '';

form.addEventListener("submit", function(e) {
    e.preventDefault();
    if (validaTelefone()) {
        adl();
        att();
    }
});

function validaTelefone() {
    const itel = document.getElementById("telefone").value;
    const regex = /^\d{10,11}$/;
    if (!regex.test(itel)) {
        alert("O telefone deve ter entre 10 e 11 dígitos.");
        return false;
    }
    return true;
}

function adl() {
    const inoc = document.getElementById("nome").value;
    const itel = document.getElementById("telefone").value;

    ndc.push(inoc);
    tel.push(itel);

    let lin = '<tr>';
    lin += `<td>${inoc}</td>`;
    lin += `<td>${itel}</td>`;
    lin += '</tr>';

    lins += lin;

    document.getElementById("nome").value = '';
    document.getElementById("telefone").value = '';
}

function att() {
    const ct = document.querySelector("tbody");
    ct.innerHTML = lins;
}
