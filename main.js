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

//importing local modules

const replaceTemplates = require("./modules/replaceTemplate");
const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`,'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`,"utf-8") ;
const tempProduct=fs.readFileSync(`${__dirname}/templates/template-product.html`,'utf-8');
//importing data
const data = fs.readFileSync(`${__dirname}/data/data.json`,"utf-8")
const jsonData = JSON.parse(data)

//slugify

const slugs = jsonData.map(el =>slugify(el.productName,{lower:true}));





//creating server

const server = http.createServer((req,res)=>{

const {pathname,query} = url.parse(req.url,true)
// const pathName = req.url;


if(pathname === "/" || pathname === "/overview"){
    res.writeHead(200,{
        "Content-Type" : "text/html"
    });

    //running a loop in data[array of object]

const cardHtml = jsonData.map(el => replaceTemplates(tempCard,el)).join('');

const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardHtml) ;

res.end(output)
}


})



//listening to the server

server.listen(8080,()=>{
    console.log('server is running......');
})

