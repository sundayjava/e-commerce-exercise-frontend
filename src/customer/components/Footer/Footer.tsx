import { Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className=" pb-5" variant="h6">
            Company
          </Typography>
          <div>
            <Button className="pb-5" sx={{ color: "white" }} variant="text">
              About
            </Button>
          </div>
          <div>
            <Button className="pb-5" sx={{ color: "white" }} variant="text">
              Blog
            </Button>
          </div>
          <div>
            <Button className="pb-5" sx={{ color: "white" }} variant="text">
              Press
            </Button>
          </div>
          <div>
            <Button className="pb-5" sx={{ color: "white" }} variant="text">
              Jobs
            </Button>
          </div>
          <div>
            <Button className="pb-5" sx={{ color: "white" }} variant="text">
              Partners
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className=" pb-5" variant="h6">
            Solutions
          </Typography>
          <div>
            <Button className="pb-5" sx={{ color: "white" }} variant="text">
              Marketing
            </Button>
          </div>
          <div>
            <Button className="pb-5" sx={{ color: "white" }} variant="text">
              Analytics
            </Button>
          </div>
          <div>
            <Button className="pb-5" sx={{ color: "white" }} variant="text">
              Commerce
            </Button>
          </div>
          <div>
            <Button className="pb-5" sx={{ color: "white" }} variant="text">
              Insights
            </Button>
          </div>
          <div>
            <Button className="pb-5" sx={{ color: "white" }} variant="text">
              Support
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className=" pb-5" variant="h6">
            Documentation
          </Typography>
          <div>
            <Button className="pb-5" sx={{ color: "white" }} variant="text">
              Guides
            </Button>
          </div>
          <div>
            <Button className="pb-5" sx={{ color: "white" }} variant="text">
              API Status
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className=" pb-5" variant="h6">
            Legal
          </Typography>
          <div>
            <Button className="pb-5" sx={{ color: "white" }} variant="text">
              Claim
            </Button>
          </div>
          <div>
            <Button className="pb-5" sx={{ color: "white" }} variant="text">
              Privacy
            </Button>
          </div>
          <div>
            <Button className="pb-5" sx={{ color: "white" }} variant="text">
              Terms
            </Button>
          </div>
        </Grid>
        <Grid className="pt-20" item xs={12}>
          <Typography variant="body2" component="p" align="center">
            &copy; 2024 My Campany. All Rights Reserved.
          </Typography>
          <Typography variant="body2" component="p" align="center">
            Made with love by me
          </Typography>
          <Typography variant="body2" component="p" align="center">
            Icons made by
            <Link to="https://www.freepik.com" color="inherit">
              Freepik
            </Link>
            from
            <Link to="https://www.flaticon.com" color="inherit">
              www.flaticon.com
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
