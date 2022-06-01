import Comment from '../domain/comment';

export type RatingProps = {
  rating: number;
  comment: string;
  barberId: string;
  userId: string;
};

export type RatingValidationProps = {
  rating: number;
  comment: Comment;
  barberId: string;
  userId: string;
};
