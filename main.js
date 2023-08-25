/**
 * Author: Md Sholayman
 * Description: root page of a simple raw node project.
 * Date: 25-8-2023
 */
//core-modules
const http = require("http");
const fs = require('fs');
const url = require("url");

//dependencies
const slugify = require('slugify');



//creating server

const server = http.createServer((req,res)=>{

})



//listening to the server

server.listen(8000,()=>{
    console.log('server is running......');
})

