const express = require('express');
const app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});
app.get('/about.html', function(req, res){
  res.sendFile(__dirname + '/public/about.html');
});
app.get('/student', function(req, res){
  res.render('student', {
    name: 'Vladyslav',
    group: 'ІП-з31',
  });
});
app.listen(3000);
