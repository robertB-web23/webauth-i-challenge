const express = require("express");
const helmet = require("helmet");
const session = require('express-session');
const KnexSessionStore = require('connect-session-knex')(session);

const server = express();
const cors = require('cors');

server.use(helmet());
server.use(express.json());
server.use(cors());
//server.use(session(sessionConfig));







module.exports = server;