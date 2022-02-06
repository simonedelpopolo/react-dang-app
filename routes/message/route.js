import { parse } from 'json-swiss-knife'

/**
 * Handle the Message sent from the ContactForm components.
 *
 * @param {IncomingMessage} incoming - The given IncomingMessage Object.
 * @param {ServerResponse} outgoing - The given ServerResponse Object.
 * @returns {Promise<string>|module}
 */
export async function message( incoming, outgoing, koorie ){
    
    console.log(koorie)
    
    let accepted = true
    
    if( incoming.method !== 'POST' )
        accepted = false
    else
        console.log( await parse( koorie.body_ ) )
    
    return new Promise( ( resolve, reject ) => {
        
        if( accepted ) {
            outgoing.statusCode = 200
            outgoing.statusMessage = 'OK'
            outgoing.setHeader( 'koorie-api', 'true' )
            outgoing.setHeader( 'content-type', 'application/json' )
            
            const success = { message:'received' }
            
            resolve( {
                buffer: Buffer.from( JSON.stringify( success ) ),
                incoming:{
                    length: Buffer.byteLength( koorie.body_ ),
                    payload: koorie.body_
                }
            } )
        }
        else {
            outgoing.statusCode = 404
            outgoing.statusMessage = 'Not Found'
            outgoing.setHeader( 'koorie-api', 'false' )
            outgoing.setHeader( 'content-type', 'application/json' )
            
            const failed = { message: 'NOT OK' }
            
            reject( Buffer.from( JSON.stringify( failed ) ) )
        }
        
    } )
}
