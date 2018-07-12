import React, { Component } from 'react';



import ContactInline from './ContactInline';

import cookie from 'react-cookies'
import { fetchResource } from './../utils/fetch_url';

class Contact extends Component {

    constructor(props) {
        super(props)
        this.state = {
            success: false
        }
        this.addContact = this.addContact.bind(this)
    }

    addContact(data) {

        const csrfToken = cookie.load('csrftoken')

        if (csrfToken !== undefined) {
            let lookupOptions = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrfToken
                },
                body: JSON.stringify(data)
            }

            fetchResource("/api/contacts/", lookupOptions)
                .then(() => this.setState({ success: true }))
                .catch(function (error) {
                    console.log("error", error)
                    alert("An error occured, please try again later.")
                });

        }

    }
    render() {
        return (
            <div>

                <ContactInline addContact={this.addContact} success={this.state.success} />

            </div>


        );
    }
}

export default Contact;
