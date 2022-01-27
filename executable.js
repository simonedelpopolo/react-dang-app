import { flags, server } from './index.js'

// Splicing out from `process.argv` the paths for node and executable.js
process.argv.splice( 0, 2 )

// Process name.
process.title = 'r-dang-serve'

await server( await flags( process.argv ) )
