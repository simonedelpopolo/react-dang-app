import { is_json, parse } from 'json-swiss-knife'

/**
 * Handle the Message sent from the ContactForm components.
 *
 * @param {IncomingMessage} incoming - The given IncomingMessage Object.
 * @param {ServerResponse} outgoing - The given ServerResponse Object.
 * @returns {Promise<string>|module}
 */
export async function message( incoming, outgoing ){
    
    let accepted = true
    let incomingBody
    
    if( incoming.method !== 'POST' )
        accepted = false
    else{
        const buffers = []
    
        for await ( const chunk of incoming )
            buffers.push( chunk )
    
        /**
         * @type {Buffer}
         */
        incomingBody = Buffer.concat( buffers )
        
        if( await is_json( incomingBody ) !== true )
            accepted = false
        else
            console.log( await parse( incomingBody ) )
    }
    
    return new Promise( ( resolve, reject ) => {
    
        if( accepted ) {
            outgoing.statusCode = 200
            outgoing.statusMessage = 'OK'
            outgoing.setHeader( 'lightweight-api', 'true' )
            outgoing.setHeader( 'content-type', 'application/json' )
            
            const success = { message:'received' }
            
            resolve( {
                buffer: Buffer.from( JSON.stringify( success ) ),
                incoming:{
                    length: Buffer.byteLength( incomingBody ),
                    payload: incomingBody
                }
            } )
        }
        else {
            outgoing.statusCode = 404
            outgoing.statusMessage = 'Not Found'
            outgoing.setHeader( 'lightweight-api', 'false' )
            outgoing.setHeader( 'content-type', 'application/json' )
            
            const failed = { message: 'NOT OK' }
            
            reject( Buffer.from( JSON.stringify( failed ) ) )
        }
    
    } )
}
