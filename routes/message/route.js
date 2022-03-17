import { Answer } from 'koorie'

/**
 * Handle the Message sent from the ContactForm components.
 *
 * @param {IncomingMessage} incoming - The given IncomingMessage Object.
 * @param {ServerResponse} outgoing - The given ServerResponse Object.
 * @returns {Promise<string>|module}
 */
export async function message( incoming, outgoing ){

    let accepted = true

    if( incoming.method !== 'POST' )
        accepted = false

    const incoming_message = await Answer.toPost( await Answer.getQuestion( 'body' ), 'message' )

    return new Answer( ( good, bad ) => {

        if( accepted ) {
            outgoing.statusCode = 200
            outgoing.statusMessage = 'OK'
            outgoing.setHeader( 'koorie-api', 'true' )
            outgoing.setHeader( 'content-type', 'application/json' )

            if( typeof incoming_message.invalid !== 'undefined' || typeof incoming_message.empty !== 'undefined' )
                bad( JSON.stringify( incoming_message ).toBuffer() )

            const success = { message:'received' }

            good( {
                buffer: JSON.stringify( success ).toBuffer(),
                incoming:{
                    length: Buffer.byteLength( JSON.stringify( incoming_message ).toBuffer() ),
                    payload: JSON.stringify( incoming_message ).toBuffer()
                }
            } )
        }
        else {
            outgoing.statusCode = 404
            outgoing.statusMessage = 'Not Found'
            outgoing.setHeader( 'koorie-api', 'false' )
            outgoing.setHeader( 'content-type', 'application/json' )

            const failed = { message: 'NOT OK' }

            bad( Buffer.from( JSON.stringify( failed ) ) )
        }

    } )
}
