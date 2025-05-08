import request from 'supertest';
import { app } from '../../app';
import { Ticket } from '../../models/ticket';
import mongoose from 'mongoose';

it('fetches the order', async () => {
  const ticket = Ticket.build({
    id: new mongoose.Types.ObjectId().toHexString(),
    title: 'concert',
    price: 10,
  });
  await ticket.save();

  const user = global.signin();
  // make a request to build an order with this ticket
  const order = await request(app)
    .post('/api/orders')
    .set('Cookie', user)
    .send({ ticketId: ticket.id })
    .expect(201);

  // make a request to fetch the order
  const { body: fetchOrder } = await request(app)
    .get(`/api/orders/${order.body.id}`)
    .set('Cookie', user)
    .expect(200);

  expect(fetchOrder.id).toEqual(order.body.id);
});
