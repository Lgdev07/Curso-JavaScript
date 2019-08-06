
let tbody = document.querySelector('tbody')
let tr = tbody.getElementsByTagName("tr")
let td = null

for (i=0;i<tr.length;i++){
    let imc = tr[i].querySelector('td.info-peso').innerHTML / (tr[i].querySelector('td.info-altura').innerHTML * 2)
    tr[i].querySelector('td.info-imc').innerHTML = imc.toFixed(2)
}

document.querySelector('button#adicionar').addEventListener('click', clicar_adicionar)
document.querySelector('button#remover').addEventListener('click', clicar_remover)
document.querySelector('#adicionar').addEventListener('mouseover', mouse_sobre_add_in)
document.querySelector('#adicionar').addEventListener('mouseout', mouse_sobre_add_out)
document.querySelector('#remover').addEventListener('mouseover', mouse_sobre_rem_in)
document.querySelector('#remover').addEventListener('mouseout', mouse_sobre_rem_out)

function clicar_adicionar(){
    let criar_td_nome = document.createElement('td')
    criar_td_nome.setAttribute('class', 'info-nome')

    let criar_td_peso = document.createElement('td')
    criar_td_peso.setAttribute('class', 'info-peso')

    let criar_td_altura = document.createElement('td')
    criar_td_altura.setAttribute('class', 'info-altura')

    let criar_td_gordura = document.createElement('td')
    criar_td_gordura.setAttribute('class', 'info-gordura')

    let criar_td_imc = document.createElement('td')
    criar_td_imc.setAttribute('class', 'info-imc')

    let criar_botao = document.createElement('button')
    criar_botao.setAttribute('id', 'remover')

    let criar_td_botao = document.createElement('td')
    criar_td_botao.setAttribute('class', 'info-btn')
    

    let criar_tr_paciente = document.createElement('tr')
    criar_tr_paciente.setAttribute('class', 'paciente')

    let tabela_tbody = document.querySelector('tbody#tabela-pacientes')

    tabela_tbody.appendChild(criar_tr_paciente)
    criar_tr_paciente.appendChild(criar_td_nome)
    criar_tr_paciente.appendChild(criar_td_peso)
    criar_tr_paciente.appendChild(criar_td_altura)
    criar_tr_paciente.appendChild(criar_td_gordura)
    criar_tr_paciente.appendChild(criar_td_imc)
    criar_tr_paciente.appendChild(criar_td_botao)
    criar_td_botao.appendChild(criar_botao)

}

function clicar_remover(){
    
    let tr_paciente = document.querySelector('tr.paciente')

    for (i in tbody){
        console.log(tbody[i])
    }

    console.log(tr_paciente.parentNode.parentNode)
    console.log(tr_paciente.childNodes)
    console.log(tr_paciente.rowIndex)
    console.log(tr_paciente.tabIndex)
    
    tr_paciente.remove(tr_paciente.rowIndex)

}
let btn_add = document.querySelector('#adicionar')
let btn_rem = document.querySelector('#remover')

function mouse_sobre_add_in(){    
    btn_add.setAttribute('style', 'border: 2px solid rgb(0, 0, 0)')
}

function mouse_sobre_add_out(){    
    btn_add.setAttribute('style', 'border: 1px solid #ccc')
}

function mouse_sobre_rem_in(){    
    btn_rem.setAttribute('style', 'border: 2px solid rgb(0, 0, 0)')
}

function mouse_sobre_rem_out(){
    btn_rem.setAttribute('style', 'border: 1px solid #ccc')
}
