import Notification from './notifications';

describe('Notification entity', () => {
  it('should be able to create a notification', async () => {
    const response = await Notification.create({
      title: 'Welcome to GoBarber-2.0!',
      nesssage: 'You are welcome to join us!',
      userId: 'id',
    });

    expect(response.props.title).toBeDefined();
    expect(response.props.nesssage).toBeDefined();
    expect(response.props.userId).toBeDefined();

    expect(response).toBeInstanceOf(Notification);
  });
});
