var http = 
    express = require('express'),
    bodyParser = require('body-parser'),
   
    cors = require('cors');


// Create global app object
var app = express();

app.use(cors());

// Normal express config defaults
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const authorTitles = {
    "chetan bhagat" : [ "Five Point Someone",
    "One Night at the Call Center",
    "The 3 Mistakes of My Life"
    ]

};

var authorList = Object.keys(authorTitles);

console.log(Object.keys(authorTitles));

app.get("/", (req, res)=>{

    const authorName=  req.query.name;

    if(authorList.includes(authorName)) {

        const titles = authorTitles[authorName];
        res.status(200).send(titles);
    }

    res.status(404).send("Not Found");
})

var server = app.listen( process.env.PORT || 3000, function(){
  console.log('Listening on port ' + server.address().port);
});