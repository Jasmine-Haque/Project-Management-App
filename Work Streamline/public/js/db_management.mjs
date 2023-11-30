import * as mysql from "mysql2";

/*
const connection = mysql.createConnection
({
    host: "localhost",
    port:3306,
    database:"empdb2",
    user:"root",
    password:"Peda@123"
});
*/

//Here, use the user name and password of mysql in your computer.
const connectionPool = mysql.createPool
({
        host: "localhost",
        user: "root",
        database: "project_mgmt_app_db",
        password: "Peda@123",
        waitForConnections: true,
        connectionLimit: 10,
        maxIdle: 10,
        idleTimeout: 60000,
        queueLimit: 0,
        enableKeepAlive: true,
        keepAliveInitialDelay: 0
});


//The last parameter is callback which gets called a data is successfully fetched.
//Here, result is in the form of array.
export function readData(query,response, onGettingData)
{
    connectionPool.getConnection(function(error,connection)
    {
        if(error)
        {
            console.log("Error occured while connecting: \n" + error.stack);
        }
        else
        {
            console.log("Connected successfully");
            console.log("Running query: " + query);
            connection.query({sql: query, rowsAsArray: false}, function(queryError, result, fields)
            {
                if(queryError)
                {
                    console.log("Error while reading data: \n" + queryError.stack);
                }
                else
                {
                    onGettingData(result);
                }

                connectionPool.releaseConnection(connection);
            });
        }
    });  
}

//The last parameter is callback which gets called a data is successfully written.
export function writeData(queryStr, response,onWritingData)
{
    connectionPool.getConnection(function(error,connection)
    {
        if(error)
        {
            console.log("Error occured while connecting: \n" + error.stack);
        }
        else
        {
            connection.query(queryStr,function(queryError,data,fields)
            {
                console.log("Running query: " + queryStr);
                if(queryError)
                {
                    console.log("Error while writing data: \n" + queryError.stack);
                }
                else
                {
                    onWritingData();
                }
            });
        }
        connectionPool.releaseConnection(connection);
    });
}