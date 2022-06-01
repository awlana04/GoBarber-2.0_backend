import Notification from './notifications';

describe('Notification entity', () => {
  it('should be able to create a notification', () => {
    const response = Notification.create({
      title: 'Welcome to GoBarber-2.0!',
      message: 'You are welcome to join us!',
      isViewed: false,
      userId: 'id',
    });

    expect(response.props.title).toBeDefined();
    expect(response.props.message).toBeDefined();
    expect(response.props.isViewed).toBeFalsy();
    expect(response.props.userId).toBeDefined();

    expect(response).toBeInstanceOf(Notification);
  });
});
