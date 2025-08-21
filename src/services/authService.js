// In a real application, this would make API calls to a backend server
// For now, we'll simulate authentication with localStorage

const USER_KEY = 'amber_essence_user';

export const login = async (email, password) => {
  // Simulate API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // For demo purposes, accept any email with a password longer than 6 characters
      if (password.length >= 6) {
        const user = {
          id: 'user_' + Math.random().toString(36).substr(2, 9),
          email,
          name: email.split('@')[0],
          createdAt: new Date().toISOString(),
        };
        
        localStorage.setItem(USER_KEY, JSON.stringify(user));
        resolve(user);
      } else {
        reject(new Error('Invalid credentials'));
      }
    }, 800);
  });
};

export const register = async (userData) => {
  // Simulate API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!userData.email || !userData.password || !userData.name) {
        reject(new Error('All fields are required'));
        return;
      }
      
      if (userData.password.length < 6) {
        reject(new Error('Password must be at least 6 characters'));
        return;
      }
      
      const user = {
        id: 'user_' + Math.random().toString(36).substr(2, 9),
        email: userData.email,
        name: userData.name,
        createdAt: new Date().toISOString(),
      };
      
      localStorage.setItem(USER_KEY, JSON.stringify(user));
      resolve(user);
    }, 800);
  });
};

export const logout = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      localStorage.removeItem(USER_KEY);
      resolve();
    }, 300);
  });
};

export const getCurrentUser = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const userJson = localStorage.getItem(USER_KEY);
      if (userJson) {
        resolve(JSON.parse(userJson));
      } else {
        resolve(null);
      }
    }, 300);
  });
};