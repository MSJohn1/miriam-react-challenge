import React from 'react';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import PlaceIcon from '@mui/icons-material/Place';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import Hero from './Hero.js';
import { styled } from '@mui/system';

const MyAvatar = styled(Avatar)({
    verticalAlign: 'center',

    //maybe this needs to be absolute but it overlaps right now when I do
    position: "absolute",

    width: "5rem",

    height: "5rem",

    marginTop: "-2.5rem",

    marginLeft: "1.5rem",

    border: ".5rem solid",

    borderColor: "#252850",
});

const Background = styled(CardMedia)({
    height: 140,
    maxWidth: "100%",
    objectFit: "contain"
});
  

const ContactCard = ({key, contact, updateContactList}) => {
    //State changes

    //setting the heart based on if its been clicked or not
    const [isFavorite, setFavorite] = useState(contact.isFavorite);

    /**
     * getting the exact contact information from what is passed in, information about the contact
     * is not updated in this component so there is no need to have this info in a state
     */
    const _contact = contact;

    //handling the toasts
    const [open, setOpen] = useState(false);
  
    const handleToastClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };

    const action = (
        <React.Fragment>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleToastClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
    );

    const handleUpdateContacts = () => {
        updateContactList(contact.id);
      };

    /**
     * add contact to favorites, change heart to be pink, send state update to change hero(?)
     * if heart is pink/contact is already in favorite
     */
    const handleHeartClick = () => {
        //if favorite is true when heart is clicked, set it to false and vice versa
        setFavorite(!isFavorite);
        //PROBLEM: it is always false for some reason, swapping the values means it never updates
        //i.e false to false. When I hard code it to set it true, the heart changes colors but the contact
        //STILL returns false so no contacts are added to the favorited contacts group
        
        handleUpdateContacts();
        //setFavorite(true);
        
        //set toast state to open when contact is favorited but not when it is unfavorited
        isFavorite ? setOpen(false) : setOpen(true);
    }

    return (
        <div>
            <Card sx={{ 
                width: 345,
                backgroundColor: '#252850',
                color: '#b3b8cd',
                border: "none",
                boxShadow: "0 10px 20px -10px rgba(0,0,0,.75)",
                margin: '20px',}}>
                <Background
                image="https://images.unsplash.com/photo-1540228232483-1b64a7024923?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
                />
                <MyAvatar alt={_contact.name} src="https://th.bing.com/th/id/R.6dbe6f70ff4ab971dcf9d706e087880c?rik=lmxM2HHeOD11rA&riu=http%3a%2f%2f4.bp.blogspot.com%2f-F-7S3bWCnD8%2fT8zelF2bWVI%2fAAAAAAAAASA%2fPN9sXsLIKGw%2fs1600%2fcaninecrews_kaffko.jpg&ehk=Jyju7DIwpsYScgBubnJ1uYR6Y7EvTRzbS7Cl8B75txA%3d&risl=&pid=ImgRaw&r=0" size="large"/>
                <CardContent>
                    <Stack direction="column" spacing={2}>
                        <Typography gutterBottom variant="h5" component="div" textAlign='right'>{_contact.name}</Typography>
                        <Stack direction="row" spacing={1}>
                            <LocalPhoneRoundedIcon/>
                            <Typography variant="body2">{_contact.number}</Typography>
                        </Stack>
                       
                        <Stack direction="row" spacing={1}>
                            <MailOutlineOutlinedIcon/>
                            <Typography variant="body2">{_contact.email}</Typography>
                        </Stack>
                       
                        <Stack direction="row" spacing={1}>
                            <PlaceIcon/>
                            <Typography variant="body2">{_contact.location}</Typography>
                        </Stack>
                    </Stack>
                </CardContent>
                <CardActions sx={{justifyContent: "center"}}>
                    <IconButton onClick={handleHeartClick}>
                        <FavoriteIcon sx={{fontSize: "large", color: isFavorite ? "#FF52A2" : "#FFFFFF"}}/>
                    </IconButton>
                    <Snackbar
                        open={open}
                        autoHideDuration={2000}
                        onClose={handleToastClose}
                        message="saved to your favorites"
                        action={action}
                    />
                </CardActions>
            </Card>
        </div>
    )
}

export default ContactCard