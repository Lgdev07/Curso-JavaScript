
let tbody = document.querySelector('#tabela-pacientes')
let tr = document.querySelectorAll('.paciente')
let td = null

for (i=0;i<tr.length;i++){
    let imc = tr[i].querySelector('td.info-peso').innerHTML / (tr[i].querySelector('td.info-altura').innerHTML * 2)
    tr[i].querySelector('td.info-imc').innerHTML = imc.toFixed(2)
}

console.log(tbody.querySelectorAll('.paciente').length)

for (i=0; i <= tbody.querySelectorAll('.paciente').length; i++){
    console.log(tbody[i])
    let btn_add = tr[i].querySelectorAll('#adicionar').addEventListener('mouseover', function(){
        console.log('teste')
        // btn_add.setAttribute('style', 'border: 2px solid rgb(0, 0, 0)')
    })
    // tr[i].querySelectorAll('#adicionar').addEventListener('mouseout', function(){
    //     btn_add.setAttribute('style', 'border: 1px solid #ccc')
    // })

    let btn_rem = tr[i].querySelectorAll('#remover').addEventListener('mouseover', function(){
        console.log('teste')
        // btn_rem.setAttribute('style', 'border: 2px solid rgb(0, 0, 0)')
    })
    // let btn_rem = tr[i].querySelectorAll('#remover').addEventListener('mouseout', function(){
    //     btn_rem.setAttribute('style', 'border: 1px solid #ccc')
    // })
    console.log(btn_add)
    console.log(btn_rem)
}
