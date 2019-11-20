import {book} from './mongodb/model'

const booksService = () => {
    return {
        save: (obj: any) => {
            return book.create( obj )
        }
    }
}

export default booksService