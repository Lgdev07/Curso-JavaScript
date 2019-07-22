document.querySelector('button#conf').addEventListener('click', clicar)
        document.querySelector('input#masculino').addEventListener('click', checar)
        document.querySelector('input#feminino').addEventListener('click', desmarcar)

        function clicar(){
            var idade = new Date().getFullYear() - Number(document.querySelector('input#ano').value)
            var masculino = document.querySelector('input#masculino').checked
            var feminino = document.querySelector('input#feminino').checked

            if(masculino && idade <= 20){
                document.querySelector('div#mensagem').innerHTML = `Você é um Homem de ${idade} anos`
                document.querySelector('img#imagem').setAttribute('src','homem_20.jpg')            
            } else if(masculino && idade <= 79){
                document.querySelector('div#mensagem').innerHTML = `Você é um Homem de ${idade} anos`
                document.querySelector('img#imagem').setAttribute('src','homem_50.jpg')  
            } else if(masculino && idade > 80){
                document.querySelector('div#mensagem').innerHTML = `Você é um Homem de ${idade} anos`
                document.querySelector('img#imagem').setAttribute('src','homem_80.jpg')  
            } else if(feminino && idade <= 20){
                document.querySelector('div#mensagem').innerHTML = `Você é uma Mulher de ${idade} anos`
                document.querySelector('img#imagem').setAttribute('src','mulher_20.jpg')  
            } else if(feminino && idade <= 79){
                document.querySelector('div#mensagem').innerHTML = `Você é uma Mulher de ${idade} anos`
                document.querySelector('img#imagem').setAttribute('src','mulher_50.jpg')  
            } else if(feminino && idade > 80){
                document.querySelector('div#mensagem').innerHTML = `Você é uma Mulher de ${idade} anos`
                document.querySelector('img#imagem').setAttribute('src','mulher_80.jpg')  
            } else{
                window.alert('É necessário selecionar o GÊNERO!')
            }
        }

        function checar(){
            var masculino = document.querySelector('input#masculino').checked
            var feminino = document.querySelector('input#feminino').checked

            if(masculino){
                document.querySelector('input#feminino').checked = false
            } 
        }

        function desmarcar(){
            var masculino = document.querySelector('input#masculino').checked
            var feminino = document.querySelector('input#feminino').checked
            if(feminino){
                document.querySelector('input#masculino').checked = false
            } 
        }