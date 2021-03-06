module.exports = {
	host : 'localhost',
	port : 8080,
	uri  : 'http://localhost:8080',

	environment : (process.env.NODE_ENV === 'production' ? 'production' : 'development')
}

if(module.exports.environment === 'production') {
	module.exports.host  = process.env.OPENSHIFT_NODEJS_IP;
	module.exports.port  =  process.env.OPENSHIFT_NODEJS_PORT;
}