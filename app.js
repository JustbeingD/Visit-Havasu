const	bodyParser			= require("body-parser");
		express				= require("express");
		expressSanitizer	= require("express-sanitizer");
		methodOverride 		= require("method-override");
		app					= express();

var port = process.env.PORT || 5000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());
app.use(methodOverride("_method"))

app.get("/", function(req, res){
	res.render("landing.ejs");
});

app.get("/homepage", function(req, res){
	res.render("homepage.ejs");
});

// app.get("/landing", function(req, res){
// 	if(err){
// 		console.log("ERROR!")
// 	} else {
// 		res.render("index")
// 	}
// 	});

app.listen(port, function(){
	console.log("The server is up on port 5000! Yeah!");
});