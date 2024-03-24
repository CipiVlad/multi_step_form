import React, { useEffect, useState } from "react";



type StorageContextValue = [setItem: (item: any) => void, getItem: () => any];

// Create the storage context
export const StorageContext = React.createContext<StorageContextValue>([() => { }, () => { }]);

const StorageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const personInfo = "person"
    const planInfo = "plan"
    const addon = "addon"


    const setItem = (item: any, personInfo?: string, planInfo?: string, addon?: string) => {
        localStorage.setItem(personInfo || planInfo || addon, JSON.stringify(item));
    };

    const getItem = (personInfo?: string, planInfo?: string, addon?: string) => {
        const item = localStorage.getItem((personInfo || planInfo || addon));
        return item ? JSON.parse(item) : null;
    };

    return (
        <StorageContext.Provider value={[setItem, getItem]}>
            {children}
        </StorageContext.Provider>
    );
};


export default StorageProvider