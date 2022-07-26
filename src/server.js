const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");

const routes = require("./routes");
const connection = require("./config/connection");
const helpers = require("./helpers");

const hbs = exphbs.create({
  helpers,
});
const app = express();

const PORT = process.env.PORT || 3001;

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);

const init = async () => {
  try {
    await connection.sync({ force: false });
    console.log("'[INFO': DB connection is successful");

    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    );
  } catch (error) {
    console.log(`[ERROR]: DB connection failed | ${error.message}`);
  }
};

init();
