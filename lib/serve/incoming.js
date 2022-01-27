import serve from '../serve.js'

export const incomingSymbol = ( 'server IncomingMessage' )
export const incoming = Object.defineProperty( serve, incomingSymbol, {
    enumerable:true,
    configurable:true,
    writable:true,
    value: null
} )
