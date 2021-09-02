import * as path from 'path';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const options = {
  type: 'mysql',
  host: process.env.TYPEORM_HOST,
  port: parseInt(process.env.TYPEORM_PORT),
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  entities: [path.resolve(__dirname, 'src', 'db', 'models', '*')],
  migrations: [path.resolve(__dirname, 'src', 'db', 'migrations', '*')],
  synchronize: true,
  logging: true,
};

module.exports = options;
