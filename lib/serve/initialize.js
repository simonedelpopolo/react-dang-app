import cluster from 'cluster'
import { createServer } from 'http'
import { routing } from '../../index.js'
import { dispatcher as d, dispatcherEvent, dispatcherSymbol } from './dispatcher.js'
import { incoming as i, incomingSymbol } from './incoming.js'
import { outgoing as o, outgoingSymbol } from './outgoing.js'
import { public_path, public_pathSymbol } from './public_path.js'

/**
 * Imports API routes down here.
 */
// eslint-disable-next-line sort-imports
import { message } from '../../routes/message/route.js'


export let outgoing = o[ outgoingSymbol ]
export let incoming = i[ incomingSymbol ]

export let dispatcher = d[ dispatcherSymbol ]
export const pushing__ = dispatcherEvent
export const worker = {
    id: null,
    date: null
}

/**
 * This Object is a container for API routes.
 *
 * @type {object}
 */
export const routes = {}

/**
 * Server.
 *
 * @returns {Promise<void>}
 */
export async function initialize() {
    
    const { port, address, static_files } = process.env
    /**
     * Populate API routes down here.
     *
     * @example
     * import { my_route } from '../../routes/my_route/route.js'
     * routes.my_route = my_route
     */
    routes.message = message
    
    // The server configuration
    const server = createServer(  async ( Incoming, Outgoing ) => {
        
        public_path[ public_pathSymbol ] = static_files
        
        // eslint-disable-next-line no-import-assign
        outgoing = Outgoing
    
        // eslint-disable-next-line no-import-assign
        incoming = Incoming
        
        d[ dispatcherSymbol ] = {
            requested_resource:`${ public_path[ public_pathSymbol ] }${ Incoming.url }`,
            server: {
                outgoing: outgoing,
                incoming:incoming
            }
        }
        
        worker.id = cluster.isWorker === true ? `_rd-app-worker-id:${ cluster.worker.id }` : 'single'
        worker.date = new Date()
        await routing()
        
    } )
    
    server.listen( parseInt( port ), address, null,
        () => {
            console.log( server.address() )
            console.log( `http://${ server.address().address }:${ server.address().port }` )
        } )
    
}

if ( cluster.isWorker )
    await initialize()



