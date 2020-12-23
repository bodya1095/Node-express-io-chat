let app = require('express')();
let http = require('http').createServer(app);
let io  =require('socket.io')(http);


// Users

//let usersList = [];
let usersCount = 0;
let clientUsersCount = 0;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});








io.on('connection', (socket) => {

  console.log('a user connected');
  io.emit('UserCountUpdate', ++usersCount);

  socket.on('disconnect', () => {
    usersCount--;
  console.log('user disconnected');
  });

  
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
});

/*socket.on('set name', (nickName) => {
let userData = [socket.id, nickName];
usersList.push(userData);*/

});



http.listen(3000, () => {
    console.log('listening on :3000');

})