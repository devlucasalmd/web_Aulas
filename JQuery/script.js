var itens = [];

function Item(nomeItem, quantidade, preco) {
    var nomeItem = nomeItem;
    var quantidade = quantidade;
    var preco = preco;
}

function adicionarItem() {
    var nomeItemNovo = $("#nomeItemId").val();
    var quantidadeNovo = $("#quantidadeId").val();
    var precoNovo = $("#precoId").val();
    var novoItem = new Item(nomeItemNovo, quantidadeNovo, precoNovo);
    itens.push(novoItem);
}


function atualizaTabela(item) {

    var htmlFinal = "<tr>";

    htmlFinal += "<td>" + item.nomeItem + "</td>";
    htmlFinal += "<td>" + item.quantidade + "</td>";
    htmlFinal += "<td>" + item.preco + "</td>";
    htmlFinal += "</tr>";
    $("#tabelaItensId").append(htmlFinal);  
}