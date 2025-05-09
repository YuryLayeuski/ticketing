import { OrderCreatedEvent, Publisher, Subjects } from '@ylcommontic/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}