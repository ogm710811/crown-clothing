// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyBf4L47DDt00u0NVaQdU8GWOZhLF5FsM-k',
  authDomain: 'crown-clothing-3fa36.firebaseapp.com',
  projectId: 'crown-clothing-3fa36',
  storageBucket: 'crown-clothing-3fa36.appspot.com',
  messagingSenderId: '532118729938',
  appId: '1:532118729938:web:166ce9d648cac6dc01a90b',
  measurementId: 'G-RV029C9PF1'
};

export const createUseProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = doc(firestore, 'users', `${userAuth.uid}`);
  const userSnapshot = await getDoc(userRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    const userData = { displayName, email, createAt, ...additionalData };
    try {
      await setDoc(doc(firestore, 'users', userAuth.uid), userData);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }
  return userRef;
};

// Initialize Firebase
const app = initializeApp(config);
export const auth = getAuth(app);
export const firestore = getFirestore(app);

const provider = new GoogleAuthProvider(app);
provider.setCustomParameters({ prompt: 'select_account' });
export const singInWithGoogle = () => signInWithPopup(auth, provider);



