import express from "express";
import ejs from "ejs";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import { dirname} from "path";
import path from "path";
import http from "http";
import * as intialWindow from "./routes/intial_window.mjs"

const port = 3000;
const app = express();
const server = http.createServer(app);

const __filename = fileURLToPath(import.meta.url);
let __dirname = dirname(__filename);

console.log("Dir name: " + __dirname);
app.engine("html",ejs.renderFile);
app.set("views","./public/views");
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended:false}));
//app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "./public")));

app.get("/",intialWindow.router);
app.post("/login",intialWindow.router);
app.post("/sign_up",intialWindow.router);

app.get("/error",async function(request, response){
    response.statusCode = 404;
    response.render("error");
});

server.listen(port, ()=>
{
    console.log("Server is running at " + port);
});