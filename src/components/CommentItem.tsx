import { Comment } from "@/src/types";

export default function CommentItem({ comment, onEdit, onDelete }) {
  return (
    <li>
      {/* Comment content and actions */}
      <>
        <p>{comment.username}</p>
        <p>{comment.content}</p>

        {/* Digər şərh məlumatları */}
      </>
    </li>
  );
} 