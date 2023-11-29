import express from "express";
import ejs from "ejs";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import { dirname} from "path";
import path from "path";
import http from "http";
import * as DBManage from "./public/js/db_management.mjs";

const port = 3000;
const app = express();
const server = http.createServer(app);

const __filename = fileURLToPath(import.meta.url);
let __dirname = dirname(__filename);
/*
let removePortionIndex = __dirname.indexOf("\js");

if(removePortionIndex != -1)
{
    __dirname = __dirname.substring(0,removePortionIndex - 1);
}
*/

console.log("Dir name: " + __dirname);
app.engine("html",ejs.renderFile);
app.set("views","./public/views");
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended:false}));
//app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "./public")));


app.post("/login",async function (request,response){
    let loginUsername = request.body.login_uname;
    let loginPassword = request.body.login_psw;
    
    /*
    let query = "SELECT * from Person where Name='" + loginUsername + "' and password='" + loginPassword + "';";
    DBManage.readData(query, response, (result) =>
    {
        if(result.length > 0)
        {
            //response.send(loginUsername);
            response.redirect("/dashboard");
        }
        else
        {
            response.redirect("/error");
        }
        
    });
    */
    response.redirect("/dashboard"); 
});


app.get("/",(request,response)=>{
    response.statusCode = 200; 
    response.render("form");
    //response.sendFile(path.join(__dirname, ".\views\form.ejs"),(error)=> {console.log("\n Error while loading form.ejs: \n" + error.stack);});
});


app.get("/dashboard",async function(request, response){
    response.statusCode = 200;
    /*
    response.render("dashboard",
    {
        action: "login",
        userName: request.params.loginUsername
    });
    */
   response.render("dashboard");
});

app.get("/error",async function(request, response){
    response.statusCode = 404;
    response.render("error");
});

server.listen(port, ()=>
{
    console.log("Server is running at " + port);
});