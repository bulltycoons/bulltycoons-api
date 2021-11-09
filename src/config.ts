import assert from 'assert';
import dotenv from 'dotenv';
dotenv.config();

const {
    PORT,
    HOST,
    HOST_URL,
    API_KEY,
    AUTH_DOMAIN,
    PROJECT_ID,
    STORAGE_BUCKET,
    MESSAGING_SENDER_ID,
    APP_ID,
    COLLECTION_NAME
} = process.env;

assert(PORT, "PORT is required");
assert(HOST, "HOST is required");

const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID
}

export {
    PORT,
    HOST,
    HOST_URL,
    COLLECTION_NAME,
    firebaseConfig
}