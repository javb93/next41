"use server";
import { db } from "@/app/utils/firebase";
import { collection, getDocs, setDoc, addDoc } from "firebase/firestore";

const userCollection = collection(db, "users");

export async function getAllUsers() {
  const users = [];
  const querySnapshot = await getDocs(userCollection);
  querySnapshot.forEach((doc) => {
    users.push(doc.data());
  });
  console.log(users);
  return users;
}
export async function addUser(user) {
  const userRef = await addDoc(userCollection, user);
  console.log(userRef);
  return userRef.id;
}
