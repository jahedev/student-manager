import axios from "axios"

import { GOT_ALL_STUDENTS, GOT_STUDENT_BY_ID } from "./actionTypes"

const initialState = {
  students: [],
  student: {},
}

// GET -> Read all

const gotAllStudents = (data) => {
  return {
    type: GOT_ALL_STUDENTS,
    data,
  }
}

export const getAllStudents = () => {
  return async (dispatch) => {
    try {
      // http:// resolves CORS error, thank you stack overflow
      const response = await axios.get("http://localhost:8080/api/students/")
      console.log("getAllStudents axios response:", response)
      dispatch(gotAllStudents(response.data))
    } catch (error) {
      console.error(error)
    }
  }
}

// GET -> Read by ID

const gotStudentById = (data) => {
  return {
    type: GOT_STUDENT_BY_ID,
    data,
  }
}

export const getStudentById = (searchStudentId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/students/${searchStudentId}`
      )
      console.log("getStudentById axios response:", response)
      dispatch(gotStudentById(response.data))
    } catch (error) {
      console.error(error)
    }
  }
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_ALL_STUDENTS:
      return {
        ...state,
        students: action.data,
      }
    case GOT_STUDENT_BY_ID:
      return {
        ...state,
        student: action.data,
      }
    default:
      return state
  }
}

export default rootReducer
