
class Produto {

    constructor() {
        this.id = 1;
        this.arrayProdutos = [];

    }

    limpar() {
        document.getElementById('produto').value = '';
        document.getElementById('quantidade').value = '';
        document.getElementById('precoUnitario').value = '';
    }

    salvar() {
        let produto = this.lerDados();


        if (this.validaCampos(produto) == true) {
            this.adicionar(produto);
            this.limpar();
        };

        this.listaTabela();

    }

    adicionar(produto) {
        this.arrayProdutos.push(produto);
        this.id++;
    }

    listaTabela() {
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';

        for (let i = 0; i < this.arrayProdutos.length; i++) {
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_produto = tr.insertCell();
            let td_Quantidade = tr.insertCell();
            let td_precoU = tr.insertCell();
            let td_precoTotal = tr.insertCell()

            td_id.innerText = this.arrayProdutos[i].id;
            td_produto.innerText = this.arrayProdutos[i].nomeProduto;
            td_Quantidade.innerText = this.arrayProdutos[i].quantidadeProduto;
            td_precoU.innerText = this.arrayProdutos[i].precoU;
            td_precoTotal.innerText = this.arrayProdutos[i].precoU * this.arrayProdutos[i].quantidadeProduto;

        }

    }
    lerDados() {
        //essa variavel produto é um objeto
        let produto = {
        }

        produto.id = this.id;

        produto.nomeProduto = document.getElementById('produto').value;
        produto.quantidadeProduto = document.getElementById('quantidade').value;
        produto.precoU = document.getElementById('precoUnitario').value;

        return produto;
    }

    validaCampos(produto) {
        let msg = '';

        if (produto.nomeProduto === '') {
            msg += 'Informe o nome do produto \n'
        }

        if (produto.quantidadeProduto == '') {
            msg += 'Informe a quantidade do produto \n'
        }

        if (produto.precoU == '') {
            msg += 'Informe o preço unitario do produto \n'
        }

        if (msg != '') {
            alert(msg);
            return false;
        }

        return true;

    }

}

var produto = new Produto();











