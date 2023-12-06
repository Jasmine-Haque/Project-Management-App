import express from "express";
import { fileURLToPath } from "url";
import { dirname} from "path";
import { request } from "http";
import path from "path";
import async from "async";
import * as DBManage from "../public/js/db_management.mjs";
//import * as dashboardModule from "../public/js/dashboard.js"
export const router = express.Router();

const LOGIN_CREDIENTIALS = 0;
const STARTED_PROJECTS = 1;
const ON_GOING_PROJECTS = 2;
const COMPLETED_PROJECTS = 3;

const loadFromDatabase = true;

router.post("/login",async function (request,response){
    let loginUsername = request.body.login_uname;
    let loginPassword = request.body.login_psw;
    
    if(loadFromDatabase)
    {
        let query1 = "SELECT * from Person where Name='" + loginUsername + "' and password='" + loginPassword + "';";
    let query2 = "SELECT * from Project where STATUS = 'STARTED';";
    let query3 = "SELECT * from Project where STATUS = 'ON_GOING';";
    let query4 = "SELECT * from Project where STATUS = 'COMPLETED';";

    let results = new Map();

    async.parallel(
        [
            function(parallel_done)
            {
                DBManage.readData(query1, response, (result) =>
                {
                    if(result.length > 0)
                    {
                        results.set(LOGIN_CREDIENTIALS, result);
                    }
                    else
                    {
                        response.redirect("/error");
                    }
                    parallel_done();    
                });
            },
            function(parallel_done)
            {
                DBManage.readData(query2, response, (result) =>
                {
                    if(result.length > 0)
                    {
                        results.set(STARTED_PROJECTS, result);
                    }
                    else
                    {
                        response.redirect("/error");
                    }
                    parallel_done();    
                });
            },
            function(parallel_done)
            {
                DBManage.readData(query3, response, (result) =>
                {
                    if(result.length > 0)
                    {
                        results.set(ON_GOING_PROJECTS, result);
                    }
                    else
                    {
                        response.redirect("/error");
                    }
                    parallel_done();    
                });
            },
            function(parallel_done)
            {
                DBManage.readData(query4, response, (result) =>
                {
                    if(result.length > 0)
                    {
                        results.set(COMPLETED_PROJECTS, result);
                    }
                    else
                    {
                        response.redirect("/error");
                    }
                    parallel_done();    
                });
            }
        ],

        function(error)
        {
            if(error)
            {
                console.log("Error while executing queries in parallel:\n " + error);
                response.redirect("/error");
            }
            else
            {
                //console.log(Object.entries(results.get(STARTED_PROJECTS)).length);
                response.statusCode = 200;
                response.render("dashboard",
                {
                    action: "dashboard_input",
                    loginCredentials: results.get(LOGIN_CREDIENTIALS),
                    startedProjects: results.get(STARTED_PROJECTS),
                    onGoingProjects: results.get(ON_GOING_PROJECTS),
                    completedProjects: results.get(COMPLETED_PROJECTS),
                    //dashboardModule: dashboardModule
                });

                
            }
        });    
    }
    else
    {
        response.statusCode = 200;
        response.render("dashboard",
        {
            action: null
        });
    }
});

router.post("/sign_up",async function (request,response){
    let signupUsername = request.body.sign_up_uname;
    let signupEmail = request.body.sign_up_email;
    let signUpPassword = request.body.sign_up_psw;

    if(loadFromDatabase)
    {
        let query = "Insert into Person values('" + signupUsername + "','" + signupEmail + "','" + signUpPassword + "','Empy');";
        DBManage.writeData(query, response,()=>{
            //window.alert("User successfully added");
            console.log("User successfully added");
            response.redirect("/");
        });
    }
    else
    {
        response.redirect("/");
    }
});


router.get("/",(request,response)=>{
    response.statusCode = 200; 
    response.render("form");
    //response.sendFile(path.join(__dirname, ".\views\form.ejs"),(error)=> {console.log("\n Error while loading form.ejs: \n" + error.stack);});
});
