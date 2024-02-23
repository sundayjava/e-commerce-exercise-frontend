import {
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

const initState = {
  loading: false,
  confirmed: 0,
  delivered: 0,
  shipped: 0,
  deletedOrder:0,
  orders: [],
  error: "",
};

export const adminOrderReducer = (
  state = initState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case GET_ORDERS_REQUEST:
    case CONFIRMED_ORDER_REQUEST:
    case DELIVERED_ORDER_REQUEST:
    case DELETE_ORDER_REQUEST:
    case SHIP_ORDER_REQUEST:
      return { ...state, loading: true, error: "" };

    case GET_ORDERS_SUCCESS:
      return { ...state, loading: false, orders: action.payload, error: "" };

    case CONFIRMED_ORDER_SUCCESS:
      return { ...state, loading: false, confirmed: action.payload, error: "" };

    case DELIVERED_ORDER_SUCCESS:
      return { ...state, loading: false, delivered: action.payload, error: "" };

    case CANCELED_ORDER_SUCCESS:
      return { ...state, loading: false, canceled: action.payload, error: "" };

    case DELETE_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        deletedOrder: action.payload,
        error: "",
      };

    case SHIP_ORDER_SUCCESS:
      return { ...state, loading: false, shipped: action.payload, error: "" };

    case GET_ORDERS_FAILURE:
      return { orders: [], loading: false, error: action.payload };
    case CONFIRMED_ORDER_FAILURE:
    case DELIVERED_ORDER_FAILURE:
    case DELETE_ORDER_FAILURE:
    case SHIP_ORDER_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
