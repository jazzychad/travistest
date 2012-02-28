assert = require "assert"
{ add, sub } = require "stuff"

exports.testAdd = ->
  assert.equal add(2, 3), 5

exports.testSub = ->
  assert.equal sub(3, 2), 1


