const config = {
	// admin is necessary to create a keyspace and
	// grant permissions to the cassandra user
	admin : {
		user: "cassandra",
		pass:  "cassandra"
	},
	user : {
		user: "your cassandra username",
		pass:  "your username password"
	},
};

module.exports = config;