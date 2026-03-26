import { apiClient } from './client';

export const getUserDetailByEmail = async (email: string) => {
  return apiClient.get('/getUserDetailByEmail', {
    params: { email },
  });
};