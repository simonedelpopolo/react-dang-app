import './contact-form.css'
import React, { Component, createRef } from 'react'

class ContactForm extends Component{
    
    constructor( properties ) {
        super( properties )
        
        this._nameLabelElement = createRef()
        this._nameInputElement = createRef()
        this._nameErrorElement = createRef()
        this._emailLabelElement = createRef()
        this._emailInputElement = createRef()
        this._emailErrorElement = createRef()
        
        this.state = {
            name: '',
            email: ''
        }
    
        this.handleChange = this.handleChange.bind( this )
        this.handleSubmit = this.handleSubmit.bind( this )
    }
    
    handleChange( event ) {
        // eslint-disable-next-line default-case
        switch ( event.target.name ){
            case 'name':
                this.setState( { name: event.target.value } )
                break
            case 'email':
                this.setState( { email: event.target.value } )
                break
        }
        
    }
    
    handleSubmit( event ) {
        
        event.preventDefault()
        console.log( this.validate( this.state.name, this.state.email ) )
        console.log( this._nameInputElement )
        console.log( this._emailInputElement )
    }
    
    validate( name, email ) {
        
        const errors = []
        
        if ( name.length === 0 ) {
            const classListNameLabel = this._nameLabelElement.current.classList
            const classListNameInput = this._nameInputElement.current.classList
            const classListNameError = this._nameErrorElement.current.classList
            classListNameLabel.remove( 'styling-labels' )
            classListNameLabel.add( 'error-styling-labels' )
            classListNameInput.remove( 'styling-inputs-text' )
            classListNameInput.add( 'error-styling-inputs-text' )
            classListNameError.remove( 'invisible' )
            errors.push( 'Name can\'t be empty' )
        }
        
        if ( email.length < 5 ) {
            const classListEmailLabel = this._emailLabelElement.current.classList
            const classListEmailInput = this._emailInputElement.current.classList
            const classListEmailError = this._emailErrorElement.current.classList
            classListEmailLabel.remove( 'styling-labels' )
            classListEmailLabel.add( 'error-styling-labels' )
            classListEmailInput.remove( 'styling-inputs-text' )
            classListEmailInput.add( 'error-styling-inputs-text' )
            classListEmailError.remove( 'invisible' )
            errors.push( 'Email should be at least 5 charcters long' )
        }
        
        if ( email.split( '' ).filter( ( x ) => x === '@' ).length !== 1 )
            errors.push( 'Email should contain a @' )
        
        if ( email.indexOf( '.' ) === -1 )
            errors.push( 'Email should contain at least one dot' )
        
        return errors
    }
    
    render() {
        
        return(
            <form
                onSubmit={this.handleSubmit}
                className={'contact-form'}
            >
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
                <span
                    ref={this._nameErrorElement}
                    className={'invisible error'}
                    style={{ position:'relative' }}
                >
                    name cannot be empty
                </span>
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
                    type={'email'}
                    name={'email'}
                    placeholder={'insert your email'}
                    onChange={this.handleChange}
                    value={this.state.email}
                />
                <span
                    ref={this._emailErrorElement}
                    className={'invisible error'}
                    style={{ position:'relative' }}
                >
                    email problem
                </span>
                <input
                    className={'submit-dang'}
                    type={'submit'}
                    value={'Dang A Message!'}
                />
            </form>
        )
    }
}

export default ContactForm
