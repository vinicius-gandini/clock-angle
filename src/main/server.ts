import { app } from '@/infra/express/app';
import { PostgreConnection } from '@/infra/knex/connection';

import { env } from './config';

export class Server {
  static async bootstrap() {
    await PostgreConnection.getInstance().connect();

    app.listen(env.app.port, () =>
      console.log(`Listening on port ${env.app.port}`),
    );
  }
}

Server.bootstrap();
