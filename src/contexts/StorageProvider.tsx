import React from "react";

// Create the context
type StorageContextValue = [setItem: (item: string) => void, getItem: () => void];

// Create the storage context
// @explain:  <StorageContextValue>([() => { }, () => { }]);
// the functions provided are essentially placeholders and don't perform any meaningful operations.

export const StorageContext = React.createContext<StorageContextValue>([() => { }, () => { }]);

const StorageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const setItem = (item: string, planInfo: string, addon?: string | null, personInfo?: string | null,) => {
        try {
            if (!personInfo && !planInfo && !addon) {
                throw new Error("Must provide a storage key");
            }
            localStorage.setItem((personInfo || planInfo || addon)!, JSON.stringify(item));
        } catch (error) {
            console.error("Error setting localStorage item:", error);
        }
    };

    const getItem = (personInfo?: string, planInfo?: string, addon?: string) => {
        try {
            const item = localStorage.getItem((personInfo || planInfo || addon));
            return item ? JSON.parse(item) : null;
        } catch (error) {
            console.error("Error getting localStorage item:", error);
            return null;
        }
    };

    return (
        <StorageContext.Provider value={[setItem, getItem]}>
            {children}
        </StorageContext.Provider>
    );
};


export default StorageProvider