# genoset-123 [![Build status](https://travis-ci.org/mathiasbynens/genoset-123.svg?branch=master)](https://travis-ci.org/mathiasbynens/genoset-123) [![Code coverage status](https://coveralls.io/repos/mathiasbynens/genoset-123/badge.svg)](https://coveralls.io/r/mathiasbynens/genoset-123) [![Dependency status](https://gemnasium.com/mathiasbynens/genoset-123.svg)](https://gemnasium.com/mathiasbynens/genoset-123)

This script determines if a genome has an increased risk of basal cell carcinoma, which is the most common form of skin cancer (in fact of any cancer) as per [gs123](http://www.snpedia.com/index.php/Gs123).

## Compatibility

This genoset is to be used with DNA-JSON. See [the _dna2json_ repository](https://github.com/genomejs/dna2json) for more information.

## Usage

```js
var hasIncreasedRiskOfBasalCellCarcinoma = require('genoset-123');
var dna = require('./my-dna.json');

console.log(hasIncreasedRiskOfBasalCellCarcinoma(dna));
// → `true` or `false`
```

## Author

| [![twitter/mathias](https://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](https://twitter.com/mathias "Follow @mathias on Twitter") |
|---|
| [Mathias Bynens](https://mathiasbynens.be/) |

## License

_genoset-123_ is available under the [MIT](https://mths.be/mit) license.
