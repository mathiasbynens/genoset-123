var gql = require('gql');

module.exports = gql.and([
	gql.only('rs7538876', 'A'),
	gql.only('rs801114', 'G')
]);
