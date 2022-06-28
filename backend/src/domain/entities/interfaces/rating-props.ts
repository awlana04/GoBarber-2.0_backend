import Comment from '../modules/comment';

export type RatingProps = {
  stars: number;
  comment: string;
  barberId: string;
  userId: string;
};

export type RatingValidationProps = {
  stars: number;
  comment: Comment;
  barberId: string;
  userId: string;
};

export type UpdateRatingProps = {
  stars?: number;
  comment: string;
};
