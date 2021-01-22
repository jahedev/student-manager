import axios from "axios"

import { GOT_ALL_STUDENTS, GOT_STUDENT_BY_ID } from "./actionTypes"

const initialState = {
  students: [],
}

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

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_ALL_STUDENTS:
      return {
        ...state,
        students: action.data,
      }
    default:
      return state
  }
}

export default rootReducer
