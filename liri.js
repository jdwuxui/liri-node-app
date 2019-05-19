var inquirer = require("inquirer");
var axios = require("axios");
var omdbApi = require("omdb-client");
var Spotify = require("node-spotify-api");

var movieSearch = process.argv[2];
console.log("movieSearch");
