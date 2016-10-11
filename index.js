'use strict'

var Alexa = require('alexa-sdk')
var customHandlers = require('./handlers.js')
var constants = require('./constants.js')

exports.handler = function (ev, ctx, cb) {
  var alexa = Alexa.handler(ev, ctx)
  alexa.APP_ID = constants.APP_ID;
  alexa.registerHandlers(handlers);
  alexa.execute();
}



var handlers = {
  'LaunchRequest': customHandlers.getPokemon,
  'GetPokemonIntent': customHandlers.getPokemon,
  'GetPokemon': customHandlers.getRandomPokemon,
  'AMAZON.HelpIntent': customHandlers.helpIntent,
  'AMAZON.CancelIntent': customHandlers.cancelIntent,
  'AMAZON.StopIntent': customHandlers.stopIntent
}
