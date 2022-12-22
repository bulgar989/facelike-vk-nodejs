import express from 'express'
var app = express()
import Api from "./api.js";

app.get('/api/:method', function (req, res) {

    if(req.params.method === 'users.search'){
    Api.get(req.params.method, {params: req.query}).then((response) => {
        res.send(response.data.response.items)
    })}else{
        res.send("Ошибся адреском братюнь")
    }
})

app.listen(3002, "127.0.0.1", () => {
    console.log("listener for request")
})