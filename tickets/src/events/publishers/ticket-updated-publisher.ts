import { Publisher, Subjects, TicketUpdatedEvent } from '@ylcommontic/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
