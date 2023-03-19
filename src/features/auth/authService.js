import axios from 'axios'

const URL = process.env.REACT_APP_SERVER_URL
const API_URL = '/api/users/'

// Register user
const register = async (userData) => {
  const response = await axios.post(URL+API_URL+ 'register', userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Login user
const login = async (userData) => {
  const response = await axios.post(URL+API_URL + 'login', userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Logout user
const logout = () => {
  localStorage.removeItem('user')
}

const authService = {
  register,
  logout,
  login,
}

export default authService
