import express from "express";


const app = express();
app.get("/", async (
    req: express.Request,
    res: express.Response
) => {
    res.send("Welcome to the server!");
});


app.listen(7575, ()=>{
    console.log("Server started on port 7575");
});
