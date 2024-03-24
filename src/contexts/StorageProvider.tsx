import React, { useEffect, useState } from "react";


export const StorageContext = React.createContext(null)

const StorageProvider = ({ children }: { children: React.ReactNode }) => {

    // localStorage set and get
    const setItem = (item) => {
        window.localStorage.setItem("storage", JSON.stringify(item))
    }

    const getItem = (item) => {
        JSON.parse(localStorage.getItem("storage") || "[]")
    }



    // const addItem = (data: any) => {
    //     setStorage([...storage, data])
    // }

    return (
        <StorageContext.Provider value={[setItem, getItem]}>
            {children}
        </StorageContext.Provider>
    )
}


export default StorageProvider