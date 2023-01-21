import { createContext, useState } from "react";

// 各コンポーネントがアクセスするコンテキスト
// createContext()の引数は、プロバイダでvalueを設定しない場合に利用される
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});

// プロバイダ: コンテキストを供給するコンポーネント
export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null)
    
    // コンテキストにアクセスすることで、参照できるデータ
    const value = {currentUser, setCurrentUser} 

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}