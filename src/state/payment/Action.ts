import axios, { AxiosError } from "axios";
import { api } from "../../config/appConfig";
import { AppDispatch } from "../store";
import {
  CREATE_PAYMENT_FAILURE,
  CREATE_PAYMENT_REQUEST,
  CREATE_PAYMENT_SUCCESS,
  UPDATE_PAYMENT_FAILURE,
  UPDATE_PAYMENT_REQUEST,
  UPDATE_PAYMENT_SUCCESS,
} from "./ActionType";

export const createPayment =
  (orderId: any) => async (dispatch: AppDispatch) => {
    dispatch({ type: CREATE_PAYMENT_REQUEST });

    try {
      const { data } = await api.post(`/api/payment/${orderId}`);

      if (data.payment_link_url) {
        window.location.href = data.payment_link_url;
      }
      console.log("Payment data: ", data);
      dispatch({ type: CREATE_PAYMENT_SUCCESS });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        dispatch({
          type: CREATE_PAYMENT_FAILURE,
          payload: (error as AxiosError).message,
        });
      } else {
        dispatch({
          type: CREATE_PAYMENT_FAILURE,
          payload: "An error occurred " + error,
        });
      }
    }
  };

export const updatePayment =
  (reqData: any) => async (dispatch: AppDispatch) => {
    dispatch({ type: UPDATE_PAYMENT_REQUEST });

    try {
      const { data } = await api.get(`/api/payment?payment_id=${reqData.paymentId}&order_id=${reqData.orderId}`);

      console.log("Update Payment data: ", data);
      dispatch({ type: UPDATE_PAYMENT_SUCCESS });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        dispatch({
          type: UPDATE_PAYMENT_FAILURE,
          payload: (error as AxiosError).message,
        });
      } else {
        dispatch({
          type: UPDATE_PAYMENT_FAILURE,
          payload: "An error occurred " + error,
        });
      }
    }
  };
