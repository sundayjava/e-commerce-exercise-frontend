import { Grid } from "@mui/material";

const OrderCard = () => {
  return (
    <div>
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://i.imgur.com/qNOjJje.jpeg"
              alt="normlates"
            />
            <div className="ml-5 space-y-2">
              <p className="">Futuristic Holographic Soccer Cleats</p>
              <p className="opacity-50 text-xs font-semibold">Size: M</p>
              <p className="opacity-50 text-xs font-semibold">Color: Black</p>
            </div>
          </div>
        </Grid>

        <Grid item xs={2}>
          <p>$1099</p>
        </Grid>

        <Grid item xs={4}>
          {true && (
            <p>
              <span>Delivered On March 03</span>
            </p>
          )}
          {false && (
            <p>
              <span>Expected Delivery On Mar 03</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
