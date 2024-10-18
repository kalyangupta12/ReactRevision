const express = require('express');
const mysql = require('mysql');
const cors = require('cors')
const app = express();
const port = 1211;

app.use(express.json());
app.use(cors());
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'hook_test',
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database.');
});
//to get in simple text 
// app.get('/users', (req, res) => {
//   connection.query('SELECT * FROM users', (error, results) => {
//     if (error) {
//       console.error('Error executing query:', error.stack);
//       return res.status(500).send('Error executing query');
//     }

//     if (results.length > 0) {
//       const userData = results.map(user => {
//         return `ID: ${user.id}, <br> Email: ${user.email}, Password: ${user.password}`;
//       }).join('<br>');

//       res.send('User Data: <br>:' + userData);
//     } else {
//       res.send('No users found.');
//     }
//   });
// });
//to get in JSON 
app.get('/users', (req, res) => {
  connection.query('SELECT * FROM users', (error, results) => {
    if (error) {
      console.error('Error executing query:', error.stack);
      return res.status(500).send('Error executing query');
    }

    if (results.length > 0) {
      res.json(results)
    } else {
      res.send('No users found.');
    }
  });
});

app.post('/sendusers', (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);
    connection.query(
      'INSERT INTO users (email, password) VALUES (?, ?)',
      [email, password],
      (error, results) => {
        if (error) {
          console.error('Error executing query:', error.stack);
          return res.status(500).json({ error: 'Error inserting user' });
        }
  
        // Send a success response
        res.status(201).json({ message: 'User added successfully'});
      }
    );
  });
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

