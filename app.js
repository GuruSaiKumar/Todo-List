const express = require('express');
const bodyParser = require('body-parser');

const app = express();
//Complete Playlist  Issue of checkbox
var listItems=["Complete Playlist  Issue of checkbox","Issue of checkbox"];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static("public"))
app.get("/",(req, res) => { 
    var date = new Date();
    date=date.getDate() + '/' + date.getMonth()+ '/' + date.getFullYear();
    res.render("list",{listTitle: date,listItems:listItems})
});

app.post("/",(req, res) => {
    var Item=req.body.Item;
    listItems.push(Item);
    res.redirect("/");
})

app.listen(3000,()=>{
    console.log("Listening on port 3000..");
})

/*
Notes:
1.newDate() gives current date
2.Using res.render("filename",object)  // Here object consits of all elements to send to ejs
3.For using ejs:
    *For getting the value <%= name %>
    *For using javascript in ejs <% %>

*/