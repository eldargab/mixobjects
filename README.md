# mix

Merge/mix util for objects.

## Example

```javascript
var mix = require('mix')

var target = {a: 'a'}
var s1 = {b: 'b'}
var s2 = {c: 'c'}

mix(target, s1, s2) //=> target

assert.deepEqual(target, {a: 'a', b: 'b', c: 'c'})
```

## Installation

```
component install eldargab/mix
```

## License

MIT
