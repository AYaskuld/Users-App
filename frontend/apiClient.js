import axios from 'axios';

export function setupApiClient(initialBaseUrl) {
  const client = axios.create({
    baseURL: initialBaseUrl,
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
    }
  });

  return {
    async getUser(name) {
      try {
        const response = await client.get(`/getuser?name=${encodeURIComponent(name)}`);
        return { success: true, data: response.data };
      } catch (error) {
        return { 
          success: false, 
          error: error.response?.data?.detail || error.message || 'Failed to get user'
        };
      }
    },

    async createUser(name) {
      try {
        const response = await client.post('/createuser', { name });
        return { success: true, data: response.data };
      } catch (error) {
        return { 
          success: false, 
          error: error.response?.data?.detail || error.message || 'Failed to create user'
        };
      }
    },

    async deleteUser(name) {
      try {
        const response = await client.delete('/deleteuser', { data: { name } });
        return { success: true, data: response.data };
      } catch (error) {
        return { 
          success: false, 
          error: error.response?.data?.detail || error.message || 'Failed to delete user'
        };
      }
    },

    async checkHealth() {
      try {
        const response = await client.get('/health');
        return { success: true, data: response.data };
      } catch (error) {
        return { 
          success: false, 
          error: error.response?.data?.detail || error.message || 'Service unavailable'
        };
      }
    }
  };
}