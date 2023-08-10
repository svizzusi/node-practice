const express = require('express')
const app = express()
const PORT  = 2121

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})



app.get('/', (req, res) => {
    res.send('<h1>Hello, world!</h1>')
})

app.get('/about', (req, res) => {
    res.send('<h1>About, World</h1>')
})

app.use((req, res) => {
    res.send('Error')
})
