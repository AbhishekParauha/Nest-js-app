
require('dotenv').config()
export interface AppConfig {
	port: number;

	auth: {
		jwt: {
			secret: string;
			expiresInSeconds: number;
		};
		github: {
			clientID: string;
			clientSecret: string;
			callbackURL: string;
		};
	};
	'auth.jwt.secret'?: string;
	'auth.jwt.expiresInSeconds'?: number;
	'auth.github.clientID'?: string;
	'auth.github.clientSecret'?: string;
	'auth.github.callbackURL'?: string;
}
