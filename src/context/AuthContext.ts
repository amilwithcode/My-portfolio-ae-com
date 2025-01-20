'use client'

import React ,{ useState, useContext, createContext, useEffect, ReactNode } from "react";
import { signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider, User } from "firebase/auth";
import { auth } from "@/src/firebase/config";


interface AuthContextProps {
    user: User | null;
    googleSignIn: () => Promise<void>;
    logOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextProps | null>(null);

interface AuthContextProviderProps {
    children: ReactNode;
};

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    const googleSignIn =  () => {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider);
    };

    const logOut =  () => {
        await signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user,googleSignIn, logOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);