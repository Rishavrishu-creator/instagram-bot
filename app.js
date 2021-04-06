var express=require('express')
var app=express()
var bodyParser=require('body-parser')
app.use(bodyParser.json({

}))
var request=require('request')
var cheerio=require('cheerio')
app.use(express.static('public'))
var ejs=require('ejs')
app.set('view engine','ejs')
app.use(express.json())

app.get('/',function(req,res){
    res.send("Hello")
})

app.listen(9000,function(err)
{
    if(!err)
    {
        console.log("Server running on port 9000")
    }
})
