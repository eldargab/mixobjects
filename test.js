var assert = require('assert')
var mix = require('./index')

var t = {a: 'a'}
var s1 = {b: 'b'}
var s2 = {c: 'c'}

var ret = mix(t, s1, s2)

assert(ret === t)
assert.deepEqual(t, {a: 'a', b: 'b', c: 'c'})

console.log('Ok')
