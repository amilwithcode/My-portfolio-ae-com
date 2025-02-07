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
} from "firebase/firestore";

import { db } from "@/src/firebase/config";
import { toast } from "react-toastify";

export interface Comment {
    uid: string;
    username: string;
    rating: number;
    text: string;
};

function CommentsLikes() {
    const [comments, setComments] = useState<DocumentData[]>([]);
    const [username, setUsername] = useState("");
    const [rating, setRating] = useState(0);
    const [text, setText] = useState("");
    const [isFormValid, setIsFormValid] = useState(true);
    const [showAllComments, setShowAllComments] = useState(false);
    const [editingCommentId, setEditingCommentId] = useState<number | null>(
        null
    );
    const [error, setError] = useState<string>("");
    const { user } = useAuth() ?? {};
    const uid = "12345";
    // const [comment, setCommentsData] = useState({
    //     userName: "",
    //     comment: "",
    // });

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
        const docRef = await getDocs(collection(db, "coments"));
        setComments(docRef.docs.map((doc) => doc.data()));
    };
    useEffect(() => {
        getCommentsData();
    }, [user]);
    useEffect(() => {

        getUserData(uid);
    }, [uid]);
    const AddCommentsToFirestore = async (uid: any) => {
        try {
            await setDoc(doc(db, "coments", uid), {
                username: username,
                comment: text,
                rating,
            });
        } catch (error) {
            console.error("Düzgün əlavə edilmədi", error);
            toast.error("Düzgün əlavə edilmədi", {
                position: 'top-center',
            })
        }
    };
    // localStorage-dən şərhləri yükləyirik
    useEffect(() => {
        const storedComments = localStorage.getItem("comments");
        if (storedComments) {
            setComments(JSON.parse(storedComments));
        }
    }, []);

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
                    comment.id === editingCommentId
                        ? { ...comment, username, rating, comment: text }
                        : comment
                );
                setEditingCommentId(null);
            } else {
                // Yeni şərh əlavə etmək
                const newComment = {
                    id: Date.now(),
                    username,
                    rating,
                    comment: text,
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

    const handleEdit = (commentId: number) => {
        const commentToEdit = comments.find(
            (comment) => comment.id === commentId
        );
        if (commentToEdit) {
            setEditingCommentId(commentId);
            setUsername(commentToEdit.username);
            setRating(commentToEdit.rating);
            setText(commentToEdit.text);
        }
    };

    const handleDelete = (commentId: number) => {
        const updatedComments = comments.filter(
            (comment) => comment.id !== commentId
        );
        setComments(updatedComments);
        // updateLocalStorage(updatedComments);
    };

    return (
        <div className=" w-full  border p-4 text-black dark:bg-black dark:text-white font-permanent shadow-lg rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full border p-2 rounded-md shadow-sm text-black dark:bg-black dark:text-white"
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
                    className="w-full border p-2 rounded-md shadow-sm text-black dark:bg-black dark:text-white"
                    maxLength={400}
                />
                {!user ? (
                    <p>Sign in to leave a comment</p>
                ) : (
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"

                    >
                        {editingCommentId ? "Update Comment" : "Submit Comment"}
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
                    {comments.slice(0, 3).map((comment) => (
                        <li key={comment.id}>
                            <p className="font-semibold">{comment.username}</p>
                            <div className="flex space-x-1 text-yellow-500">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <span
                                        key={star}
                                        className={
                                            star <= comment.rating
                                                ? "text-yellow-500"
                                                : "text-gray-300"
                                        }
                                    >
                                        ★
                                    </span>
                                ))}
                            </div>
                            <p>{comment.text}</p>
                            <div className="flex space-x-2 mt-2">
                                {!user ? (
                                    <p className="register">Can not sigin</p>
                                ) : (
                                    username === comment.username && (
                                        <div className="flex space-x-2 mt-2">
                                            <button
                                                onClick={() =>
                                                    handleEdit(comment.id)
                                                }
                                                className="text-blue-500 hover:text-blue-700"
                                            >
                                                <FaRegEdit />
                                            </button>
                                            <button
                                                onClick={() =>
                                                    handleDelete(comment.id)
                                                }
                                                className="text-red-500 hover:text-red-700"
                                            >
                                                <MdOutlineDeleteOutline />
                                            </button>
                                        </div>
                                    )
                                )}
                            </div>
                        </li>
                    ))}
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
                    {comments.slice(3).map((comment) => (
                        <li key={comment.id}>
                            <p className="font-semibold">{comment.username}</p>
                            <div className="flex space-x-1 text-yellow-500">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <span
                                        key={star}
                                        className={
                                            star <= comment.rating
                                                ? "text-yellow-500"
                                                : "text-gray-300"
                                        }
                                    >
                                        ★
                                    </span>
                                ))}
                            </div>
                            <p>{comment.text}</p>
                            {user ? (
                                <div className="flex space-x-2 mt-2">
                                    <button
                                        onClick={() => handleEdit(comment.id)}
                                        className="text-blue-500 hover:text-blue-700"
                                    >
                                        <FaRegEdit />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(comment.id)}
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        <MdOutlineDeleteOutline />
                                    </button>
                                </div>
                            ) : (
                                <p>You write to again your name</p>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default CommentsLikes;
