import axios, { AxiosError } from "axios";
import { api } from "../../config/appConfig";
import { AppDispatch } from "../store";
import {
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
