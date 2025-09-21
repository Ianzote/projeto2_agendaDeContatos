//seleção de elemntos do DOM

const form = document.getElementById('form-agenda');
const inputNome = document.getElementById('espaço-nome');
const inputTelefone = document.getElementById('espaço-phone');
const tabela = document.getElementById('tabela-agenda');   
const contatos = []; // armazenar os contatos

//  mascara para o telefone
inputTelefone.addEventListener('input', function(e) {   
    let valor = e.target.value;
    
    valor = valor.replace(/\D/g, ''); // remover tudo que n for digito
    
    if (valor.length > 0) {
        valor = '(' + valor;
    }
    if (valor.length > 3) {
        valor = valor.slice(0, 3) + ') ' + valor.slice(3);
    }

    if (valor.length > 10) {
        valor = valor.slice(0, 10) + '-' + valor.slice(10, 14);
    }
    e.target.value = valor;
});

//adicionar contato

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    // se os contatos que eu quiser add ja estiverem na lista, n add
    
    const verifica = contatos.some(contato => 
        contato.nome === inputNome.value || contato.telefone === inputTelefone.value);

    if (verifica) {
        alert('Contato já existente!');
    } else {
        contatos.push({ nome: inputNome.value, telefone: inputTelefone.value });

    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputTelefone.value}</td>`;
    linha += '</tr>';

    linhas += linha;

    const corpoTabela = tabela.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputNome.value = '';
    inputTelefone.value = '';
    }
});