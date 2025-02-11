import { FirebaseError } from "firebase/app";
import { toast } from "react-toastify";

export const handleFirebaseError = (error: unknown) => {
  const message = error instanceof FirebaseError 
    ? error.code.replace("auth/", "").replace(/-/g, " ")
    : "An unknown error occurred";
  
  toast.error(message.charAt(0).toUpperCase() + message.slice(1));
}; 