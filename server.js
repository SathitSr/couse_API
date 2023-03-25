const app = require("express")();
const server = require("http").createServer(app);
var bodyParser = require("body-parser");
let people = require("./people.json");
app.use(bodyParser.json());
const port = 3500;

app.get("/api/people", (req, res) => {
  res.send(people);
});

app.post("/api/people/add", (req, res) => {
  people.push(req.body);
  res.send("success");
});

app.post("/api/people/delete", (req, res) => {
  let temp = people.filter((obj) => obj.id !== req.body.id);
  people = temp;

  res.send("success");
});

app.post("/api/people/update", (req, res) => {
  let temp = people;
  let objIndex = temp.findIndex((obj) => obj.id == req.body.id);
  temp[objIndex].name = req.body.name;
  temp[objIndex].username = req.body.username;
  temp[objIndex].email = req.body.email;
  temp[objIndex].phone = req.body.phone;
  temp[objIndex].avatar = req.body.avatar;

  people = temp;
  res.send("success");
});

server.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
