import { PaymentCreatedEvent, Publisher, Subjects } from "@ylcommontic/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
