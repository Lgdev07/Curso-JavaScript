
window.onload = remover()

function remover(){

    let btn_rem = document.querySelectorAll('#remover');

    btn_rem.forEach(btn_remover => {
        btn_remover.addEventListener('click', () =>{
            btn_remover.closest('tr').remove()
        })

})}

