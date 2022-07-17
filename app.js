const express = require("express")
const bodyParser = require("body-parser")

const app = express()
var items = ["Buy Food", "Cook food", "Eat food"]
app.set('view engine', 'ejs') // Tells our app to use EJS as its view engine
app.use(bodyParser.urlencoded({extended: true}))



app.get("/", (req, res) => {

    var today = new Date()

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    var day = today.toLocaleDateString("en-UK", options)

    res.render("list", {kindOfDay: day, newListItems: items})

})

app.post("/", (req, res) => {
    var item = req.body.newItem
    items.push(item)
    res.redirect("/")
})

app.listen(3000, () => {
    console.log("Server started on port 3000.")
})