import path from "path";
import fs from "fs";
import express from "express";
import React from "react";
import {renderToString} from "react-dom/server";
import App from "../app/App";


const rootPath = path.resolve(__dirname, '../../');
const srcPath = path.resolve(rootPath, 'src');
const webPath = path.resolve(rootPath, 'web');
const webPublicPath = path.resolve(webPath, 'public');
const webPublicTemplateFile = path.resolve(webPath, 'index.html');
const PORT = process.env.PORT || 7575;

const app = express();


app.get("/api", async (
    req: express.Request,
    res: express.Response,
) => {
    res.send("Welcome to the SSR server API!");
});

app.get("/", async (
    req: express.Request,
    res: express.Response
) => {
    fs.readFile(path.resolve(webPublicPath,webPublicTemplateFile), "utf8", (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send("An error occurred");
        }

        return res.send(
            data.replace(
                '<div id="app-root"></div>',
                `<div id="app-root">${renderToString(<App />)}</div>`
            )
        );
    });
});


app.listen(PORT, ()=>{
    console.log(`Server started on port: ${PORT}`);
});
