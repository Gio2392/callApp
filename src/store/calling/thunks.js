import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
} from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { deleteRegisterById, setRegisters } from './callingSlice';

export const startNewRegister = (datos) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    const newRegister = {
      phone: datos.number,
      userName: datos.name,
      date: new Date().getTime(),
    };

    const newDoc = doc(collection(FirebaseDB, `${uid}/contacts/contact`));
    await setDoc(newDoc, newRegister);

    newRegister.id = newDoc.id;
  };
};

export const startLoadingRegisters = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    const collectionRef = collection(FirebaseDB, `${uid}/contacts/contact`);
    const docs = await getDocs(collectionRef);

    const registers = [];
    docs.forEach((doc) => {
      registers.push({ id: doc.id, ...doc.data() });
    });

    dispatch(setRegisters(registers));
    // console.log(registers);
  };
};

export const startDeleteAllregisters = (id) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    const docRef = doc(FirebaseDB, `${uid}/contacts/contact/${id}`);
    await deleteDoc(docRef);

    dispatch(deleteRegisterById(id));
    // console.log(registers);
  };
};
