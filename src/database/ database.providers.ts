
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'test',
        entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
        ],
        synchronize: true, // production으로 실행할 때에는 False 
      });

      return dataSource.initialize();
    },
  },
];
