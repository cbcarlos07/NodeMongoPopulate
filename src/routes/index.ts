import defaultRoute from "./default.route"
import authorRoute from "./author.route"

const initRoute = server => {
    defaultRoute(server)
    authorRoute(server)
}
export default initRoute