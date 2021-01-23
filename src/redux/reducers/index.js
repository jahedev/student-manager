import axios from "axios"

import {
  GOT_ALL_STUDENTS,
  GOT_STUDENT_BY_ID,
  GOT_ALL_CAMPUSES,
  DELETED_STUDENT,
} from "./actionTypes"

const initialState = {
  students: [],
  student: "",
  campuses: [],
}

// GET -> Read all

const gotAllStudents = (data) => {
  return {
    type: GOT_ALL_STUDENTS,
    data,
  }
}

const gotAllCampuses = (data) => {
  return {
    type: GOT_ALL_CAMPUSES,
    data,
  }
}

export const getAllCampuses = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:8080/api/campuses/")
      console.log("getAllCampuses axios response", response)
      dispatch(gotAllCampuses(response.data))
    } catch (error) {
      console.error(error)
    }
  }
}
export const getAllStudents = () => {
  return async (dispatch) => {
    try {
      // http:// resolves CORS error, thank you stack overflow
      const response = await axios.get("http://localhost:8080/api/students/")
      console.log("getAllStudents axios response:", response)
      dispatch(gotAllStudents(response.data.students))
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
      dispatch(gotStudentById(response.data.student))
    } catch (error) {
      console.error(error)
    }
  }
}

// DELETE -> Delete by Id

const deletedStudent = (data) => {
  return {
    type: DELETED_STUDENT,
  }
}

export const deleteStudent = (deleteStudentId) => {
  return (dispatch) => {
    try {
      console.log("before axios.delete call, studentId:", deleteStudentId)
      axios.delete(`http://localhost:8080/api/students/${deleteStudentId}`)
      dispatch(deletedStudent())
    } catch (error) {
      console.error(error)
    }
  }
}

const rootReducer = (state = initialState, action) => {
  console.log("action in root reducer:", action)
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
    case GOT_ALL_CAMPUSES:
      return {
        ...state,
        campuses: action.data,
      }
    case DELETED_STUDENT:
      return {
        ...state,
      }
    default:
      return state
  }
}

export default rootReducer
