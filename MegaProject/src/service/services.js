import { addDoc, updateDoc, deleteDoc, getDoc, getDocs, query, where, doc } from "firebase/firestore";
import { ref, uploadBytes, deleteObject, getDownloadURL } from "firebase/storage";
import {postCollection, storage} from "../config"; 

class FirebaseServices {
  
    async createPost({ title, featuredImage, content, status, userId, slug }) {
        try {
            const docRef = await addDoc(postCollection, {
                title,
                featuredImage,
                content,
                status,
                userId,
                slug,
                createdAt: new Date(),
            });
            return docRef.id;
        } catch (e) {
            console.error("Error creating post:", e);
        }
    }

    async updatePost(postId, { title, featuredImage, content, status }) {
        try {
            const postRef = doc(postCollection, postId);
            await updateDoc(postRef, {
                title,
                featuredImage,
                content,
                status,
                updatedAt: new Date(),
            });
            return true;
        } catch (e) {
            console.error("Error updating post:", e);
            return false;
        }
    }

    async deletePost(postId) {
        try {
            const postRef = doc(postCollection, postId);
            await deleteDoc(postRef);
            return true;
        } catch (e) {
            console.error("Error deleting post:", e);
            return false;
        }
    }

    
    async getDocument(postId) {
        try {
            const postRef = doc(postCollection, postId);
            const postSnapshot = await getDoc(postRef);
            if (postSnapshot.exists()) {
                return postSnapshot.data();
            } else {
                console.log("No such document!");
                return null;
            }
        } catch (e) {
            console.error("Error getting document:", e);
        }
    }
    async getAllDocs(status = "active") {
        try {
            const q = query(postCollection, where("status", "==", status));
            const querySnapshot = await getDocs(q);
            return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        } catch (e) {
            console.error("Error getting all documents:", e);
        }
    }

    async createFile(file) {
        try {
            const storageRef = ref(storage, `images/${file.name}`);
            const snapshot = await uploadBytes(storageRef, file);
            const downloadUrl = await getDownloadURL(snapshot.ref);
            return {downloadUrl , path: snapshot.ref.fullPath } 
        } catch (e) {
            console.error("Error uploading file:", e);
        }
    }

    async deleteFile(fileUrl) {
        try {
            const fileRef = ref(storage, fileUrl);
            await deleteObject(fileRef);
            return true;
        } catch (e) {
            console.error("Error deleting file:", e);
            return false;
        }
    }

    async getFilePreview(fileUrl) {
        try {
            const storageRef = ref(storage, fileUrl);
            return await getDownloadURL(storageRef);
        } catch (e) {
            console.error("Error getting file preview:", e);
        }
    }
}

export const services = new FirebaseServices();
