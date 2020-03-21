import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import metallica from '../data/mettalica';
import 'materialize-css/dist/css/materialize.min.css'
import { grey } from '@material-ui/core/colors';
import metallicaData from '../data/mettalica';
const useStyles = makeStyles({
  root: {
    width: 'auto',
    marginTop:100,
    borderRadius:50,
    color : '#doihdi',
    backgroundColor: '#BFE0E6'
  },
  media: {
    height: 290,
    width:290,
    marginLeft:'auto',
    marginRight: 'auto', 
    borderRadius: 300,
    
  },
});

export default function MediaCard() {
  const classes = useStyles();
const nom= metallica.name
  return (
    <div>
   
    <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={metallicaData.picture.xl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5"  component="h2">
          {nom}
          </Typography>

          <Card>
          <CardContent>

          <Typography variant="body2" component="p" align="justify">
            {metallica.abstract}
          </Typography>
          </CardContent>

          </Card>
        </CardContent>
    </Card>
    
    </div>
  );
}