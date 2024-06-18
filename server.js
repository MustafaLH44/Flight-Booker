const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('login'); // Render your login.handlebars file
});

app.get('/signup', (req, res) => {
  res.render('signup'); // Render your signup.handlebars file
});

// Example POST route for login form submission
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  // Handle login logic
  res.redirect('/homepage'); // Redirect after successful login
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
