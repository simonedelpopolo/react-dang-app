import serve from '../serve.js'

export const status_Symbol = Symbol( 'server header response status codes' )
export const status = Object.defineProperty( serve, status_Symbol, {
    enumerable: true,
    writable: false,
    configurable: false,
    value: {
        '200': 200,
        '404': 404
    }
} )
