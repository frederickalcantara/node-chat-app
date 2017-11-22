let socket = io();

socket.on("connect", () => {
  console.log("Connected to server");

  socket.emit('createMessage', {
	from: 'sirfreddyal',
	text: 'Im doing good, you?'
  });
});

socket.on("disconnect", () => {
  console.log("Disconnected from server");
});

socket.on('newMessage', (message) => {
  console.log('New message', message);
});