'use strict'

var pokemon = require('pokemon')
var constants = require('./constants.js')
var handlers;

function getRandomPokemon () {
  var newPokemon = pokemon.random()
  var speechOutput = "Here's your pokémon: " + newPokemon;

  this.emit(':tellWithCard', speechOutput, constants.SKILL_NAME, newPokemon)
}

function getPokemon () {
  this.emit('GetPokemon')
}

function helpIntent () {
  var speechOutput = "You can say get me a pokémon, or, you can say stop... What can I help you with?";
  var reprompt = "Do you want a fact, dude?";
  this.emit(':ask', speechOutput, reprompt);
}

function cancelIntent () {
  this.emit(':tell', 'Cancelled!');
}

function stopIntent () {
  this.emit(':tell', 'Bye! Go and catch\'em all!');
}

module.exports = {
  getRandomPokemon: getRandomPokemon,
  helpIntent: helpIntent,
  cancelIntent: cancelIntent,
  stopIntent: stopIntent,
  getPokemon: getPokemon
}
