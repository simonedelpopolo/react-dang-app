import './index.css'
import React, { Component } from 'react'

class Index extends Component{
    
    constructor( props ) {
        super( props )
    
        this.state = {
            ApplicationsAvailable: null,
            ApplicationsAvailableError: null,
            AddApplication: null,
            AddApplicationDialog: null
        }
        
    }
    render() {
        return(
            <React.StrictMode>
                <div>
                    <section className="Index">
                        <h1> ReactDang! </h1>
                    </section>
                </div>
            </React.StrictMode>
            
        )
    }
}

export default Index


