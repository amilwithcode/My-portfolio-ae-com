/* eslint-disable */
"use client";


import { useState, useEffect } from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { useAuth } from "@/src/context/AuthContext";
import {
    setDoc,
    doc,
    getDoc,
    collection,
    getDocs,
    DocumentData,
    getFirestore,
    deleteDoc,
    updateDoc,
    Timestamp
} from "firebase/firestore";

import { db } from "@/src/firebase/config";
import { toast } from "react-toastify";
import CommentItem from "./CommentItem";
import { useTranslations } from "next-intl";

export interface Comment {
    uid: string;
    username: string;
    rating: number;
    content: string;
};

// Tailwind CSS üçün ortaq stil konstanta çıxarılması
const inputClasses = "w-full border p-2 rounded-md shadow-sm text-black dark:bg-black dark:text-white";

function CommentsLikes() {
    const [comments, setComments] = useState<Comment[]>([]);
    const [username, setUsername] = useState("");
    const [rating, setRating] = useState(0);
    const [text, setText] = useState("");
    const [isFormValid, setIsFormValid] = useState(true);
    const [showAllComments, setShowAllComments] = useState(false);
    const [editingCommentId, setEditingCommentId] = useState<number | null>(
        null
    );
    const [error, setError] = useState<string>("");
    const { user } = useAuth();
    const uid = user?.uid || "";
    const [editContent, setEditContent] = useState("");
    const [editingId, setEditingId] = useState<string | null>(null);
    const t = useTranslations("HomePage");

    const getUserData = async (uid) => {
        const docRef = doc(db, "users", uid as string);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            if (!username) {
                setUsername(docSnap.data().username);
            } else {
                setUsername(username);
            }
        } else {
            console.log("notfound");
        }
    };

    const getCommentsData = async () => {
        const docRef = await getDocs(collection(db, "comments"));
        setComments(docRef.docs.map((doc) => doc.data() as Comment));
    };
    useEffect(() => {
        getCommentsData();
    }, [user]);
    useEffect(() => {

        getUserData(uid);
    }, [uid]);
    const AddCommentsToFirestore = async (uid: any) => {
        try {
            const newCommentRef = doc(collection(db, "comments"));
            const newComment: Comment = {
                id: Date.now().toString(),
                uid: user?.uid || "",
                username,
                rating,
                content: text,
                createdAt: Timestamp.now(),
                edited: false
            };
            await setDoc(newCommentRef, newComment);
        } catch (error) {
            console.error("Düzgün əlavə edilmədi", error);
            toast.error("Düzgün əlavə edilmədi", {
                position: 'top-center',
            })
        }
    };
    // // localStorage-dən şərhləri yükləyirik
    // useEffect(() => {
    //     const storedComments = localStorage.getItem("comments");
    //     if (storedComments) {
    //         setComments(JSON.parse(storedComments));
    //     }
    // }, []);

    // Şərh əlavə etdikdə localStorage-ə saxlamaq
    // const updateLocalStorage = (updatedComments: Comment[]) => {
    //     localStorage.setItem("comments", JSON.stringify(updatedComments));
    // };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (username && rating && text) {
            let newComments = [...comments];

            if (editingCommentId !== null) {
                // Redaktə etmək
                newComments = newComments.map((comment) =>
                    newComments.id === editingCommentId
                        ? { ...comment, username, rating, content: text }
                        : comment
                );
                setEditingCommentId(null);
            } else {
                // Yeni şərh əlavə etmək
                const newComment: Comment = {
                    id: Date.now().toString(),
                    uid: user?.uid || "",
                    username,
                    rating,
                    content: text,
                    createdAt: Timestamp.now(),
                    edited: false
                };
                newComments.push(newComment);
            }

            setComments(newComments);
            // updateLocalStorage(newComments); // Yeni şərhləri localStorage-ə saxlamaq

            // setUsername("");
            setRating(0);
            setText("");
            setIsFormValid(true);
            AddCommentsToFirestore(user?.uid);
        } else {
            setIsFormValid(false);
        }
    };

    const handleEdit = async (commentId: string, newContent: string) => {
        try {
            const db = getFirestore();
            const commentRef = doc(db, "coments", commentId);
            await updateDoc(commentRef, {
                content: newContent,
                edited: true,
                updatedAt: new Date()
            });
            alert("Şərh uğurla redaktə edildi!");
            // Şərhlər siyahısını yenilə
        } catch (error) {
            console.error("Redaktə xətası:", error);
            alert("Xəta: Şərh redaktə edilmədi.");
        }
    };

    const handleDelete = async (commentId: string) => {
        try {
            const db = getFirestore();
            const commentRef = doc(db, "coments", commentId);
            await deleteDoc(commentRef);
            alert("Şərh uğurla silindi!");
            // Şərhlər siyahısını yenilə
        } catch (error) {
            console.error("Şərh silinmədi:", error);
            alert("Xəta: Şərh silinmədi.");
        }
    };

    // Yeni köməkçi funksiya əlavə edək (komponentin yuxarı hissəsində)
    const formatUsername = (username: string) => {
        if (username.length <= 2) return username;
        return username.slice(0, 2) + '*'.repeat(username.length - 2);
    };

    // Hər iki comment listi üçün ortaq render funksiyası
    const renderComments = (comments: Comment[]) => comments.map((comment) => (
        <CommentItem 
            key={comment.id}
            comment={comment}
            onEdit={handleEdit}
            onDelete={handleDelete}
        />
    ));

    // Bütün async funksiyalarda ümumi error handler
    const handleFirebaseError = (error: unknown) => {
        console.error(error);
        // toast.error(t("common.firebase_error"));
    };

    return (
        <div className=" w-full  border p-4 text-black dark:bg-black dark:text-white font-permanent shadow-lg rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className={inputClasses}
                    required
                />

                <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <span
                            key={star}
                            onClick={() => setRating(star)}

                            className={`cursor-pointer ${star <= rating
                                ? "text-yellow-500"
                                : "text-gray-300"
                                }`}

                        >
                            ★
                        </span>
                    ))}
                </div>

                <textarea
                    placeholder="Your comment"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className={inputClasses}
                    maxLength={400}
                />
                {!user ? (
                    <p>Sign in to leave a comment</p>
                ) : (
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"

                    >
                        {t("coments.submit_comment")}
                    </button>
                )}
            </form>

            {!isFormValid && (
                <p className="text-red-500 text-sm mt-2">
                    Please fill all fields!
                </p>
            )}

            {/* Şərhlərin görünüşü */}
            <div className="mt-4 space-y-4">
                <h3 className="text-xl font-semibold">Recent Comments</h3>
                <ul className="space-y-2">
                    {renderComments(comments.slice(0, 3))}
                </ul>
            </div>

            {/* Əlavə şərhləri göstərmək üçün düymə */}
            {comments.length > 3 && !showAllComments && (
                <button
                    onClick={() => setShowAllComments(true)}
                    className="w-full mt-4 bg-green-500 text-black dark:bg-black dark:text-white p-2 rounded-md hover:bg-green-600"
                >
                    Show More Comments
                </button>
            )}

            {/* Bütün şərhləri göstərmək üçün */}
            {showAllComments && (
                <ul className="mt-4 space-y-2">
                    {renderComments(comments.slice(3))}
                </ul>
            )}
        </div>
    );
}

export default CommentsLikes;
