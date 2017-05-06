const env = require('env-var');

// Load .env file into process environment variables
require('dotenv').config();

// Parse configuration constants
env('NODE_ENV').required().asString();
export const HOST = env('HOST', 'localhost').asString();
export const PORT = env('PORT', 4040).asPositiveInt();

export const USER1 = env('USER1').required().asString();
export const USER1_PASSWORD = env('USER1_PASSWORD').required().asString();

export const PARSE_DASHBOARD_SERVER_URL = env('PARSE_DASHBOARD_SERVER_URL', 'http://localhost:1337/parse').required().asString();
export const PARSE_DASHBOARD_APP_ID = env('PARSE_DASHBOARD_APP_ID').required().asString();
export const PARSE_DASHBOARD_APP_NAME = env('PARSE_DASHBOARD_APP_NAME').required().asString();
export const PARSE_DASHBOARD_MASTER_KEY = env('PARSE_DASHBOARD_MASTER_KEY').required().asString();
export const PARSE_DASHBOARD_PATH = env('PARSE_DASHBOARD_PATH', '/parse/dashboard').required().asString();
