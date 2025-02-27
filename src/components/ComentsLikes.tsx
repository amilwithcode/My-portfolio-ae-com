/* eslint-disable */
"use client";

import { useState, useEffect } from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { useAuth } from "@/context/AuthContext";
import {
    setDoc,
    doc,
    getDoc,
    collection,
    getDocs,
    deleteDoc,
    updateDoc,
    Timestamp,
} from "firebase/firestore";

import { db } from "@/firebase/config";
import { toast } from "react-toastify";
import { useTranslations } from "next-intl";

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

// Tailwind CSS üçün ortaq stil konstanta çıxarılması
const inputClasses =
    "w-full border p-2 rounded-md shadow-sm text-black dark:bg-black dark:text-white";

function CommentsLikes() {
    const [comments, setComments] = useState<Comment[]>([]);
    const [username, setUsername] = useState("");
    const [rating, setRating] = useState(0);
    const [text, setText] = useState("");
    const [isFormValid, setIsFormValid] = useState(true);
    const [showAllComments, setShowAllComments] = useState(false);
    const [editingCommentId, setEditingCommentId] = useState<string | null>(
        null
    );
    const [error, setError] = useState<string>("");
    const { user } = useAuth();
    const uid = user?.uid || "";
    const [editContent, setEditContent] = useState("");
    const [editingId, setEditingId] = useState<string | null>(null);
    const t = useTranslations("HomePage");

    const getUserData = async (uid: string) => {
        try {
            const docRef = doc(db, "users", uid);
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
        } catch (error) {
            console.error("Xəta: İstifadəçi məlumatları yüklənmədi", error);
            toast.error("Xəta: İstifadəçi məlumatları yüklənmədi", {
                position: "top-center",
            });
        }
    };

    const getCommentsData = async () => {
        const docRef = await getDocs(collection(db, "comments"));

        setComments(
            docRef.docs.map((doc) => {
                return {
                    id: doc.id,
                    uid: doc.data().uid,
                    username: doc.data().username,
                    rating: doc.data().rating,
                    content: doc.data().content,
                    createdAt: doc.data().createdAt,
                    edited: doc.data().edited
                };
            })
        );
    };

    useEffect(() => {
        getCommentsData();
    }, [user]);

    useEffect(() => {
        if (uid) getUserData(uid);
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
                edited: false,
            };
            await setDoc(newCommentRef, newComment);
        } catch (error) {
            console.error("Düzgün əlavə edilmədi", error);
            toast.error("Düzgün əlavə edilmədi", {
                position: "top-center",
            });
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
                    comment.id === editingCommentId
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
                    edited: false,
                };
                newComments.push(newComment);
            }

            setComments(newComments);
            // updateLocalStorage(newComments); // Yeni şərhləri localStorage-ə saxlamaq

            setUsername("");
            setRating(0);
            setText("");
            setIsFormValid(true);
            AddCommentsToFirestore(user?.uid);
        } else {
            setIsFormValid(false);
        }
    };

    const handleEdit = async (commentId: string, newContent: string) => {

        // console.log(commentId)
        try {
            // const db = getFirestore();
            const commentRef = doc(db, "comments", commentId);

            await updateDoc(commentRef, {
                content: newContent,
                edited: true,
                updatedAt: new Date(),
            });
            toast.success("Şərh uğurla redaktə edildi!", {
                position: "top-center",
            });
            // Şərhlər siyahısını yenilə
        } catch (error) {
            console.error("Redaktə xətası:", error);
            toast.error("Xəta: Şərh redaktə edilmədi.", {
                position: "top-center",
            });
        }
    };

    const handleDelete = async (commentId: string) => {
        try {

            // const db = getFirestore();
            const commentRef = doc(db, "comments", commentId);
            await deleteDoc(commentRef);
            comments.filter((comment) => comment.id !== commentId);

            toast.success("Şərh uğurla silindi!", { position: "top-center" });
            // Şərhlər siyahısını yenilə
        } catch (error) {
            console.error("Şərh silinmədi:", error);
            toast.error("Xəta: Şərh silinmədi.", { position: "top-center" });
        }
    };

    // Yeni köməkçi funksiya əlavə edək (komponentin yuxarı hissəsində)
    const formatUsername = (username: string) => {
        if (username.length <= 2) return username;
        return username.slice(0, 2) + "*".repeat(username.length - 2);
    };

    return (
        <div className=" w-full  border p-4 text-black dark:bg-black dark:text-white font-permanent shadow-lg rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder={t("coments.username")}
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
                    placeholder={t("coments.comment")}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className={inputClasses}
                    maxLength={400}
                />
                {!user ? (
                    <p> {t("coments.mesaj_commet")}</p>
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
                    {t("coments.form_mesaj")}
                </p>
            )}

            {/* Şərhlərin görünüşü */}
            <div className="mt-4 space-y-4">
                <h3 className="text-xl font-semibold">{t("coments.header")}</h3>
                <ul className="space-y-2">
                    {comments.map((comment) => (
                        <li
                            key={comment.id}
                            className="border p-4 rounded-lg mb-4"
                        >
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="font-semibold">
                                        {formatUsername(comment.username)}
                                    </p>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                                        {comment.createdAt
                                            ?.toDate()
                                            .toLocaleDateString()}
                                    </p>
                                    {editingId === comment.id ? (
                                        <textarea
                                            value={editContent}
                                            onChange={(e) =>
                                                setEditContent(e.target.value)
                                            }
                                            className="w-full p-2 border rounded mt-2"
                                        />
                                    ) : (
                                        <p className="mt-2">
                                            {comment.content}
                                        </p>
                                    )}
                                    {comment.edited && (
                                        <p className="text-xs text-gray-500 mt-1">
                                            {t("coments.edited")}
                                        </p>
                                    )}
                                </div>

                                {user?.uid === comment.uid && (
                                    <div className="flex space-x-2">
                                        {editingId === comment.id ? (
                                            <>
                                                <button
                                                    onClick={() =>
                                                        handleEdit(
                                                            comment.id,
                                                            editContent
                                                        )
                                                    }
                                                    className="text-green-500 hover:text-green-700"
                                                >
                                                    {t("coments.save")}
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        setEditingId(null)
                                                    }
                                                    className="text-gray-500 hover:text-gray-700"
                                                >
                                                    {t("coments.cancel")}
                                                </button>
                                            </>
                                        ) : (
                                            <>
                                                <button
                                                    onClick={() => {
                                                        setEditingId(
                                                            comment.id
                                                        );
                                                        setEditContent(
                                                            comment.content
                                                        );
                                                    }}
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
                                            </>
                                        )}
                                    </div>
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
                    {t("coments.more_commet")}
                </button>
            )}

            {/* Bütün şərhləri göstərmək üçün */}
            {showAllComments && (
                <ul className="mt-4 space-y-2">
                    {comments.slice(3).map((comment) => (
                        <li
                            key={comment.id}
                            className="border p-4 rounded-lg mb-4"
                        >
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="font-semibold">
                                        {formatUsername(comment.username)}
                                    </p>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                                        {comment.createdAt
                                            ?.toDate()
                                            .toLocaleDateString()}
                                    </p>
                                    {editingId === comment.id ? (
                                        <textarea
                                            value={editContent}
                                            onChange={(e) =>
                                                setEditContent(e.target.value)
                                            }
                                            className="w-full p-2 border rounded mt-2"
                                        />
                                    ) : (
                                        <p className="mt-2">
                                            {comment.content}
                                        </p>
                                    )}
                                    {comment.edited && (
                                        <p className="text-xs text-gray-500 mt-1">
                                            {t("coments.edited")}
                                        </p>
                                    )}
                                </div>

                                {user?.uid === comment.uid && (
                                    <div className="flex space-x-2">
                                        {editingId === comment.id ? (
                                            <>
                                                <button
                                                    onClick={() =>
                                                        handleEdit(
                                                            comment.id,
                                                            editContent
                                                        )
                                                    }
                                                    className="text-green-500 hover:text-green-700"
                                                >
                                                    {t("coments.save")}
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        setEditingId(null)
                                                    }
                                                    className="text-gray-500 hover:text-gray-700"
                                                >
                                                    {t("coments.cancel")}
                                                </button>
                                            </>
                                        ) : (
                                            <>
                                                <button
                                                    onClick={() => {
                                                        setEditingId(
                                                            comment.id
                                                        );
                                                        setEditContent(
                                                            comment.content
                                                        );
                                                    }}
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
                                            </>
                                        )}
                                    </div>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default CommentsLikes;
