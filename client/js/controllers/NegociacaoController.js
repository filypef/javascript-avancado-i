class NegociacaoController{
    constructor(){
        let $ = document.querySelector.bind(document);
        this._data = $('#data');
        this._quantidade = $('#quantidade');
        this._valor = $('#valor');
    }

    adiciona(e){
        e.preventDefault();
        
        let data = new Date(
            ...this._data.value.split('-')
            .map((item, index) => {
                return item - index % 2;
            })
        );
        
        let negociacao = new Negociacao(
            data,
            this._quantidade.value,
            this._valor.value
        )

        console.log(negociacao);

        
        // //Spread Operator - Quebra seu array em argumentos
        // console.log('Date Spread Operator: ', ...this._data.value.split('-'));
        // //Map - Invoca uma função callback e cria um novo array
        // console.log('Date Spread Operator Map: ', ...this._data.value.split('-').map(function(item, index){return item - index % 2;}));

        

        // const negociacao = new Negociacao();
    }
}