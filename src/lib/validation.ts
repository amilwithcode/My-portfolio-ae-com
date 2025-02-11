export const validateComment = (text: string, rating: number) => {
  const errors: string[] = [];
  if (!text) errors.push("commentRequired");
  if (rating < 1) errors.push("ratingRequired");
  return errors;
}; 