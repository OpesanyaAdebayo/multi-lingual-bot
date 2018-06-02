const sendMessage = (message) => {
  $.post('/sendMessage', { message }, (data) => {
    console.log(data);
    $('#chatDiv').append(`<p class='text-right'><small>Detected Language: <strong>${data.language}</strong></small></p>`);
    $('#chatDiv').append(`<p class='watson'>${data.message}</p>`);
  });
};

$('#chatForm').submit((event) => {
  const message = $('#message').val();
  if (!message) {
    return false;
  }
  $('#message').val('');
  $('#chatDiv').append(`<p class='user text-right'>${message}</p>`);
  sendMessage(message);

  event.preventDefault();
});

