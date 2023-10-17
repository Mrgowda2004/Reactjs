import React, { useState, useEffect } from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, Card, Paper, AppBar, Toolbar } from '@mui/material';
import Container from '@mui/material/Container';
import SchoolIcon from '@mui/icons-material/School';



export default function Coursecard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortDirection] = useState('asc');
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from MongoDB or your JSON file here
    // For example, if you're using fetch to get data from a JSON file
    // Replace this with your actual data fetching logic
    fetch('http://127.0.0.1:5000/courses') // Replace with your API endpoint or JSON file path
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData); // Store the data in the state
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array to fetch data once on component mount

  const sortedData = [...data].sort((a, b) => {
    if (sortDirection === 'asc') {
      return a.title.localeCompare(b.title);
    } else {
      return b.title.localeCompare(a.title);
    }
  });

  const filteredData = sortedData.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <header>
     <AppBar position='relative'>
        <Toolbar>
          <SchoolIcon/>
          <Typography variant='h6'sx={{alignContent:"center"}}>Course Suggestions:</Typography>
        </Toolbar>
      </AppBar>
    
    <Paper>
      <Container maxWidth="lg">
      <div style={{ textAlign:"center", marginTop: "5px",marginBottom:"20px" }}>
        
        
          <input
            type="text"
            placeholder="Search your course"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{padding: "10px",borderRadius:"50px"}}
          />
        </div>
        
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={{ xs: 2, md: 3 }}
        >
          {filteredData.map((card) => (
            <Grid
              item
              key={card.id}
              xs={12}
              sm={8}
              ms={4}
              lg={4}
              style={{ display: "inline-table", padding: "10px", marginBottom: "30px", marginTop: "30px" }}
            >
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="180"
                  image={card.img}
                  style={{ borderRadius: "20px" }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.content}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div" sx={{ color: 'blue' }}>
                    {card.Mode}
                  </Typography>
                  <Typography gutterBottom variant="h7" component="div" sx={{ color: 'green' }}>
                    {card.duration}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant='contained' size='medium'>
                    Take course
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Paper>
    </header>
  );
}

