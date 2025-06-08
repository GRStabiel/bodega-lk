$('#exampleModal').on('show.bs.modal', function (event) {//$('#exampleModal') seleciona o elemento que tem id examplemodal
                                                        //show.bs.modal faz com que o evento aconteça logo antes do modal ser aberto
                                                        //function(event) é o que vai ser executado quando o evento acontecer
  const button = $(event.relatedTarget); //event.relatedtarget é o button, esse dado é guardado na constant button           
  const imagePath = button.data('img');  //lê o valor do atributo data-img do botão que abriu o modal           
  const modal = $(this); //this se refere ao modal, esse dado é guardado na constante modal                          
  modal.find('#modal-image').attr('src', imagePath); //dentro do modal, o código procura um elemento com ID modal-image
                                                    //depois, ele altera o atributo src dessa imagem para o valor de imagePath, para que mostre a imagem certa
});