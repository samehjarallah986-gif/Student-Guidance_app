import { Stack, useRouter } from 'expo-router';
import { useEffect } from 'react';
import { AuthProvider, useAuth } from '../hooks/AuthContext';

function RootLayoutNav() {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoading) return;

    if (user) {
      router.replace('/questionnare');
    } else {
      router.replace('/sign-in');
    }
  }, [user, isLoading]);

  return (
    <Stack screenOptions={{ headerShown: false}}>
      <Stack.Screen name='sign-in' />
      <Stack.Screen name='sign-up' />
      <Stack.Screen name='(tabs)' />
      <Stack.Screen name='questionnare' />
      <Stack.Screen
        name='results'
        options={{ headerShown: true, title: 'Search Results' }}
      />
      <Stack.Screen
        name='detail'
        options={{ headerShown: true, title: 'Activity Details' }}
      />
      <Stack.Screen
        name='career'
        options={{ headerShown: true, title: 'Career Details' }}
      />
      <Stack.Screen
        name='personal-details'
        options={{ headerShown: true, title: 'Personal Information' }}
      />
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