import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { getOrders } from "../../state/Admin/Order/Action";
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
  AvatarGroup,
} from "@mui/material";

const OrderTableView = () => {
  const dispatch = useAppDispatch();
  const { adminOrder } = useAppSelector((state) => state);

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  return (
    <div className="p-5">
      <Card className="mt-2 bg-[#1b1b1b]">
        <CardHeader title="Recent Orders" />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell align="left">Title</TableCell>
                <TableCell align="left">ID</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {adminOrder.orders?.slice(0, 4).map((item: any) => (
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
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  );
};

export default OrderTableView;
