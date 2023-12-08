import Comment from './comment';

describe('Comment value object', () => {
  it('should not be able to create a new comment with invalid comment (few characters)', () => {
    const comment = 'a';

    const response = Comment.create(comment).value as Error;

    expect(response.name).toEqual('InvalidCommentError');
    expect(response.message).toEqual('Invalid comment: ' + comment + '.');
  });

  it('should not be able to create a new comment with invalid comment (too many characters)', () => {
    const comment = 'a'.repeat(513);

    const response = Comment.create(comment).value as Error;

    expect(response.name).toEqual('InvalidCommentError');
    expect(response.message).toEqual('Invalid comment: ' + comment + '.');
  });

  it('should be able to create a new comment', () => {
    const comment =
      'A very good place, this is my fifth time comming back here. A really peace and profissioanl barber.';

    const response = Comment.create(comment).value as Comment;

    expect(response.value).toEqual(comment);
    expect(response).toBeInstanceOf(Comment);
  });
});
