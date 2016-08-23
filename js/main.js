"use strict";

var Handlebars = require("hbsfy/runtime");
var entryTemplate = require('../templates/article/article.hbs');
var entryData = require('../templates/article/article-data.js');
var solarSystemTemplate = require('../templates/article/solar-system.hbs');
var solarSystemData = require('../templates/article/solar-system-data.js');

// Register a partial
Handlebars.registerPartial("tagLine", require('../templates/partials/tagline.hbs'));

// Create a custome helper that we can call inside an expression in
// our markup
Handlebars.registerHelper("inc", function(value) {
  return parseInt(value) + 1;
});

// attach our rendered HTML to the DOM
$("#entryOutput").append(entryTemplate(entryData));
$("#planets").on("click", function(){
  $("#solarSystemOutput").html(solarSystemTemplate(solarSystemData));
  console.log("hello");
});



















