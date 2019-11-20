import { author } from './mongodb/model'

const authorService = () =>{
    return {
        all: () => {
            return author.find({}).populate( 'books' )
        },
        find: (id: any) => {
            return author.findById( id ).populate( 'books' )
        }
    }
}

export default authorService