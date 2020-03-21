import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import metallicaData from '../data/mettalica';

const useStyles = makeStyles({
  table: {
    
  },
  root: {
    width: 'auto',
    marginTop:100,
    borderRadius:30,
    backgroundColor:'#E6C4BE',
    height:820,
  },
  media: {
    height: 290,
    width:290,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function DenseTable() {
  const classes = useStyles();

  const location = metallicaData.locationInfo.map((value,index) => {
    let string ="";
    if(index < metallicaData.locationInfo.length - 1){
      string = string + value + " - ";
    }
    else{string = string + value;}
    return string;
  });

  const genres = metallicaData.genres.map((value,index) => {
    let string ="";
    if(index < metallicaData.genres.length - 1){
      string = string + value + " - ";
    }
    else{string = string + value;}
    return string;
  });

  const genresd = metallicaData.dbp_genre.map((value,index) => {
    let string ="";
    if(index < metallicaData.dbp_genre.length - 1){
      string = string + value + " - ";
    }
    else{string = string + value;}
    return string;
  });

  const labels = metallicaData.labels.map((value,index) => {
    let string ="";
    if(index < metallicaData.labels.length - 1){
      string = string + value + " - ";
    }
    else{string = string + value;}
    return string;
  });

  const labelsd = metallicaData.recordLabel.map((value,index) => {
    let string ="";
    if(index < metallicaData.recordLabel.length - 1){
      string = string + value + " - ";
    }
    else{string = string + value;}
    return string;
  });

  const artisteA = metallicaData.associatedMusicalArtist.map((value,index) => {
    let string ="";
    if(index < metallicaData.associatedMusicalArtist.length - 1){
      string = string + value + " - ";
    }
    else{string = string + value;}
    return string;
  });

  return (
    
    <Card className={classes.root}>
        <h6>Fiche du groupe</h6>
        <CardContent>
              <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell>Anniversaire : {metallicaData.lifeSpan.begin}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Location : {location}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Genres : {genres}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>GenresDBP : {genresd}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Label : {labels}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>LabelDBP : {labelsd}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Fans deezer : {metallicaData.deezerFans}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Artistes Associés : {artisteA}</TableCell>
                </TableRow>
              </TableHead>
            </Table>
          </TableContainer>
        </CardContent>
        <h6>Membres du groupes</h6>
        <CardContent>
              <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
              <TableHead>
                {metallicaData.members.map(value => (
                <TableRow key={value.id_member_musicbrainz}>
                  <TableCell> {value.name}</TableCell>
                </TableRow>
                              
                ))}
                </TableHead>
            </Table>
          </TableContainer>
        </CardContent>
    </Card>
  );
}