import Agenda from 'agenda';
import config from '../config';

export default ({ mongoConnection }: any) => {
  return new Agenda({
    mongo: mongoConnection,  // Use the Db object directly
    db: { collection: config.agenda.dbCollection, address: config.databaseURL },  // Specify the collection where jobs will be stored
    processEvery: config.agenda.pooltime,  // Time interval to check for jobs
    maxConcurrency: config.agenda.concurrency,  // Max number of concurrent jobs
  });
};
