import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const useStyles = {
  card: {
    paddingTop: 10,
    paddingBottom: 25,
    paddingLeft: 20,
    paddingRight: 20,
    boxShadow: "none",
  },
  cardWrapper: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
};

const card = (
  <React.Fragment>
    <CardContent>
      
      <Typography variant="body1" component="div">
        Assignments
      </Typography>
      <hr />

      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        Content
      </Typography>
    </CardContent>
   
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275, margin: 2,  boxShadow:2 }}>
      <Card className={useStyles .card} variant="outlined">{card}</Card>
    </Box>
  );
}
