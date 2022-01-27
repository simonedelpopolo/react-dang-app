import { logger } from '../../index.js'
import serve from '../serve.js'
import { outgoing, pushing__ } from './initialize.js'

export const routingSymbol = Symbol( 'the server routing system' )
export const routing = Object.defineProperty( serve, routingSymbol, {
    enumerable: true,
    configurable: false,
    writable: false,
    value: async function routing(){
        
        pushing__.once( 'error', log => {
            outgoing.end()
            logger( { quiet:false, info: [ log ] } )
        } )
        
        pushing__.once( 'read', resource => {
            outgoing.write( resource.buffer )
        } )
        
        pushing__.once( 'serve', resource => {
            outgoing.write( resource.buffer )
        } )
    
        pushing__.once( 'api', log => {
            logger( { quiet:false, info:[ log ] } )
        } )
        
        pushing__.once( 'ready', log => {
            outgoing.end()
            logger( { quiet:false, info:[ log ] } )
        } )
    }
} )
