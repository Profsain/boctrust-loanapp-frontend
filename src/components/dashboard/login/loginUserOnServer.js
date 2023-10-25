const loginUserOnServer = async (username, password) => {
  const loginData = {
    username: username,
    password: password,
  };

  try {
    const response = await fetch('http://localhost:3030/api/admin/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error logging in:', error);
    return { success: false, error: 'Login failed' };
  }
}

export default loginUserOnServer;