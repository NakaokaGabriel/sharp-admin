export default ({ env }) => ({
	connection: {
		client: 'postgres',
		connection: {
			host: env('DATABASE_HOST', 'localhost'),
			port: env.int('DATABASE_PORT', 5432),
			database: env('DATABASE_NAME', 'sharp-admin'),
			user: env('DATABASE_USERNAME', 'sharp'),
			password: env('DATABASE_PASSWORD', 'sharp'),
			ssl: env.bool('DATABASE_SSL', false)
		}
	}
});
