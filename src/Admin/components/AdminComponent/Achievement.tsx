import { Button, Card, CardContent, Typography, styled } from "@mui/material";

const TriangleImg = styled("img")({
  right: 0,
  bottom: 0,
  height: 170,
  position: "absolute",
});

const TrophyImg = styled("img")({
  right: 36,
  bottom: 36,
  height: 98,
  position: "absolute",
});

const Achievement = () => {
  return (
    <Card sx={{ position: "relative",  }}>
      <CardContent>
        <Typography variant="h6" sx={{ letterSpacing: ".25px" }}>
          Shop With David
        </Typography>
        <Typography variant="body2">Congratulations 😘</Typography>
        <Typography variant="h5" sx={{my:3.5}}>420.8K</Typography>
        <Button size="small" variant="contained">
          View Sales
        </Button>
        <TriangleImg src=""></TriangleImg>
        <TrophyImg src="https://th.bing.com/th/id/R.76a37b544e81e0751e9e2b27800c75c2?rik=lpYAmAqWBWfvOw&riu=http%3a%2f%2fclipart-library.com%2fimage_gallery%2fn777852.png&ehk=NDZu%2ftHjdGbdXniiwcWbOS190lXESCVw8VdnmQNI4Tk%3d&risl=&pid=ImgRaw&r=0" />
      </CardContent>
    </Card>
  );
};

export default Achievement;
