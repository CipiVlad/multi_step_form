import React, { useEffect, useState } from "react";
import { useContext } from "react"

const initialState: [{}] = [{ name: "", email: "", phone: "" }];
export const StorageContext = React.createContext(initialState)

const StorageProvider = ({ children }: { children: React.ReactNode }) => {
    const [storage, setStorage] = useState(initialState)

    //localStorage set and get
    useEffect(() => {
        setStorage(JSON.parse(localStorage.getItem("storage") || "[]"))
    }, [])

    useEffect(() => {
        localStorage.setItem("storage", JSON.stringify(storage))
    }, [storage])

    const addItem = (data: any) => {
        setStorage([...storage, data])
    }

    return (
        <StorageContext.Provider value={initialState, addItem}>
            {children}
        </StorageContext.Provider>
    )
}


export default StorageProvider