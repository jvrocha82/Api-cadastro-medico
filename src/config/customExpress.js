const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser')

module.exports = () => {
    const server = express();
    server.use(bodyParser.urlencoded({extended:true}))
    server.use(bodyParser.json())

    server.use(function (req, res, next) {

        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Credentials', true);
        next();

    });

    consign()
        .include('src/controller')
        .into(server)

        return server
}

