import axios, { AxiosError } from "axios";
import { AppDispatch } from "../store";
import {
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "./ActionType";

const registerRequest = () => ({ type: REGISTER_REQUEST });
const registerSuccess = (user: any) => ({
  type: REGISTER_SUCCESS,
  payload: user,
});
const registerFailure = (error: string) => ({
  type: REGISTER_FAILURE,
  payload: error,
});

const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginSuccess = (user: any) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});
const loginFailure = (error: string) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const register = (userData: any) => async (dispatch: AppDispatch) => {
  dispatch(registerRequest());
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/auth/signup`,
      userData
    );
    const user = response.data;

    if (user.jwt) {
      localStorage.setItem("jwt", user.jwt);
    }
    console.log("User ", user);
    dispatch(registerSuccess(user.jwt));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      dispatch(registerFailure((error as AxiosError).message));
    } else {
      dispatch(registerFailure("An error occurred " + error));
    }
  }
};

export const login = (userData: any) => async (dispatch: AppDispatch) => {
  dispatch(loginRequest());
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/auth/signin`,
      userData
    );
    const user = response.data;

    if (user.jwt) {
      localStorage.setItem("jwt", user.jwt);
    }
    console.log("User ", user);
    dispatch(loginSuccess(user.jwt));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      dispatch(loginFailure((error as AxiosError).message));
    } else {
      dispatch(loginFailure("An error occurred " + error));
    }
  }
};

const getUserRequest = () => ({ type: GET_USER_REQUEST });
const getUserSuccess = (user: any) => ({
  type: GET_USER_SUCCESS,
  payload: user,
});
const getUserFailure = (error: string) => ({
  type: GET_USER_FAILURE,
  payload: error,
});

export const getUser = (jwt: any) => async (dispatch: AppDispatch) => {
  dispatch(getUserRequest());
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/api/user/profile`,
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
    const user = response.data;
    console.log("User ", user);

    dispatch(getUserSuccess(user));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      dispatch(getUserFailure((error as AxiosError).message));
    } else {
      dispatch(getUserFailure("An error occurred " + error));
    }
  }
};

export const logout = () => async (dispatch: AppDispatch) => {
  localStorage.removeItem("token");
  dispatch({ type: LOGOUT, payload: null });
  dispatch({ type: GET_USER_SUCCESS, payload: null });
};
