import {
  AddCircleOutlineOutlined,
  RemoveCircleOutlineRounded,
} from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import { useAppDispatch } from "../../../state/hooks";
import { removeCartItem, updateCartItem } from "../../../state/cart/Action";

const CartItem = (props: { cartItem: any }) => {
  const dispatch = useAppDispatch();

  const handleUpdateCartItem = (num: number) => {
    const data = {
      data: {
        quantity: props.cartItem.quantity + num,
      },
      cartItemId: props.cartItem?.id,
    };
    dispatch(updateCartItem(data));
  };

  const handleRemoveCartItem = () => {
    dispatch(removeCartItem(props.cartItem?.id));
  };

  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src={props.cartItem?.product?.imageUrl}
            alt=""
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">{props.cartItem?.product?.title}</p>
          <p className=" opacity-70">
            Size: {props.cartItem?.size}, {props.cartItem?.product?.color}
          </p>
          <p className=" opacity-70 mt-2">
            Seller: {props.cartItem?.product?.brand}
          </p>
          <div className="flex space-x-5 items-center text-gray-900 pt-6">
            <p className="font-semibold">${props.cartItem?.price}</p>
            <p className="opacity-50 line-through">
              ${props.cartItem?.discountedPrice}
            </p>
            <p className="text-green-600 font-semibold">
              {props.cartItem?.product?.discountPercent}% off
            </p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton
            onClick={() => handleUpdateCartItem(-1)}
            disabled={props.cartItem?.quantity <= 1}
          >
            <RemoveCircleOutlineRounded />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm">{props.cartItem?.quantity}</span>
          <IconButton
            onClick={() => handleUpdateCartItem(1)}
            sx={{ color: "rgb(145, 85, 253)" }}
          >
            <AddCircleOutlineOutlined />
          </IconButton>
        </div>

        <div>
          <Button
            onClick={handleRemoveCartItem}
            sx={{ color: "rgb(145, 85, 253)" }}
          >
            remove
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
