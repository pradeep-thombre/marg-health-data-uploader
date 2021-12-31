const express = require("express") ;
const app = express() ;
const port = process.env.PORT ||8000;

const expressLayout = require("express-ejs-layouts");
const db = require("./config/mongoose")
// setup middlewares

const MongoDbStore = require('connect-mongo');
// used for session cookie
const session = require('express-session');
app.set("view engine","ejs") ;
app.set("views","./views");

app.use(expressLayout);
app.use(express.static("./assets")) ;

app.use(express.urlencoded({extended: true}));
app.set("layout  extractStyles" , true );
app.set("layout  extractScripts" , true );

// mongo store is used to store the session cookie in the db
app.use(session({
    name: 'margHealth',
    // TODO change the secret before deployment in production mode
    secret: 'blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    store: MongoDbStore.create({
        mongoUrl: 'mongodb+srv://learningdemo068:HCsRDfy2vDs2KxN2@cluster0.zp24b.mongodb.net/csvUploader?retryWrites=true&w=majority',
        mongooseConnection:db,
        autoRemove: 'disabled'
    },function(err){
        console.log("error ",err);
    })
}));

app.use("/", require("./routes"));

app.listen(port , (err)=>
{
    if(err)
        console.log("there was an error in starting the server");
    console.log("server is running fine ",port) ;
})