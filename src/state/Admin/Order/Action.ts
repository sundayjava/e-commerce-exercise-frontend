import axios, { AxiosError } from "axios";
import { AppDispatch } from "../../store";
import {
  CANCELED_ORDER_FAILURE,
  CANCELED_ORDER_REQUEST,
  CANCELED_ORDER_SUCCESS,
  CONFIRMED_ORDER_FAILURE,
  CONFIRMED_ORDER_REQUEST,
  CONFIRMED_ORDER_SUCCESS,
  DELETE_ORDER_FAILURE,
  DELETE_ORDER_REQUEST,
  DELETE_ORDER_SUCCESS,
  DELIVERED_ORDER_FAILURE,
  DELIVERED_ORDER_REQUEST,
  DELIVERED_ORDER_SUCCESS,
  GET_ORDERS_FAILURE,
  GET_ORDERS_REQUEST,
  GET_ORDERS_SUCCESS,
  SHIP_ORDER_FAILURE,
  SHIP_ORDER_REQUEST,
  SHIP_ORDER_SUCCESS,
} from "./ActionType";
import { api } from "../../../config/appConfig";

export const getOrders = () => async (dispatch: AppDispatch) => {
  dispatch({ type: GET_ORDERS_REQUEST });
  try {
    const { data } = await api.get("/api/admin/order/");
    console.log("All Order from db = ", data);
    dispatch({ type: GET_ORDERS_SUCCESS, payload: data });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      dispatch({
        type: GET_ORDERS_FAILURE,
        payload: (error as AxiosError).message,
      });
    } else {
      dispatch({
        type: GET_ORDERS_FAILURE,
        payload: "An error occurred " + error,
      });
    }
  }
};

export const confirmOrders =
  (orderId: any) => async (dispatch: AppDispatch) => {
    dispatch({ type: CONFIRMED_ORDER_REQUEST });
    try {
      const { data } = await api.put(`/api/admin/order/${orderId}/confirmed`);
      console.log("Confirm order = ", data);
      dispatch({ type: CONFIRMED_ORDER_SUCCESS, payload: data });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        dispatch({
          type: CONFIRMED_ORDER_FAILURE,
          payload: (error as AxiosError).message,
        });
      } else {
        dispatch({
          type: CONFIRMED_ORDER_FAILURE,
          payload: "An error occurred " + error,
        });
      }
    }
  };

export const shipOrders = (orderId: any) => async (dispatch: AppDispatch) => {
  dispatch({ type: SHIP_ORDER_REQUEST });
  try {
    const { data } = await api.put(`/api/admin/order/${orderId}/ship`);
    console.log("Shipping order = ", data);
    dispatch({ type: SHIP_ORDER_SUCCESS, payload: data });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      dispatch({
        type: SHIP_ORDER_FAILURE,
        payload: (error as AxiosError).message,
      });
    } else {
      dispatch({
        type: SHIP_ORDER_FAILURE,
        payload: "An error occurred " + error,
      });
    }
  }
};

export const deliverOrders =
  (orderId: any) => async (dispatch: AppDispatch) => {
    dispatch({ type: DELIVERED_ORDER_REQUEST });
    try {
      const { data } = await api.put(`/api/admin/order/${orderId}/deliver`);
      console.log("Delivered order = ", data);
      dispatch({ type: DELIVERED_ORDER_SUCCESS, payload: data });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        dispatch({
          type: DELIVERED_ORDER_FAILURE,
          payload: (error as AxiosError).message,
        });
      } else {
        dispatch({
          type: DELIVERED_ORDER_FAILURE,
          payload: "An error occurred " + error,
        });
      }
    }
  };

export const cancelOrders = (orderId: any) => async (dispatch: AppDispatch) => {
  dispatch({ type: CANCELED_ORDER_REQUEST });
  try {
    const { data } = await api.put(`/api/admin/order/${orderId}/cancel`);
    console.log("Canceled order = ", data);
    dispatch({ type: CANCELED_ORDER_SUCCESS, payload: data });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      dispatch({
        type: CANCELED_ORDER_FAILURE,
        payload: (error as AxiosError).message,
      });
    } else {
      dispatch({
        type: CANCELED_ORDER_FAILURE,
        payload: "An error occurred " + error,
      });
    }
  }
};

export const deleteOrders = (orderId: any) => async (dispatch: AppDispatch) => {
  dispatch({ type: DELETE_ORDER_REQUEST });
  try {
    const { data } = await api.delete(`/api/admin/order/${orderId}/delete`);
    console.log("Deleted order = ", data);
    dispatch({ type: DELETE_ORDER_SUCCESS, payload: data });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      dispatch({
        type: DELETE_ORDER_FAILURE,
        payload: (error as AxiosError).message,
      });
    } else {
      dispatch({
        type: DELETE_ORDER_FAILURE,
        payload: "An error occurred " + error,
      });
    }
  }
};
