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
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import MusicVideoIcon from '@material-ui/icons/MusicVideo';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';

const useStyles = makeStyles({
  root: {
  
   
    marginTop:105,
    borderRadius:70,
    height:820,
    
  },
  media: {
    height: 290,
    paddingLeft:50,
    width:50,
    marginLeft:100,
  },
});

export default function MediaCard() {
  const classes = useStyles();
const nom= metallica.name
  return (
    <div>
   
    <Card className={classes.root}>
        
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
          <ul >
          <li>
      <a href={metallica.urlFacebook} target="_blank">     
      <img src="http://icons.iconarchive.com/icons/cornmanthe3rd/plex/64/Communication-facebook-icon.png"></img> </a> 
        </li>

        <li>
        <a href={metallica.urlTwitter} target="_blank">   
        <img src="http://icons.iconarchive.com/icons/xenatt/minimalism/64/App-Twitter-icon.png"></img> </a> 
        </li>

        <li><a href={metallica.urlYouTube} target="_blank">  
        <img src="http://icons.iconarchive.com/icons/dtafalonso/android-l/64/Youtube-icon.png"></img> </a> 
        
        </li>
  
  <li><a href={metallica.urlInstagram} target="_blank">  
        <img src="http://icons.iconarchive.com/icons/uiconstock/socialmedia/64/Instagram-icon.png"/></a> 
        </li>

        <li><a href={metallica.urlSpotify} target="_blank">  
        <img src="http://icons.iconarchive.com/icons/dakirby309/simply-styled/64/Spotify-icon.png"></img> </a>
        </li>

        <li><a href={metallica.urlITunes} target="_blank">  
        <img src="http://icons.iconarchive.com/icons/osullivanluke/orb-os-x/64/iTunes-RED-icon.png"></img> </a>
        </li>

        <li><a href={metallica.urlWikipedia} target="_blank">  
        <img src=" http://icons.iconarchive.com/icons/icons8/windows-8/64/Logos-Wikipedia-icon.png"></img> </a>
        </li>
       
        <li><a href={metallica.urlAmazon} target="_blank">  
        <img src="  http://icons.iconarchive.com/icons/uiconstock/e-commerce/64/amazon-icon.png"></img> </a>
        </li>
       
        <li><a href={metallica.urlMySpace} target="_blank">  
        <img src=" http://icons.iconarchive.com/icons/graphics-vibe/neon-glow-social/64/myspace-icon.png"></img> </a>
        </li>

        <li><a href={metallica.urlLastFm} target="_blank">  
        <img src=" http://icons.iconarchive.com/icons/emey87/social-button/64/lastfm-icon.png"></img> </a>
        </li>
       
        </ul>
          </Typography>
        </CardContent>
      
    </Card>
    
    </div>
  );
}