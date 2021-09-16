import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';

const config: SqliteConnectionOptions = {
  type: 'sqlite',
  database: 'db',
  entities: ['dist/entities/**/*entity.js'],
  synchronize: true,
  migrations: ['dist/src/db/migrations/*.ts'],
  migrationsRun: false,
  cli: {
    migrationsDir: 'src/db/migrations',
  },
};

export default config;
