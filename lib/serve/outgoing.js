import serve from '../serve.js'

/**
 * @type {symbol}
 */
export const outgoingSymbol = Symbol( 'server ServerResponse' )
export let outgoing = Object.defineProperty( serve, outgoingSymbol, {
    enumerable: true,
    writable: true,
    configurable: true,
    value: null,
} )
