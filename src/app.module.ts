
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GithubOauthModule } from './auth/github/github-oauth.module';
import appConfig from './config/app.config';
import { User } from './typeorm/entities/user';


@Module({
	imports: [ConfigModule.forRoot({ isGlobal: true, load: [appConfig] }), GithubOauthModule,TypeOrmModule.forRoot({
		type: 'mysql',
		host: 'localhost',
		port: 5000,
		username: 'root',
		password: 'truefoundry123',
		database: 'logindb',
		entities: [User],
		synchronize: true,
	  }),],
	
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
