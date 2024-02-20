import { useNavigate } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = (props: { product: any }) => {
  const navigate = useNavigate()
  return (
    <div onClick={()=>navigate(`/product/${5}`)} className="product-card w-[15rem] rounded-[10px] m-3 transition-all cursor-pointer">
      <div className="h-[20rem]">
        <img
          className="h-full w-full rounded-[2px] object-cover"
          src={props.product.images[0]}
          alt=""
        />
      </div>

      <div className="textPart bg-white p-3">
        <div>
          <p className="font-bold opacity-60">{props.product.brand}</p>
          <p className="">{props.product.title}</p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="font-semibold">${props.product.discountedPrice}</p>
          <p className="line-through opacity-50">${props.product.price}</p>
          <p className="text-green-600 font-semibold">
            {props.product.discountPercent}% off
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
