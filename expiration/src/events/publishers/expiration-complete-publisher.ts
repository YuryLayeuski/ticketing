import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@ylcommontic/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
