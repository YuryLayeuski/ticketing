import { OrderCancelledEvent, Publisher, Subjects } from '@ylcommontic/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
