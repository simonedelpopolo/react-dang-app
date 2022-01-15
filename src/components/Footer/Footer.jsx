import './footer.css'
import GitHub from '../../template/images/GitHub-Mark-32px.png'
import Npmjs from '../../template/images/npm-logo-red.svg'
import React, { Component } from 'react'

class Footer extends Component{
    
    constructor( properties ) {
        super( properties )
    }
    
    render() {
        
        return (
            <>
                <footer className={'footer'}>
                    <div>
                        <div id={'github'}>
                            <a href={'https://github.com/simonedelpopolo/react-dang-app'} target={'_blank'} rel="noreferrer">
                                <img src={GitHub}  alt={'github'}/>
                            </a>
                        </div>
                        <div id={'npmjs'}>
                            <a href={'https://www.npmjs.com/package/@react-dang/app'} target={'_blank'} rel="noreferrer">
                                <img src={Npmjs} width={'100px'} alt={'npmjs'}/>
                            </a>
                        </div>
                        <div id={'copy'} style={{
                            fontSize: '1.5rem',
                            fontFamily: '"Raleway", sans-serif',
                            color: 'rgb(31, 35, 42)'
                        }}
                        >
                            &copy;react-dang-app!
                        </div>
                    </div>
                </footer>
            </>
        )
    }
}

export default Footer
