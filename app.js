const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());

// Sample user data
const user = {
  full_name: 'John Doe',
  dob: '17091999',
  college_email: 'john@xyz.com',
  college_roll_number: 'ABCD123',
  numbers_array: [],
  alphabets_array: [],
};

app.get('/bfhl', (req, res) => {
  // GET method just returns an operation_code
  res.json({ operation_code: 1 });
});

app.post('/bfhl', (req, res) => {
  const data = req.body.data || [];
  const numbers_array = data.filter((item) => !isNaN(item));
  const alphabets_array = data.filter((item) => isNaN(item));
  const highest_alphabet = alphabets_array.length > 0 ? alphabets_array.sort()[alphabets_array.length - 1] : '';

  const response = {
    is_success: true,
    user_id: `${user.full_name}_${user.dob}`,
    college_email: user.college_email,
    college_roll_number: user.college_roll_number,
    numbers_array: numbers_array,
    alphabets_array: alphabets_array,
    highest_alphabet: highest_alphabet ? [highest_alphabet] : [],
  };

  res.json(response);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
