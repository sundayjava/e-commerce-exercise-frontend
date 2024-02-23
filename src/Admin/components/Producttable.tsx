import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Avatar,
  Button,
  Card,
  CardHeader,
} from "@mui/material";
import { useEffect } from "react";
import { deleteProduct, findProducts } from "../../state/product/Action";
import { useAppDispatch, useAppSelector } from "../../state/hooks";

const Producttable = () => {
  const dispatch = useAppDispatch();
  const { product } = useAppSelector((state) => state);
  console.log(product.products);

  const handleProductDelete = (productId:number) => {
    dispatch(deleteProduct(productId))
  }

  useEffect(() => {
    const data = {
      category: "",
      color: [],
      sizes: [],
      minPrice: 0,
      maxPrice: 10000,
      minDiscount: 0,
      sort: "price_low",
      pageNumber: 0,
      pageSize: 10,
      stock: "",
    };

    dispatch(findProducts(data));
  }, [product.deletedProduct]);

  return (
    <div className="p-5">
      <Card className="mt-2 bg-[#1b1b1b]">
        <CardHeader title="All Products"/>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell align="left">Title</TableCell>
              <TableCell align="left">Brand</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="left">Quantity</TableCell>
              <TableCell align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {product.products?.content?.map((row: any) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="right">
                  <Avatar src={row.imageUrl} />
                </TableCell>
                <TableCell align="left" scope="row">
                  {row.title}
                </TableCell>
                <TableCell align="left">{row.brand}</TableCell>
                <TableCell align="left">{row.price}</TableCell>
                <TableCell align="left">{row.quantity}</TableCell>
                <TableCell align="left"><Button onClick={()=>handleProductDelete(row.id)} variant="outlined">Delete</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Card>
    </div>
  );
};

export default Producttable;
