import serve from '../serve.js'

let absolute_path
export const public_pathSymbol = Symbol( 'public static file absolute path' )
export const public_path = Object.defineProperty( serve, public_pathSymbol, {
    enumerable: true,
    configurable: false,
    set( directory ){
        absolute_path = `${process.cwd()}/${ directory }`
    },
    get(){
        return absolute_path
    }
} )
