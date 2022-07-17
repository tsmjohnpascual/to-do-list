const express = require("express")
const bodyParser = require("body-parser")

const app = express()

app.get("/", (req, res) => {

    var today = new Date()
    var currentDay = today.getDay()

    if (currentDay === 6 || currentDay === 0){
        res.sendFile(__dirname + "/index.html")
    } else {
        res.write("<h1>Boo! I have to work!</h1>")
    }
        
    
})

app.listen(3000, () => {
    console.log("Server started on port 3000.")
})