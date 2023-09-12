import React, { useState } from 'react';
import Container from '@mui/material/Container';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, Card, Paper } from '@mui/material';
import Data from './Data.json';

export default function Coursecard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortDirection, setSortDirection] = useState('asc'); // 'asc' for ascending, 'desc' for descending

  const toggleSortDirection = () => {
    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
  };

  const sortedData = [...Data].sort((a, b) => {
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
    <Paper>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          style={{ marginTop: "50px", fontSize: "30px", color: "blue" }}
        >
          Course Suggestions:
        </Typography>
        <div style={{ textAlign:"center", marginTop: "30px",marginBottom:"30px" }}>
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
  );
}

