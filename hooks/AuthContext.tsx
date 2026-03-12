import React, { createContext, useContext, useEffect, useState } from 'react';
import { Account, Client, ID } from 'appwrite';

interface AuthContextType {
  user: any; // You might want to define a more specific user type
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, username: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const client = new Client();
const account = new Account(client);

client
  .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!)
  .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!); 

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const currentAccount = await account.get();
        setUser(currentAccount);
      } catch (error) {
        console.error("Failed to fetch user:", error);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUser();
  }, []);

  const signIn = async (email, password) => {
    setIsLoading(true);
    try {
      await account.createEmailPasswordSession(email, password);
      const currentAccount = await account.get();
      setUser(currentAccount);
      return currentAccount; 
    } catch (error) {
      console.error("Sign In Error:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signUp = async (email, password, username) => {
    setIsLoading(true);
    try {
      await account.create(ID.unique(), email, password, username);
      await account.createEmailPasswordSession(email, password);
      const currentAccount = await account.get();
      setUser(currentAccount);
      return currentAccount; 
    } catch (error) {
      console.error("Sign Up Error:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = async () => {
    setIsLoading(true);
    try {
      await account.deleteSession('current');
      setUser(null);
    } catch (error) {
      console.error("Sign Out Error:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};