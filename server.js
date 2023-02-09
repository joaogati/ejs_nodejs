const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get('/', function (req, res){
    const items = [
        { 
            title: "D",
            message: "esenvolver aplicacoes/servicos de forma dinâmica"
        },
        { 
            title: "E",
            message: "JS usa Javascript para renderizar HTML"
        },
        { 
            title: "M",
            message: "uito facil de usar"
        },
        { 
            title: "A",
            message: "cessivel"
        },
        { 
            title: "I",
            message: "nstall ejs"
        },
        {
            title: "S",
            message: "intaxe simples"
        },
    ];

    const subtitle = "Uma linguagem de modelagem para criacao de paginas HTML utilizando JavaScript"
    res.render('pages/index', {
        qualitys: items,
        subtitle: subtitle,
    });
})

app.get('/sobre', function (req, res) {
    res.render('pages/about');
})

app.listen(8080);
console.log('Server is running')