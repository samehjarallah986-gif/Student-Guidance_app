import { Account, Client, Databases, ID, Query } from "appwrite";


const client = new Client()
  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject("69a7410e0018f540de35"); 

export const account = new Account(client);
export const databases = new Databases(client);

export const DB_ID = "69a741290018b7af01b3";

export const COL_QUESTIONNAIRES = "questionnaires";
export const COL_SAVED = "saved";
export const COL_PROFILES = "users_profiles";

export { ID, Query };

export async function checkSession() {
  try {
    return await account.getSession('current');
  } catch {
    return null;
  }
}


/**
 * Retrieves the questionnaire filled by the user, or null if none.
 */
export async function getQuestionnaire(userId: string) {
  try {
    const result = await databases.listDocuments(
      DB_ID,
      COL_QUESTIONNAIRES,
      [Query.equal("userId", userId)]
    );
    return result.documents.length ? result.documents[0] : null;
  } catch (error) {
    console.error("Failed to fetch questionnaire:", error);
    return null;
  }
}
/**
 * Returns the current authenticated user, or `null` if there is no
 * valid session.  The underlying SDK will throw a 401 when no
 * session exists, so we quietly swallow that and return `null` to
 * simplify callers.
 */
export async function getMe() {
  try {
    return await account.get();
  } catch (error) {
    // session missing/expired or other network error
    return null;
  }
}

/**
 * Creates a user profile document in the users_profiles collection
 * This stores the user's profile information
 */
export async function createUserProfile(userId: string, profileData: {
  username: string;
  role?: string;
  school: string;
  gradeLevel?: string;
  city?: string;
}) {
  try {
    await databases.createDocument(
      DB_ID,
      COL_PROFILES,
      userId, // Use userId as the document ID for easy retrieval
      {
        userId,
        fullName: profileData.username, // Maps username to fullName field
        role: profileData.role || "",
        school: profileData.school,
        gradeLevel: profileData.gradeLevel || "",
        city: profileData.city || "",
      }
    );
  } catch (error) {
    console.error("Failed to create user profile:", error);
    throw error;
  }
}

/**
 * Retrieves a user's profile from the users_profiles collection
 */
export async function getUserProfile(userId: string) {
  try {
    return await databases.getDocument(DB_ID, COL_PROFILES, userId);
  } catch (error) {
    console.error("Failed to retrieve user profile:", error);
    return null;
  }
}