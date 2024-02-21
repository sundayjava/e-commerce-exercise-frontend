import axios, { AxiosError } from "axios";
import { AppDispatch } from "../store";
import {
  CREATE_ORDER_FAILURE,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  GET_ORDER_BY_ID_FAILURE,
  GET_ORDER_BY_ID_REQUEST,
  GET_ORDER_BY_ID_SUCCESS,
} from "./ActionType";
import { api } from "../../config/appConfig";

export const createOrder = (reqData: any) => async (dispatch: AppDispatch) => {
  dispatch({ type: CREATE_ORDER_REQUEST });
  try {
    const { data } = await api.post("/api/order/add", reqData.shippingAddress);
    if (data.id) {
      reqData.navigate({ search: `step=2&order_id=${data.id}` });
    }
    console.log("Created order - ", data);
    dispatch({ type: CREATE_ORDER_SUCCESS, payload: data });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      dispatch({
        type: CREATE_ORDER_FAILURE,
        payload: (error as AxiosError).message,
      });
    } else {
      dispatch({
        type: CREATE_ORDER_FAILURE,
        payload: "An error occurred " + error,
      });
    }
  }
};

export const getOrderById = (order_id: any) => async (dispatch: AppDispatch) => {
  dispatch({ type: GET_ORDER_BY_ID_REQUEST });
  try {
    const { data } = await api.get(`/api/order/${order_id}`);
    console.log("order by id - ", data);
    dispatch({ type: GET_ORDER_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      dispatch({
        type: GET_ORDER_BY_ID_FAILURE,
        payload: (error as AxiosError).message,
      });
    } else {
      dispatch({
        type: GET_ORDER_BY_ID_FAILURE,
        payload: "An error occurred " + error,
      });
    }
  }
};
