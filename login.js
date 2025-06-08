(() => {
  'use strict'//faz com que o código dê erro se houver variável não declaradas
              //garante que o código fique mais limpo

  const forms = document.querySelectorAll('.needs-validation')//seleciona todos os elementos de classe "needs-validation"
                                                              //e guarda esse dado em uma constante "forms"
  
  Array.from(forms).forEach(form => {//array.from(forms) transforma forms em um array para poder usar .foreach
                                     //.foreach executa a função para cada item do array
                                     //form é a variável temporária que representa o formulário atual no loop
      form.addEventListener('submit', event => {//adiciona um evento para forms, sempre que o usuário tentar enviar
                                                //o formulário, essa função será executada
      if (!form.checkValidity()) {//diz que se o formulário estiver inválido
        event.preventDefault()    //deve impedir o envio do formulário
        event.stopPropagation()   //interrompe alguma coisa para impedir conflitos
      }

      form.classList.add('was-validated')//adiciona a classe "was validated" à tag formulário
                                        //isso faz com que as caixas de preenchimento fiquem verdes
    }, false)
  })
})()  