var express     = require("express"),
app             = express();

//Express app configuration
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));


//Express routes
app.get("/", (req, res) => {
  res.render("landing");
});

//Deployed on Heroku port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Our app is running on port " + PORT);
});
