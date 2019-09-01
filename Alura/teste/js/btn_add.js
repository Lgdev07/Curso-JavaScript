

document.querySelector('button#adicionar').addEventListener('click', clicar_adicionar)

function clicar_adicionar(){

    let paciente = obj_novo_paciente()

    if (!(paciente.peso || paciente.nome || paciente.altura || paciente.gordura) || paciente.peso > 300 || paciente.altura > 3){
        alert('Favor verifique os dados!')
    } else {
        var itm = document.querySelector(".paciente")
        var cln = itm.cloneNode(true);
        document.getElementById("tabela-pacientes").appendChild(cln);
        obj_add_paciente(cln, paciente)
        remover()
    }

}

function imc(peso, altura){
    return peso / (altura * 2)
}

function obj_novo_paciente(){
    let paciente = {
        nome: document.querySelector('#inicio-nome').value,
        peso: document.querySelector('#inicio-peso').value,
        altura: document.querySelector('#inicio-altura').value,
        gordura: document.querySelector('#inicio-gordura').value,
    }
    return paciente
}

function obj_add_paciente(clone, objeto){
    clone.querySelector('.info-nome').innerHTML = objeto.nome
    clone.querySelector('.info-peso').innerHTML = objeto.peso
    clone.querySelector('.info-altura').innerHTML = objeto.altura
    clone.querySelector('.info-gordura').innerHTML = objeto.gordura
    clone.querySelector('.info-imc').innerHTML = imc(objeto.peso, objeto.altura).toFixed(2)
}