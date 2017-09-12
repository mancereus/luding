var express = require('express');
var path = require('path');
var app = express();

app.set('port', (process.env.PORT || 5000));

const dir = path.join(__dirname, '/public')
console.log(dir)
app.use('/', express.static(dir))

app.listen(app.get('port'), function() {
  console.log(`http://localhost:${app.get('port')}/luding`);
});
