import React, { Component } from 'react';
import './App.css';


import ContactInline from './ContactInline';
// import cookie from 'react-cookies'
class Contact extends Component {
    addContact(data) {
        console.log(data)
        // const csrfToken = cookie.load('csrftoken')

        let lookupOptions = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                // 'X-CSRFToken': csrfToken
            },
            body: JSON.stringify(data),
            credentials: 'include'
        }

        fetch("http://127.0.0.1:8000/api/contacts/", lookupOptions)
            .then(function (response) {
                return response.json()
            }).then(function (responseData) {
                console.log(responseData)

            }).catch(function (error) {
                console.log("error", error)
                alert("An error occured, please try again later.")
            })

    }
    render() {
        return (
            <ContactInline addContact={this.addContact}/>

        );
    }
}

export default Contact;
