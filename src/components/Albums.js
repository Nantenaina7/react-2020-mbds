import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import metallicaData from '../data/mettalica';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

const useStyles = makeStyles({
  table: {
    
  },
  root: {
    width: 'auto',
    marginTop:10,
    borderRadius:10,
    backgroundColor: '#BCCBE6'
  },
  media: {
    height: 290,
    width:290,
  },
  root2: {
    width: '100%',
    maxWidth: 360,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 128,
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
});


export default function Albums() {
  const classes = useStyles();



  return (
      <React.Fragment
      >
    <div className="row">
        {metallicaData.albums.map(value => (
            <div className="col s6">
            <Card className={classes.root}>
                <h6>{value.title}</h6>
                <CardContent>
                    <div className="row">
                        <div className="col s4">
                            <img src={value.cover?.xl} width={128} height={128}></img>
                        </div>
                        <div className="col s8">
                            <List height="128" className={classes.root2}>
                                {value.songs.map((song,index) => (
                                    <ListItem>
                                        <ListItemText>{index+1}- {song.title}</ListItemText>
                                    </ListItem>
                                ))}
                            </List>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
        ))}
    </div>
    </React.Fragment>
  );
}