import { Timestamp } from "firebase/firestore";

export interface Comment {
  id: string;
  uid: string;
  username: string;
  rating: number;
  content: string;
  createdAt: Timestamp;
  updatedAt?: Timestamp;
  edited?: boolean;
}

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string;
} 