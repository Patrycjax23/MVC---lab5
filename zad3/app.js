const express = require('express');
const app = express();
const PORT = 3000; 
const bodyParser = require('body-parser');
const homeRoutes = require('./routes/home');
const bookRoutes = require('./routes/books');
app.set('view engine', 'ejs');


//app.get('/', (req, res) => {
 // res.send('In progress...');
//});

app.use((req, res) => {
  res.status(404).send("404 Not Found");
});

app.use('/', homeRoutes);

app.use('/book', bookRoutes);

app.post('/book/add', (req, res) => {
    res.redirect('/book/list');
});

app.delete('/book/delete/:id', (req, res) => {
   
    res.redirect('/book/list');
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})});