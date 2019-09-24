let botao_importar = document.querySelector('#import')

botao_importar.addEventListener('change', function(){
    let reader = new FileReader();

    //     reader.readAsText(this.files[0]);
    let lista_objetos = JSON.parse(reader.readAsText(this.files[0]))
    console.log(lista_objetos)

    // var xmlhttp = new XMLHttpRequest();

    // xmlhttp.onreadystatechange = function() {
    //   if (this.readyState == 4 && this.status == 200) {
    //     var myObj = JSON.parse(this.responseText);
    //   }
    // };
    // xmlhttp.open("GET", reader.readAsDataURL(this.files[0]), true);
    // console.log(xmlhttp)
    // xmlhttp.send();

    }
)

