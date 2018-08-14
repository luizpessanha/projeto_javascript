













class NegociacaoController {

    constructor(){
        let $ = document.querySelector.bind(document);
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        this._listaNegociacoes = new ListaNegociacoes();



        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        this._negociacoesView.update(this._listaNegociacoes);

    }

    adiciona(event){
        event.preventDefault();
        
        this._listaNegociacoes.adiciona(this._criarNegociacao());
        this._negociacoesView.update(this._listaNegociacoes);
        this._limpaFormulario;
        
    }

    _limpaFormulario(){
        form = document.querySelector(".form");
        form.reset();
        this._inputData.focus;

    }
    _criarNegociacao(){
        return new Negociacao(
                DateHelper.textoParaData(this._inputData.value),
                this._inputQuantidade.value,
                this._inputValor.value
        );
        

    }

}