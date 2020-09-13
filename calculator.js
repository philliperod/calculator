const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;

  res.send('The result of this calculation is: ' + result);
});

app.get('/bmiCalculator', (req, res) => {
  res.sendFile(__dirname + '/bmiCalculator.html');
});

app.post('/bmiCalculator', (req, res) => {
  var weight = Number(req.body.weight);
  var height = Number(req.body.height);
  var bmi = (weight / (height * height)) * 703;

  res.send('Your BMI is: ' + bmi + ' kg/m^2.');
});

app.listen(3000, () => {
  console.log('Sending from port 3000.');
});
