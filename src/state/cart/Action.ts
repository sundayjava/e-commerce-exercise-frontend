import axios, { AxiosError } from "axios";
import { AppDispatch } from "../store";
import {
  ADD_ITEM_TO_CART_FAILURE,
  ADD_ITEM_TO_CART_REQUEST,
  ADD_ITEM_TO_CART_SUCCESS,
  GET_CART_FAILURE,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  REMOVE_CART_ITEM_FAILURE,
  REMOVE_CART_ITEM_REQUEST,
  REMOVE_CART_ITEM_SUCCESS,
  UPDATE_CART_ITEM_FAILURE,
  UPDATE_CART_ITEM_REQUEST,
  UPDATE_CART_ITEM_SUCCESS,
} from "./ActionType";
import { api } from "../../config/appConfig";

export const getCartItem = () => async (dispatch: AppDispatch) => {
  dispatch({ type: GET_CART_REQUEST });

  try {
    const { data } = await api.get("/api/cart/");
    dispatch({ type: GET_CART_SUCCESS, payload: data });
    console.log("Gotten Item Cart ", data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      dispatch({
        type: GET_CART_FAILURE,
        payload: (error as AxiosError).message,
      });
    } else {
      dispatch({
        type: GET_CART_FAILURE,
        payload: "An error occurred " + error,
      });
    }
  }
};

export const addItemToCart =
  (reqData: any) => async (dispatch: AppDispatch) => {
    dispatch({ type: ADD_ITEM_TO_CART_REQUEST });

    try {
      const { data } = await api.post("/api/cart/add", reqData);
      dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: data });
      console.log("Cart Item: ", data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        dispatch({
          type: ADD_ITEM_TO_CART_FAILURE,
          payload: (error as AxiosError).message,
        });
      } else {
        dispatch({
          type: ADD_ITEM_TO_CART_FAILURE,
          payload: "An error occurred " + error,
        });
      }
    }
  };

export const removeCartItem =
  (cartItemId: any) => async (dispatch: AppDispatch) => {
    dispatch({ type: REMOVE_CART_ITEM_REQUEST });

    try {
      const { data } = await api.delete(`/api/cart_item/${cartItemId}`);
      dispatch({ type: REMOVE_CART_ITEM_SUCCESS, payload: cartItemId });
      console.log("deleted item : ",data)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        dispatch({
          type: REMOVE_CART_ITEM_FAILURE,
          payload: (error as AxiosError).message,
        });
      } else {
        dispatch({
          type: REMOVE_CART_ITEM_FAILURE,
          payload: "An error occurred " + error,
        });
      }
    }
  };

export const updateCartItem =
  (reqData: any) => async (dispatch: AppDispatch) => {
    dispatch({ type: UPDATE_CART_ITEM_REQUEST });

    try {
      const { data } = await api.put(
        `/api/cart_item/update/${reqData.cartItemId}`,
        reqData.data
      );
      dispatch({ type: UPDATE_CART_ITEM_SUCCESS, payload: data });
      console.log("Updated Item in cart ", data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        dispatch({
          type: UPDATE_CART_ITEM_FAILURE,
          payload: (error as AxiosError).message,
        });
      } else {
        dispatch({
          type: UPDATE_CART_ITEM_FAILURE,
          payload: "An error occurred " + error,
        });
      }
    }
  };
