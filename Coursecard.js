import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'
import { Paper } from '@mui/material';
import { styled } from '@mui/system';


export default function Coursecard() {
  return (
    <Paper sx={{padding: '32px'}}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://th.bing.com/th/id/OIP.QFFxI9pdItMf6DPUpFKoDgHaEK?w=278&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Machine Learning Fundamentals
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Learn the basics of machine learning algorithms and concepts.
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
         online
        </Typography>
        <Typography gutterBottom variant="h7" component="div">
         Duration:6 weeks
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Take course</Button>
      </CardActions>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://th.bing.com/th/id/OIP.mA_jHGJb_mjRmSZ7ErwMrwHaEj?w=279&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Advanced Data Analysis
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Master advanced techniques for data analysis and visualization.
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
         online
        </Typography>
        <Typography gutterBottom variant="h7" component="div">
         Duration:8 weeks
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Take course</Button>
      </CardActions>
    </Card>
    </Paper>
  );
}