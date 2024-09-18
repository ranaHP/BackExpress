import dotenv from 'dotenv';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (envFound.error) {
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
	port: parseInt(process.env.PORT || '5000', 10), 
	databaseURL: process.env.MONGO_URI || '',
	jwtSecret: process.env.JWT_SECRET,
	logs: {
		level: process.env.LOG_LEVEL || 'silly',
	},
	api: {
		prefix: '/api',
	},
    agenda: {
		dbCollection: process.env.AGENDA_DB_COLLECTION,
		pooltime: process.env.AGENDA_POOL_TIME,
		concurrency: parseInt(process.env.AGENDA_CONCURRENCY as string, 10),
	},
	agendash: {
		user: 'admin',
		password: 'admin',
	},
};
