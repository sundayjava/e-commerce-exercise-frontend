import {
  AccountCircleOutlined,
  AddBoxOutlined,
  Dashboard,
  HomeMini,
  ListOutlined,
  People,
} from "@mui/icons-material";
import {
  Box,
  CssBaseline,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import CreateProductForm from "./components/CreateProductForm";
import Producttable from "./components/Producttable";
import OrdersTable from "./components/OrdersTable";
import CustomersTable from "./components/CustomersTable";
import AdminDashboard from "./components/AdminDashboard";

const menu = [
  { name: "Dashboard", path: "/admin", icon: <Dashboard /> },
  { name: "Products", path: "/admin/products", icon: <HomeMini /> },
  { name: "Customers", path: "/admin/customers", icon: <People /> },
  { name: "Orders", path: "/admin/orders", icon: <ListOutlined /> },
  {
    name: "AddProduct",
    path: "/admin/products/create",
    icon: <AddBoxOutlined />,
  },
];

const Admin = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [sideBarVisible, setSideBarVisible] = useState(false);
  const navigate = useNavigate();

  const drawer = (
    <Box
      sx={{
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <>
        {/* {isLargeScreen && <Toolbar />} */}
        <List>
          {menu.map((item, index) => (
            <ListItem
              key={item.name}
              disablePadding
              onClick={() => navigate(item.path)}
            >
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText>{item.name}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleOutlined />
            </ListItemIcon>
            <ListItemText>Account</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
      <div className="flex h-screen relative">
        <CssBaseline />
        <div className="w-[15%] h-full fixed top-0 shadow-lg shadow-gray-600">{drawer}</div>
        <div className="w-[85%] ml-[15%]">
          <Routes>
            <Route path="/" element={<AdminDashboard />} />
            <Route path="/products" element={<Producttable />} />
            <Route path="/orders" element={<OrdersTable />} />
            <Route path="/customers" element={<CustomersTable />} />
            <Route path="/products/create" element={<CreateProductForm />} />
          </Routes>
        </div>
      </div>
  );
};

export default Admin;
