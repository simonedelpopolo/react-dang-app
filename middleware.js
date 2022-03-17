import { readFile } from 'node:fs/promises'
import { Answer, routes_inject, routes_set } from 'koorie'

/**
 * This redirect route handles when browsing at http://localhost:3001/contacts.
 *
 * @param {IncomingMessage} incoming - The given IncomingMessage Object.
 * @param {ServerResponse} outgoing - The given ServerResponse Object.
 * @returns {Promise<{buffer:Buffer}> | {buffer:Buffer}}
 */
const contacts_route_redirect = async ( incoming, outgoing ) => {
    outgoing.statusCode = 200
    const buffer = await readFile( `${process.cwd()}/public/index.html` )

    return Answer.resolve( Buffer.from( buffer ) )
}

export default async () => {
    await routes_inject( { route:'message', asyncFunction: ( await import( './routes/message/route.js' ) ).message, incoming: 'message'  } )
    await routes_inject( { route:'contacts', asyncFunction: contacts_route_redirect } )
    await routes_set()
}
