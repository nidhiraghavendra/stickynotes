import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import '../App.css';
import MyLinks from './myLinks';

const useStyles = makeStyles({
    root: {
        maxWidth: 600,
    },
    media: {
        height: 400,
    },
    avatar: {
        backgroundColor: blue[100],
        color: blue[600],
    },
});


export default function Landing(props) {
    const classes = useStyles();
    const [showBye, setshowBye] = React.useState(false);

    const handleClicked = () => {
        setshowBye(true)
    }
   
    return (
        <div>
        
            <center className="aboutDiv">
                <div className="envelope">
                    <Card className={classes.root}>
                        <CardActionArea onClick={handleClicked}>
                            <CardMedia
                                className={classes.media}
                                image="https://emailingwithmygirlfriends.com/wp-content/uploads/2020/02/About-Me.png"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Hey! I am Nidhi Raghavendra!
                                </Typography>
                                <Typography variant="body" color="textSecondary" component="h3">
                                    With a Bachelors' degree in Computer Science from PES University, I am currently working as a Senior Software Engineer
                                    in Tredence Analytics.
                                 <br></br>
                                    I come with a demonstrated history of working in the management consulting industry with several technical skills such as
                                    Python, React Js, Node Js along with Web Frameworks such as Django and Flask.
                                <br></br>
                                    I also bring in good knowledge in Deployment Services such as GCP App Engine and Azure App Services.
                                <br></br>
                                    <Typography>
                                        Apart from Tech, I am certified in Carnatic Music and Bharatanatyam.
                                        I enjoy painting, reading and binging on Netflix ;)
                                    </Typography>


                                </Typography>

                               
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
            { showBye? 
            <div>
                <MyLinks> </MyLinks>
            </div>: <></>}
            </center>
        </div>
    )
}
