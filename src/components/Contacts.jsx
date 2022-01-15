import ContactForm from './ContactForm/ContactForm.jsx'
import React, { Component } from 'react'

class Contacts extends Component{
    
    constructor( props ) {
        super( props )
        
    }
    
    render() {
        return(
            <React.StrictMode>
                <h1 className={'intro'}> Contacts! </h1>
                <div className={'container'}>
                    <main className={'content'}>
                        <ContactForm />
                    </main>
                    <aside className={'aside'}>
                        some options?
                    </aside>
                </div>
            
            </React.StrictMode>
        
        )
    }
}

export default Contacts
