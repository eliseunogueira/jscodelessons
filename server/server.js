let express = require('express');
let ourApp = express();
ourApp.use(express.urlencoded({ extended: false }));
ourApp.get('/', function(req, res) {
  res.send(`
  <form action="/answer" method="POST">
  <p>What color is the sky on a clear and sunny day?</p>
  <input name="skyColor" autocomplete="off">
  <button>Submit Answer</button>
  </form>
  `);
});
ourApp.post('/answer', function(req, res) {
  console.log(req.body.skyColor);
  if (req.body.skyColor == 'blue') {
    res.send(`
    <p>Congrats! your answer is correct!</p>
    <a href="/">Go Back</a>
    `);
  } else {
    res.send(`
    <p>Sorry wrong answer try again!</p>
    <a href="/">Go Back</a>
    `);
  }
});
ourApp.listen(80);
