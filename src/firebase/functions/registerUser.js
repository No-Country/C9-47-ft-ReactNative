import { auth, db, mainCollection } from "../credentials";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { doc, setDoc } from "@firebase/firestore";

const registerUser = async (email, password, data) => {
    try {
        const userAuth = await createUserWithEmailAndPassword(auth, email, password);
        console.log(userAuth.user.uid);
        //Creo el usuario en la db con el mismo id proporcionado por auth
        setDoc(doc(db, mainCollection, userAuth.user.uid), {...data, id:userAuth.user.uid, })
        return true
    } catch (error) {
        console.log(error);
    }
};


export default registerUser;