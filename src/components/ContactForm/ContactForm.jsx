import './contact-form.css'
import React, { Component, createRef } from 'react'

class ContactForm extends Component{

    constructor( properties ) {
        super( properties )

        this._messageSentElement = createRef()
        this._nameLabelElement = createRef()
        this._nameInputElement = createRef()
        this._emailLabelElement = createRef()
        this._emailInputElement = createRef()
        this._bodyTextAreaElement = createRef()
        this._bodyLabelElement = createRef()

        this.state = {
            name: '',
            errorName: null,
            errorElementsName:false,
            email: '',
            errorEmail: null,
            errorElementsEmail: false,
            body: '',
            errorBody: null,
            errorElementsBody: false,
            errors: true
        }

        this.handleChange = this.handleChange.bind( this )
        this.handleSubmit = this.handleSubmit.bind( this )
    }

    handleChange( event ) {

        // eslint-disable-next-line default-case
        switch ( event.target.name ){
            case 'name':
                this.setState( { name: event.target.value } )
                if( this.state.errorElementsName === true ) {
                    this.setState( { errorName: null } )
                    this.setState( { errorElementsName: false } )
                    const classListNameLabel = this._nameLabelElement.current.classList
                    const classListNameInput = this._nameInputElement.current.classList
                    classListNameLabel.add( 'styling-labels' )
                    classListNameLabel.remove( 'error-styling-labels' )
                    classListNameInput.add( 'styling-inputs-text' )
                    classListNameInput.remove( 'error-styling-inputs-text' )
                }

                break
            case 'email':
                this.setState( { email: event.target.value } )
                if( this.state.errorElementsEmail === true ){
                    this.setState( { errorElementsEmail: false } )
                    this.setState( { errorEmail: null } )
                    const classListEmailLabel = this._emailLabelElement.current.classList
                    const classListEmailInput = this._emailInputElement.current.classList
                    classListEmailLabel.add( 'styling-labels' )
                    classListEmailLabel.remove( 'error-styling-labels' )
                    classListEmailInput.add( 'styling-inputs-text' )
                    classListEmailInput.remove( 'error-styling-inputs-text' )
                }
                break
            case 'body':
                this.setState( { body: event.target.value } )
                if( this.state.errorElementsBody === true ){
                    this.setState( { errorElementsBody: false } )
                    this.setState( { errorBody: null } )
                    const classListBodyLabel = this._bodyLabelElement.current.classList
                    const classListBodyTextArea = this._bodyTextAreaElement.current.classList
                    classListBodyLabel.add( 'styling-labels' )
                    classListBodyLabel.remove( 'error-styling-labels' )
                    classListBodyTextArea.add( 'styling-text-area' )
                    classListBodyTextArea.remove( 'error-styling-text-area' )
                }
        }

    }

    async handleSubmit( event ) {

        event.preventDefault()

        if( this.validate( this.state.name, this.state.email, this.state.body ) === true )
            console.log( 'errors' )
        else {

            const domain = window.location.hostname
            const port = window.location.port

            const full = `http://${domain}:${port}`

            const response = await fetch( `${full}/message`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify( {
                    email: this.state.email,
                    name: this.state.name,
                    message: this.state.body
                } )
            } )
                .then( response => response.json() )
                .catch( error => console.log( error ) )

            if( typeof response.message !== 'undefined' ){
                const classListMessageSent = this._messageSentElement.current.classList
                classListMessageSent.remove( 'invisible' )
            }

            console.log( response )
        }
    }

    validate( name, email, body ) {

        const errors = []

        const classListNameLabel = this._nameLabelElement.current.classList
        const classListNameInput = this._nameInputElement.current.classList

        const classListEmailLabel = this._emailLabelElement.current.classList
        const classListEmailInput = this._emailInputElement.current.classList

        if ( name.length === 0 ) {

            classListNameLabel.remove( 'styling-labels' )
            classListNameLabel.add( 'error-styling-labels' )
            classListNameInput.remove( 'styling-inputs-text' )
            classListNameInput.add( 'error-styling-inputs-text' )
            this.setState( { errorElementsName: true } )
            this.setState( { errors: true } )
            errors.push( 0 )
        }

        if ( email.length === 0 ) {

            classListEmailLabel.remove( 'styling-labels' )
            classListEmailLabel.add( 'error-styling-labels' )
            classListEmailInput.remove( 'styling-inputs-text' )
            classListEmailInput.add( 'error-styling-inputs-text' )
            this.setState( { errorElementsEmail: true } )
            this.setState( { errors: true } )
            errors.push( 1 )
        }

        if ( email.split( '' ).filter( ( x ) => x === '@' ).length !== 1 ) {

            classListEmailLabel.remove( 'styling-labels' )
            classListEmailLabel.add( 'error-styling-labels' )
            classListEmailInput.remove( 'styling-inputs-text' )
            classListEmailInput.add( 'error-styling-inputs-text' )
            this.setState( { errorElementsEmail: true } )
            errors.push( 2 )
        }

        if ( email.indexOf( '.' ) === -1 ) {

            classListEmailLabel.remove( 'styling-labels' )
            classListEmailLabel.add( 'error-styling-labels' )
            classListEmailInput.remove( 'styling-inputs-text' )
            classListEmailInput.add( 'error-styling-inputs-text' )
            this.setState( { errorElementsEmail: true } )
            errors.push( 3 )
        }

        if ( body.length === 0 ) {
            const classListBodyLabel = this._bodyLabelElement.current.classList
            const classListBodyTextArea = this._bodyTextAreaElement.current.classList
            classListBodyLabel.remove( 'styling-labels' )
            classListBodyLabel.add( 'error-styling-labels' )
            classListBodyTextArea.remove( 'styling-text-area' )
            classListBodyTextArea.add( 'error-styling-text-area' )
            this.setState( { errorElementsBody: true } )

            errors.push( 4 )
        }

        if( errors.length > 0 ) {
            this.setState( { errors: true } )

            return true
        }
        this.setState( { errors: false } )

        return false
    }

    render() {

        return(
            <>

                <form
                    onSubmit={this.handleSubmit}
                    className={'contact-form'}
                >
                    <div
                        ref={this._messageSentElement}
                        className={'message-sent invisible'}
                    >
                        <span className={'message-top invisible'}>message sent</span>
                    </div>
                    <label
                        ref={this._nameLabelElement}
                        className={'name-label styling-labels'}
                        htmlFor={'name-input'}
                    >
                        name
                    </label>
                    <input
                        ref={this._nameInputElement}
                        id={'name-input'}
                        className={'name-input styling-inputs-text'}
                        type={'text'}
                        name={'name'}
                        placeholder={'insert your name'}
                        onChange={this.handleChange}
                        value={this.state.name}
                    />

                    <label
                        ref={this._emailLabelElement}
                        className={'email-label styling-labels'}
                        htmlFor={'email-input'}
                    >
                        email
                    </label>
                    <input
                        ref={this._emailInputElement}
                        id={'email-input'}
                        className={'email-input styling-inputs-text'}
                        type={'text'}
                        name={'email'}
                        placeholder={'insert your email'}
                        onChange={this.handleChange}
                        value={this.state.email}
                    />
                    <label
                        ref={this._bodyLabelElement}
                        className={'body-label styling-labels'}
                        htmlFor={'body-text-area'}
                    >
                        message
                    </label>
                    <textarea
                        ref={this._bodyTextAreaElement}
                        id={'body-text-area'}
                        className={'body-text-area styling-text-area'}
                        name={'body'}
                        placeholder={'message...'}
                        onChange={this.handleChange}
                        value={this.state.body}
                    />

                    <input
                        className={'submit-dang'}
                        type={'submit'}
                        value={'Dang A Message!'}
                    />
                </form>
            </>

        )
    }
}

export default ContactForm
