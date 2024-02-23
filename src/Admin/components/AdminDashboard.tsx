import { Grid } from "@mui/material";
import Achievement from "./AdminComponent/Achievement";
import MonthlyOverview from "./AdminComponent/MonthlyOverview";
import OrderTableView from "../view/OrderTableView";
import ProducttableView from "../view/ProductTableView";

const AdminDashboard = () => {
  return (
    <div className="p-10">
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <div className=" shadow-lg shadow-gray-600">
            <Achievement />
          </div>
        </Grid>
        <Grid item xs={12} md={8}>
          <div className=" shadow-lg shadow-gray-600">
            <MonthlyOverview />
          </div>
        </Grid>
        <Grid xs={12} item md={6}>
          <div className=" shadow-lg shadow-gray-600">
            <OrderTableView />
          </div>
        </Grid>
        <Grid xs={12} item md={6}>
          <div className=" shadow-lg shadow-gray-600">
            <ProducttableView />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default AdminDashboard;
