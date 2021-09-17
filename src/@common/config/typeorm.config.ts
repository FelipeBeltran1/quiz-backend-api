//import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';
import { registerAs } from '@nestjs/config';

// const config: SqliteConnectionOptions = {
//   type: 'sqlite',
//   database: 'db',
//   entities: ['dist/entities/**/*entity.js'],
//   synchronize: true,
//   migrations: ['dist/src/db/migrations/*.ts'],
//   migrationsRun: false,
//   cli: {
//     migrationsDir: 'src/db/migrations',
//   },
// };

export default registerAs('typeorm', () => {
  const configDefault = {
    type: process.env.DB_TYPE,
    database: process.env.DB_DATABASE,
    synchronize: true,
    logging: false,
    entities: ['dist/entities/**/*entity.js'],
    //entities: [(process.env.NODE_ENV === 'local' ? 'src/entities/**/*.ts' : 'dist/entities/**/*.js' )]
  };
  return {
    users: {
      ...configDefault,
    },
    quizzes: {
      ...configDefault,
    },
  };
});
