import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../state/hooks";
import { getOrderById } from "../../../state/order/Action";
import { updatePayment } from "../../../state/payment/Action";
import { Alert, AlertTitle, Grid } from "@mui/material";
import OrderTracker from "../Order/OrderTracker";
import AddressCard from "../AddressCard/AddressCard";

const PaymentSuccess = () => {
  const [paymentId, setPaymentId] = useState<string | null>("");
  const [referenceId, setReferenceId] = useState();
  const [paymentStatus, setPaymentStatus] = useState<string | null>("");
  const { orderId } = useParams();

  const dispatch = useAppDispatch();
  const { order } = useAppSelector((state) => state);

  useEffect(() => {
    const urlParam = new URLSearchParams(window.location.search);

    setPaymentId(urlParam.get("razorpay_payment_id"));
    setPaymentStatus(urlParam.get("razorpay_payment_link_status"));
  }, []);

  useEffect(() => {
    const data = {
      orderId,
      paymentId,
    };
    dispatch(getOrderById(orderId));
    dispatch(updatePayment(data));
  }, [orderId, paymentId]);

  return (
    <div className="px-2 lg:px-36">
      <div className="flex flex-col justify-center items-center">
        <Alert
          variant="filled"
          severity="success"
          sx={{ mb: 6, width: "fit-content" }}
        >
          <AlertTitle>Payment Success</AlertTitle>
          Congratulation, your Order Get Placed
        </Alert>
      </div>

      <OrderTracker activeStep={1} />
      <Grid container className="space-y-5 py-5 pt-20">
        {order.order?.orderItems.map((item: any) => (
          <Grid
            container
            item
            className=" shadow-xl rounded-md p-5"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              <div className="flex items-center">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top"
                  src="https://i.imgur.com/qNOjJje.jpeg"
                  alt="gbdihjkm"
                />
                <div className="ml-5 space-y-2">
                  <p>{item.product?.title}</p>
                  <div className=" opacity-50 text-xs font-semibold space-x-5">
                    <span>Color: {item?.product?.color}</span>
                    &nbsp;<span>Size: {item?.size}</span>
                  </div>
                  <p>Seller: {item?.product?.brand}</p>
                  <p>${item?.price}</p>
                </div>
              </div>
            </Grid>

            <Grid item>
              <AddressCard address={order.order?.shippingAddress} />
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PaymentSuccess;
