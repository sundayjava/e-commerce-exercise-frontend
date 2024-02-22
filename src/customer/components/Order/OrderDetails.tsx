import { Box, Grid } from "@mui/material";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { deepPurple } from "@mui/material/colors";
import { StarBorderOutlined } from "@mui/icons-material";

const OrderDetails = () => {
  return (
    <div className="lg:px-20 px-5">
      <div>
        <h1 className="font-bold text-xl py-10">Delivery Address</h1>
        <AddressCard address={undefined} />
      </div>
      <div className="py-20">
        <OrderTracker activeStep={2} />
      </div>

      <Grid container className=" space-y-5">
        {[1, 1, 1, 1].map((_item) => (
          <Grid
            item
            container
            className=" shadow-xl rounded-md p-5 border"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              <div className=" flex items-center space-x-4">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top"
                  src="https://i.imgur.com/qNOjJje.jpeg"
                  alt="normlates"
                />
                <div className=" space-y-2 ml-5">
                  <p className=" font-semibold">
                    Man Slim Mid Rise Black Jeans
                  </p>
                  <p className="space-x-5 opacity-5 text-xs font-semibold">
                    <span>Color : Pink</span>
                    <span>Size : M</span>
                  </p>
                  <p>Seller: linaria</p>
                  <p>$1099</p>
                </div>
              </div>
            </Grid>
            <Grid item>
              <Box sx={{ color: deepPurple[500] }}>
                <StarBorderOutlined
                  className="px-2"
                  sx={{ fontSize: "2rem" }}
                />
                <span>Rate & Review Product</span>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OrderDetails;
