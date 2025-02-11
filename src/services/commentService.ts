import { db } from "@/src/firebase/config";
import { Comment } from "@/src/types";
import { 
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc 
} from "firebase/firestore";

export const CommentService = {
  async addComment(comment: Omit<Comment, "id">) {
    return await addDoc(collection(db, "comments"), comment);
  },

  async updateComment(id: string, content: string) {
    await updateDoc(doc(db, "comments", id), {
      content,
      edited: true,
      updatedAt: new Date()
    });
  },

  async deleteComment(id: string) {
    await deleteDoc(doc(db, "comments", id));
  }
}; 