import { routes } from 'koorie'

export default async () => {
    routes.list.push( { route:'message', asyncFunction: ( await import( './routes/message/route.js' ) ).message  } )
    await routes.set()
}
