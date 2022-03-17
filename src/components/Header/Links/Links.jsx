import './links.css'
import Logo from '../../../template/images/favicon.svg'
import { NavLink } from 'react-router-dom'
import React, { Component } from 'react'

class Links extends Component{

    constructor( properties ) {
        super( properties )

        this.state = {
            Links: [
                { name: 'Home', path:'/' },
                { name: 'Contacts', path:'/contacts' },
            ]
        }
    }

    render() {

        return (
            <>
                <div className={'links'}>
                    <a href={'/'}><img src={Logo} width={'25px'} style={{ margin:'1%' }} alt={'logo'}/></a>
                    {this.state.Links.map( ( link, index ) => (

                        <NavLink
                            key={index}
                            to={link.path}
                            style={( { isActive } ) => ( {
                                height:'50px',
                                alignSelf:'center',
                                fontWeight: isActive ? '800' : '100',
                            } )}

                        >

                            <div>{link.name}</div>

                        </NavLink>

                    ) )}
                </div>

            </>
        )
    }
}

export default Links
