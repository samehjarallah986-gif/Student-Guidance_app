import { SplashScreen, Stack, useRouter } from 'expo-router';
import { useEffect } from 'react';
import { AuthProvider, useAuth } from '../hooks/AuthContext';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

function RootLayoutNav() {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading) {
      if (user) {
        router.replace('/(tabs)');
      } else {
        router.replace('/sign-in');
      }
      SplashScreen.hideAsync();
    }
  }, [user, isLoading]);

  if (isLoading) {
    return null; // Or a loading indicator
  }

  return (
    <Stack screenOptions={{ headerShown: false}}>
      {user ? (
        <>
          <Stack.Screen name='(tabs)' />
          <Stack.Screen name='questionnare' />
          <Stack.Screen name='results' />
          <Stack.Screen name='detail' />
          <Stack.Screen name='career' />
        </>
      ) : (
        <>
          <Stack.Screen name='sign-in' />
          <Stack.Screen name='sign-up' />
        </>
      )}
    </Stack>
  );
}

export default function RootLayout(){
  return (
    <AuthProvider>
      <RootLayoutNav />
    </AuthProvider>
  );
}