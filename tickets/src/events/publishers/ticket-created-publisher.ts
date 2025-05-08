import { Publisher, Subjects, TicketCreatedEvent } from '@ylcommontic/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
