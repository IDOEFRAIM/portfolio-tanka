import { Client, Databases, Account, Storage } from 'appwrite';

export const client = new Client();

const endpoint = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || 'https://cloud.appwrite.io/v1';
const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || '';

client
    .setEndpoint(endpoint)
    .setProject(projectId);

export const databases = new Databases(client);
export const account = new Account(client);
export const storage = new Storage(client);

export const APPWRITE_CONFIG = {
    databaseId: process.env.NEXT_PUBLIC_APPWRITE_DATABASE || 'blog_db',
    collectionId: process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID || 'articles',
    bucketId: process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID || 'blog_images',
};
