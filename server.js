const express = require("express")
const  app = express();

const fs = require('fs')

app.engine('madeline', (filePath, options, callback) => {
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err)

    const rendered = content.toString()
    .replace('#model#', '<title>' + options.model + '</title>')
    .replace('#make#', '<h1>' + options.make + '</h1>')
    .replace('#content#','<div>'+ options.content + '</div>' )
    .replace('#year#', + options.year)
    return callback(null, rendered)
  })
})


//setting view engine to madeline
app.set("views", "./views")
app.set("view engine", "madeline");

//route for index page
app.get('/', function (req, res) {
  res.send('<h1>Index page</h1>');
});

app.get("/item1", function (req, res) {
  res.render('template', { model: 'GMC', make: 'Acadia', content: 'vroom!' })
});

app.get('/about', (req, res) => {
  res.render('template', { model: 'Nissan', make: 'Altima', content: 'I am fast and furious!' })
})

app.get('/another-one', (req, res) => {
  res.render('template', { model: 'Honda', make: 'Accord', content: 'Lets go!!!' })
})

app.get('/item2', (req, res) => {
  res.render('template', { model: 'Toyota', make: 'Tundra', content: 'I go to work!' })
})

app.get('/item3', (req, res) => {
  res.render('template', { model: 'Cadillac', make: 'Escalade', content: 'Boss moves!' })
})

app.get('/item4', (req, res) => {
  res.render('template', { model: 'Dodge', make: 'Journey', content: 'For the Family!' })
})

app.get('/item5', (req, res) => {
  res.render('template', { model: 'Dodge', make: 'Charger', content: 'You cant see me!' })
})

app.get('/item5', (req, res) => {
  res.render('template', { model: 'Ram', make: '1500', content: 'I do tough work!' })
})

app.get('/item6', (req, res) => {
  res.render('template', { model: 'Ford', make: 'Focus', content: 'Dont focus on me!' })
})

app.get('/item7', (req, res) => {
  res.render('template2', { model: 'Mitzibishi', make: 'Nogo', content: 'I need a push!', year: '2000' })
})

app.get('/item8', (req, res) => {
  res.render('template2', { model: 'GMC', make: 'Yukon', content: 'Im a big boy!', year: '2000' })
})

app.get('/item9', (req, res) => {
  res.render('template2', { model: 'Audi', make: 'G3', content: 'Classic!', year: '2000' })
})


// add the path /home. Want it to respond <h1>Home Page </h2>

app.get('/home', function (req, res) {
  res.send('<h1>Home page</h1>');
});

// Tell the app to listen on port 3001
// for HTTP requests from clients
app.listen(3001, function() {
console.log('Listening on port 3001');
});