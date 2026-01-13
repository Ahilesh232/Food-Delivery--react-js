let users = [];

export const registerUser = (email, password) => {
  const userExists = users.some(user => user.email === email);
  if (userExists) {
    throw new Error('User already exists');
  }
  users.push({ email, password });
};

export const authenticateUser = (email, password) => {
  return users.some(user => user.email === email && user.password === password);
};
