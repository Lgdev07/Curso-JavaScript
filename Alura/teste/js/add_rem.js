

document.querySelector('button#adicionar').addEventListener('click', clicar_adicionar)
document.querySelector('button#remover').addEventListener('click', clicar_remover)

function clicar_adicionar(){
    let nome = document.querySelector('#inicio-nome').value
    let peso = document.querySelector('#inicio-peso').value
    let altura = document.querySelector('#inicio-altura').value
    let gordura = document.querySelector('#inicio-gordura').value

    if (!(peso || nome || altura || gordura) || peso > 300 || altura > 3){
        alert('Favor verifique os dados!')
    } else {
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
    
        criar_td_nome.innerHTML = nome
        criar_td_peso.innerHTML = peso
        criar_td_altura.innerHTML = altura
        criar_td_gordura.innerHTML = gordura
        criar_td_imc.innerHTML = (criar_td_peso.innerHTML / (criar_td_altura.innerHTML * 2)).toFixed(2)
    }

}

function imc(peso, altura){
    return pes
}

function clicar_remover(){
    
    let tr_paciente = tbody.querySelectorAll('tr.paciente')

    console.log(tr_paciente)
    
    tr_paciente.remove(tr_paciente.rowIndex)

}