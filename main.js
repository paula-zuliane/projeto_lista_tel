const form = document.getElementById('form-lista');
/*let contatos = document.getElementById('contatos');*/
let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    addLinha();
    atualizaTabela ();
});

function addLinha (){
    const addNome = document.getElementById('nome-add');
    const addNumero = document.getElementById('numero-add');

    /*if(addNome.includes(contatos.value)){
        alert (`o nome de contato ${contatos.value} já é existente. Favor inserir um novo contato!`)
    } else{*/

        let linha = '<tr>';
        linha += `<td>${addNome.value}</td>`;
        linha += `<td>${addNumero.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    /*}*/

    addNome.value = '';
    addNumero.value = '';
};

function atualizaTabela (){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}