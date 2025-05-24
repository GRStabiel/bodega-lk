$('#exampleModal').on('show.bs.modal', function (event) {
  const button = $(event.relatedTarget);             // Botão que abriu o modal
  const imagePath = button.data('img');              // Caminho da imagem
  const modal = $(this);                             // O modal
  modal.find('#modal-image').attr('src', imagePath); // Seta o src da imagem
});