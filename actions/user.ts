'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function getUser() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('session_token');
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/verify-token?token=${token?.value}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await result.json();
    console.log(data);

    const userResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/${data.data.sub}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const userData = await userResponse.json();
    console.log('userData', userData);
    return userData.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    return null;
  }
}
