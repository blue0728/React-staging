if (process.env.NODE_ENV === 'ONLINE') {
	module.exports = require('./configureStore.prod');
} else {
	module.exports = require('./configureStore.dev');
}