import config from '../config';
import EmailSequenceJob from '../jobs/emailSequence';
import Agenda, { JobPriority } from 'agenda';

export default ({ agenda }: { agenda: Agenda }) => {
  // agenda.define(
  //   'send-email',
  //   { priority: JobPriority.high, concurrency: config.agenda.concurrency },
  //   new EmailSequenceJob().handler,
  // );

  agenda.start();
};
