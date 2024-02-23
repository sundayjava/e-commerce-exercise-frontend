import axios, { AxiosError } from "axios";
import { api } from "../../config/appConfig";
import { AppDispatch } from "../store";
import {
  CREATE_PRODUCTS_FAILURE,
  CREATE_PRODUCTS_REQUEST,
  CREATE_PRODUCTS_SUCCESS,
  DELETE_PRODUCTS_FAILURE,
  DELETE_PRODUCTS_REQUEST,
  DELETE_PRODUCTS_SUCCESS,
  FIND_PRODUCTS_FAILURE,
  FIND_PRODUCTS_REQUEST,
  FIND_PRODUCTS_SUCCESS,
  FIND_PRODUCT_BY_ID_FAILURE,
  FIND_PRODUCT_BY_ID_REQUEST,
  FIND_PRODUCT_BY_ID_SUCCESS,
} from "./ActionType";

export const findProducts = (reqData: any) => async (dispatch: AppDispatch) => {
  dispatch({ type: FIND_PRODUCTS_REQUEST });
  const {
    color,
    sizes,
    minPrice,
    maxPrice,
    minDiscount,
    category,
    stock,
    sort,
    pageNumber,
    pageSize,
  } = reqData;

  try {
    const { data } = await api.get(
      `/api/products?color=${color}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`
    );

    console.log("Product: ", data);
    dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      dispatch({
        type: FIND_PRODUCTS_FAILURE,
        payload: (error as AxiosError).message,
      });
    } else {
      dispatch({
        type: FIND_PRODUCTS_FAILURE,
        payload: "An error occurred " + error,
      });
    }
  }
};

export const findProductsById =
  (reqData: any) => async (dispatch: AppDispatch) => {
    dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });
    const { productId } = reqData;

    try {
      const { data } = await api.get(`/api/products/id/${productId}`);

      console.log("Product: ", data);
      dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        dispatch({
          type: FIND_PRODUCT_BY_ID_FAILURE,
          payload: (error as AxiosError).message,
        });
      } else {
        dispatch({
          type: FIND_PRODUCT_BY_ID_FAILURE,
          payload: "An error occurred " + error,
        });
      }
    }
  };

export const createProduct =
  (product: any) => async (dispatch: AppDispatch) => {
    dispatch({ type: CREATE_PRODUCTS_REQUEST });
    try {
      const { data } = await api.post("/api/admin/products/", product);
      console.log("New products details: ", data);
      dispatch({ type: CREATE_PRODUCTS_SUCCESS, payload: data });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        dispatch({
          type: CREATE_PRODUCTS_FAILURE,
          payload: (error as AxiosError).message,
        });
      } else {
        dispatch({
          type: CREATE_PRODUCTS_FAILURE,
          payload: "An error occurred " + error,
        });
      }
    }
  };

export const deleteProduct =
  (productId: any) => async (dispatch: AppDispatch) => {
    dispatch({ type: DELETE_PRODUCTS_REQUEST });
    try {
      const { data } = await api.delete(
        `/api/admin/products/${productId}/delete`
      );
      console.log("Product deleted: bye= ", data);
      dispatch({ type: DELETE_PRODUCTS_SUCCESS, payload: productId });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        dispatch({
          type: DELETE_PRODUCTS_FAILURE,
          payload: (error as AxiosError).message,
        });
      } else {
        dispatch({
          type: DELETE_PRODUCTS_FAILURE,
          payload: "An error occurred " + error,
        });
      }
    }
  };
