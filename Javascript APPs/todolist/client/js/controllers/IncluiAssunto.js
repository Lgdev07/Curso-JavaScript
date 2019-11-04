class IncluiAssunto{

    constructor() {

        let $ = document.querySelector.bind(document)

        this.assunto = $('#assunto')
        this.dataInicio = dataDeHoje()
        this.dataFim = $('#data-fim')
        this.listaItens = []
    }

    adicionar(event){
        event.preventDefault()

        let novaData = transformaParaData(this.dataFim.value)
        criaTr(this.assunto.value, this.dataInicio, novaData)
        let Assunto = new Assunto(this.assunto, this.dataInicio, this.dataFim)

    }

}

function dataDeHoje (){
    today = new Date()
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    
    if(dd<10) dd='0'+dd;
    if(mm<10) mm='0'+mm;
    return (dd+'/'+mm+'/'+yyyy);
    };

function transformaParaData(dataValue) {
    data = new Date(dataValue)
    var dd = data.getDate();
    var mm = data.getMonth()+1;
    var yyyy = data.getFullYear();
    
    if(dd<10) dd='0'+dd;
    if(mm<10) mm='0'+mm;
    return (dd+'/'+mm+'/'+yyyy);
    };


function criaTr(...args){
    let newTr = document.createElement('tr')
    
    args.forEach(element => {
        let newTd = document.createElement('td')
        newTd.innerHTML = element
        newTr.appendChild(newTd)
    });
    
    let actualTbody = document.querySelector('tbody')
    let newTd = document.createElement('td')
    let botao = document.createElement('button')
    botao.id='concluir-botao';
    botao.style='width:57px;height:18px'

    newTd.appendChild(botao)
    newTr.appendChild(newTd)
    
    this.listaItens.push(newTr)

    localStorage.setItem('itens', JSON.stringify(this.listaItens))

    actualTbody.appendChild(newTr)
}   