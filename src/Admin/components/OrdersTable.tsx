import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import {
  confirmOrders,
  deleteOrders,
  deliverOrders,
  getOrders,
  shipOrders,
} from "../../state/Admin/Order/Action";
import {
  Card,
  CardHeader,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Avatar,
  Button,
  AvatarGroup,
  Menu,
  MenuItem,
} from "@mui/material";
import React from "react";

const OrdersTable = () => {
  const dispatch = useAppDispatch();
  const { adminOrder } = useAppSelector((state) => state);
  const [anchorEl, setAnchorEl] = React.useState([]);

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    index: any
  ) => {
    const newAnchorElArray: any = [...anchorEl];
    newAnchorElArray[index] = event.currentTarget;
    setAnchorEl(newAnchorElArray);
  };
  const handleClose = (index: any) => {
    const newAnchorElArray: any = [...anchorEl];
    newAnchorElArray[index] = null;
    setAnchorEl(newAnchorElArray);
  };

  useEffect(() => {
    dispatch(getOrders());
  }, [
    adminOrder.shipped,
    adminOrder.delivered,
    adminOrder.confirmed,
    adminOrder.deletedOrder,
  ]);

  const handleShipOrder = (orderId: any, index: any) => {
    dispatch(shipOrders(orderId));
    handleClose(index);
  };

  const handleConfirmedOrder = (orderId: any, index: any) => {
    dispatch(confirmOrders(orderId));
    handleClose(index);
  };

  const handleDeliveredOrder = (orderId: any, index: any) => {
    dispatch(deliverOrders(orderId));
    handleClose(index);
  };

  const handleDeletedOrder = (orderId: any) => {
    dispatch(deleteOrders(orderId));
  };

  return (
    <div className="p-5">
      <Card className="mt-2 bg-[#1b1b1b]">
        <CardHeader title="All Orders" />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell align="left">Title</TableCell>
                <TableCell align="left">ID</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="left">Update</TableCell>
                <TableCell align="left">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {adminOrder.orders?.map((item: any, index: any) => (
                <TableRow
                  key={item.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">
                    <AvatarGroup sx={{ justifyContent: "start" }}>
                      {item?.orderItems.map((orderItem: any) => (
                        <Avatar src={orderItem?.product?.imageUrl} />
                      ))}
                    </AvatarGroup>
                  </TableCell>
                  <TableCell align="left" scope="row">
                    {item?.orderItems.map((orderItem: any) => (
                      <p>{orderItem?.product?.title}</p>
                    ))}
                  </TableCell>
                  <TableCell align="left">{item.id}</TableCell>
                  <TableCell align="left">{item.totalPrice}</TableCell>
                  <TableCell align="left">
                    <span
                      className={`
                  ${
                    item.orderStatus === "CONFIRMED"
                      ? "text-yellow-600 font-black"
                      : item.orderStatus === "SHIPPED"
                      ? "text-blue-700 font-black"
                      : item.orderStatus === "DELIVERED"
                      ? "text-green-800 font-black"
                      : "text-red-700"
                  }
                  `}
                    >
                      {item.orderStatus}
                    </span>
                  </TableCell>
                  <TableCell align="left">
                    <Button
                      id="basic-button"
                      aria-haspopup="true"
                      onClick={(event) => handleClick(event, index)}
                      aria-controls={`basic-menu-${item.id}`}
                      aria-expanded={Boolean(anchorEl[index])}
                    >
                      Status
                    </Button>
                    <Menu
                      id={`basic-menu-${item.id}`}
                      anchorEl={anchorEl[index]}
                      open={Boolean(anchorEl[index])}
                      onClose={() => handleClose(index)}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      <MenuItem
                        onClick={() => handleConfirmedOrder(item.id, index)}
                      >
                        Confirmed Order
                      </MenuItem>
                      <MenuItem onClick={() => handleShipOrder(item.id, index)}>
                        Shipped Order
                      </MenuItem>
                      <MenuItem
                        onClick={() => handleDeliveredOrder(item.id, index)}
                      >
                        Delivered Order
                      </MenuItem>
                    </Menu>
                  </TableCell>
                  <TableCell align="left">
                    <Button
                      onClick={() => handleDeletedOrder(item.id)}
                      variant="outlined"
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  );
};

export default OrdersTable;
