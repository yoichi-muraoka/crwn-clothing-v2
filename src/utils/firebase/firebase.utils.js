import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth'
import {
  getFirestore,
  doc, // retrieve doc instance
  getDoc, // get data from doc
  setDoc // set data into doc
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyA3205tXYQYW_tur_ad0kQ-nwoqlbvfLnI',
  authDomain: 'crwn-clothing-e83be.firebaseapp.com',
  projectId: 'crwn-clothing-e83be',
  storageBucket: 'crwn-clothing-e83be.appspot.com',
  messagingSenderId: '374795746796',
  appId: '1:374795746796:web:969b25fb3ef295a0a9d4c9'
}

const firebaseApp = initializeApp(firebaseConfig)

// ↑ ここまでは、Firebaseからコピペ

/*------------------------
  Firebase Authentication
------------------------*/
// 様々な認証方法(メール, Facebook, Github等)のうちGoogle認証を利用
const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: 'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

/*------------------------
    Firestore Database
------------------------*/
export const db = getFirestore()
/**
 * Google認証したユーザーをデータベースに登録
 * @param auth 認証情報オブジェクト 
 * @returns 該当ユーザのドキュメント参照
 */
export const createUserDocFromAuth = async auth => {
  // 認証情報をもとに、Firestoreのusersコレクション(テーブル)から
  // ドキュメント(行)の参照を取得
  // → コレクションやドキュメントが存在しない場合も
  //   参照オブジェクトが作成される
  const collectionName = 'users'
  const docId = auth.uid
  const userDocRef = doc(db, collectionName, docId)

  // 参照ドキュメントからユーザデータを取得
  const userSnapshot = await getDoc(userDocRef)

  // ユーザデータがない場合は、参照先に登録
  if (!userSnapshot.exists()) {
    const { displayName, email } = auth
    const createdAt = new Date()
    try {
      await setDoc(userDocRef, { displayName, email, createdAt })
    } catch (error) {
      console.log('error: creating user', error.message)
    }
  } 

  return userDocRef;
}
