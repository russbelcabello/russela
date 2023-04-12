import { Injectable } from '@nestjs/common';
//import * as FirebaseConfig from '../firebase-config/firebase-config';
import * as admin from 'firebase-admin';
import * as firebase from 'firebase-admin';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBTqScCOZ7t7zehgvGO910Wx8y0p4uJhW8",
  authDomain: "proyect-001-361520.firebaseapp.com",
  projectId: "proyect-001-361520",
  storageBucket: "proyect-001-361520.appspot.com",
  messagingSenderId: "369226557757",
  appId: "1:369226557757:web:44b3fc5b7f462101a47d54",
  measurementId: "G-LZ2QK36HSE"
};
@Injectable()
export class Firebase {
    private readonly firebaseApp: admin.app.App    
    private readonly db: admin.firestore.Firestore;
    
    constructor() {
        this.firebaseApp = admin.initializeApp(firebaseConfig);
    
        this.db = this.firebaseApp.firestore();
      }
    
      public getCollection(collectionName: string): admin.firestore.CollectionReference {
        return this.db.collection(collectionName);
      }
}
