'use client'

import React, { useState, useContext, createContext, useEffect, ReactNode } from "react";
import { signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider, FacebookAuthProvider, User } from "firebase/auth";
import { auth } from "@/firebase/config";


interface AuthContextProps {
    user: User | null;
    loading: boolean;
    googleSignIn: () => void;
    facebookSignIn: () => void;
    logOut: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextProps | null>(null);

interface AuthContextProviderProps {
    children: ReactNode;
};

export default function AuthContextProvider({ children }: AuthContextProviderProps) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);


    const googleSignIn = async () => {
        const Gprovider = new GoogleAuthProvider();
        await signInWithPopup(auth, Gprovider);
    };
    const facebookSignIn = async () => {
        const fprovider = new FacebookAuthProvider()
        await signInWithPopup(auth, fprovider);
    };

    const logOut = async () => {
        await signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, [user]);

    return (
        <AuthContext.Provider value={{ user, loading, googleSignIn, facebookSignIn, logOut }}>{children}</AuthContext.Provider>
    );
};
export const AuthContextProps = {
    loading: false,
    googleSignIn: () => {
        console.log("Google sign-in method");
    },
    facebookSignIn: () => {
        console.log("Google sign-in method");
    },
    logOut: () => {
        console.log("Google sign-in method")
    },
    user: { displayname: "", email: "", uid: null }
    // Digər default xüsusiyyətlər...
};

export const useAuth = () => useContext(AuthContext) || AuthContextProps;