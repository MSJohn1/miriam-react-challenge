import React from 'react';
import Typography from '@mui/material/Typography';
import ContactCard from './ContactCard.js';
import Button from '@mui/material/Button';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/system';

const Hero = () => {
   //dummy contacts
    const [contacts, setContacts] = useState([
        { id: 1, name: 'Miriam John', number: '+12621234567', email: 'miriam.john@rockwellautomation.com',
          location: 'Milwaukee, WI', isFavorite: false },
        { id: 2, name: 'Peter Pan', number: '+12621234567', email: 'peter.pan@rockwellautomation.com',
          location: 'Milwaukee, WI', isFavorite: false },
        { id: 3, name: 'Wendy Darling', number: '+12621234567', email: 'wendy.darling@rockwellautomation.com',
          location: 'Milwaukee, WI', isFavorite: false },
        { id: 4, name: 'Captain Hook', number: '+12621234567', email: 'captain.hook@rockwellautomation.com',
          location: 'Milwaukee, WI', isFavorite: false },
    ]);

    //used to determine what text and buttons and set of contacts to display
    const [showFavorites, setShowFavorites] =  useState(false);

    const toggleFavoriteDisplay = () => {
        if(showFavorites === false) {
            setShowFavorites(true);
            console.log("contacts \n" + contacts);
            console.log("favorited contacts \n" + favoritedContacts);
        } else if(showFavorites === true) {
            setShowFavorites(false);
        }
    }  

    const updateContactList = (contactID) => {
        setContacts(prevContacts => {
            return prevContacts.map(contact => {
              if (contact.id === contactID) {
                return { ...contact, isFavorite: !contact.isFavorite };
              }
              return contact;
            });
        });
    };

    const favoritedContacts = contacts.filter((contact) => contact.isFavorite);

    return (
        <div align="center">
            <div padding="">
                <Typography sx={{font: 'Roboto', fontSize: '60px', fontWeight: '300'}}>{showFavorites ? 'My Favorite Contacts' : 'My Contacts'}</Typography>
                <Typography sx={{font: 'Roboto', fontSize: '24px', color: 'rgba(0, 0, 0, 0.6)', fontWeight: "400"}}>Click on the heart button of a card to mark a contact as a favorite</Typography>
                <Button variant='outlined' onClick={toggleFavoriteDisplay}>
                    {showFavorites ? 'Show All Contacts' : 'Show Favorite Contacts'}
                </Button>  
            </div>
            <Grid container spacing={1} justifyContent="center" padding='40px' columns={{ xs: 4, sm: 8, md: 12 }}>
                {showFavorites ? favoritedContacts.map(contact => (
                    <ContactCard
                    key={contact.id}
                    contact={contact}
                    updateContactList={updateContactList}
                    />
                )) : contacts.map(contact => (
                    <ContactCard
                    key={contact.id}
                    contact={contact}
                    updateContactList={updateContactList}
                    />
                ))}
            </Grid>
        </div>
    )
}

export default Hero;