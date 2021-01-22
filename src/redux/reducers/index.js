import axios from "axios";

import {
  GOT_ALL_STUDENTS,
  GOT_STUDENT_BY_ID,
  CREATED_STUDENT,
  GOT_ALL_CAMPUSES,
  GOT_CAMPUS_BY_ID,
  CREATED_CAMPUS,
} from "./actionTypes";

// better way to import all these?

const initialState = {
  students: [],
  student: {},
  campuses: [],
  campus: {},
};

const gotAllStudents = (data) => {
  return {
    type: GOT_ALL_STUDENTS,
    data,
  };
};

export const getAllStudents = () => {
  return async (dispatch) => {
    try {
      // http:// resolves CORS error, thank you stack overflow
      const response = await axios.get("http://localhost:8080/api/students/");
      console.log("getAllStudents axios response:", response);
      dispatch(gotAllStudents(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

const gotStudentByID = (data) => {
  return {
    type: GOT_STUDENT_BY_ID,
    data,
  };
};

export const getStudentByID = (id) => {
  return async (dispatch) => {
    try {
      // http:// resolves CORS error, thank you stack overflow

      console.log("getStudentByID axios response:", response);
      // dispatch(gotAllStudents(response.data));
      const response = await axios.get(`c`);
      dispatch(gotStudentByID(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_ALL_STUDENTS:
      return {
        ...state,
        students: action.data,
      };
    default:
      return state;
  }
};

export default rootReducer;
