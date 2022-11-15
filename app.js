const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
 let items = [];
 let workitems = [];


app.get("/",(req,res)=>{

     let day = date.getDate();
     console.log(day);

   res.render("lists",{listtitle: day , addarray: items});

});


app.post("/" ,function(req,res){
     let todo = req.body.addtodo;
     //   console.log(todo);
    //    console.log(todo.length);
 console.log(req.body);
        
        if(req.body.list === "Work"){

            if(todo.length>0){
                workitems.push(todo);
            }
            res.redirect("/work"); 
                                      
        }else{
            if(todo.length>0){
                items.push(todo);
            }
            res.redirect("/");

        }
});






app.get("/work", function(req,res){
    res.render("lists", {listtitle: "Work List", addarray: workitems});
});


/*app.post("/work", function(req,res){
    
    let item = req.body.addtodo;
    workitems.push(item);
    res.redirect("/work");

});     */

app.get("/about",function(req,res){
    res.render("about");
});


app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});
