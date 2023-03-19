import axios from 'axios'

const URL = process.env.REACT_APP_SERVER_URL
const API_URL = '/api/goals/'

// Create new goal
const createGoal = async (goalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(URL+API_URL, goalData, config)
  return response.data
}

// Get user goals
const getGoals = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(URL+API_URL, config)

  return response.data
}

// Delete user goal
const deleteGoal = async (goalId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(URL+API_URL + goalId, config)

  return response.data
}

const goalService = {
  createGoal,
  getGoals,
  deleteGoal,
}

export default goalService
