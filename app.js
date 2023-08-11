const express = require('express')
const app = express()
const PORT  = 2121
app.set('view engine', 'ejs')

// Use this set if you want to use a different folder than "views" folder
// app.set('views', 'pages')


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})


const user = [
    {
        userName: "Stephen",
        location: "San Jose"
    },
    {
        userName: "David",
        location: "Lagos"
    }
]

app.get('/', (req, res) => {
    // Rendered from the backend via node and EJS
    res.render('index', { user: user})


    //  Raw Express
    // res.sendFile('./pages/index.ejs', {root: __dirname})

    // EJS
    // res.render('index')

    console.log("Sucessfully loaded")
})

app.get('/about', (req, res) => {
    // EJS
    res.render('about')

    //  Raw Express
    // res.sendFile('./pages/about.html', {root: __dirname})
})

app.use((req, res) => {
    // EJS
    res.status(404).render('error')

    // raw Express
    // res.status(404).sendFile('./pages/error.html', {root: __dirname})
    console.log('Page Not Found: 404')
})
