$('#exampleModal').on('show.bs.modal', function (event) {
  const button = $(event.relatedTarget);            
  const imagePath = button.data('img');              
  const modal = $(this);                             
  modal.find('#modal-image').attr('src', imagePath); 
});