const express = require("express");
const app = express();
const port = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.send("This server is created for check deployment in vercel");
});

app.listen(port, () => {
    console.log("This app is listen to port", port);
})