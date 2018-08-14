class DateHelpers{

    constructor(){
        throw new Error('Esta classe não pode ser instanciada');

    }

    static textoParaData(texto){
        if (!/\d{4}-\d{2}-\d{2}/.test(texto))
            throw new Error('Deve estar no formato aaaa-mm-dd');
        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
    }

    static dataParaTexto(data){
        return `${data.getData()}/${data.getMonth() + 1}/${data.getFullYear()}`;
    }
}