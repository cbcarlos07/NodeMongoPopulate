import authorService from "./author";
import booksService from "./book";

export default {
    author: () => authorService(),
    book: () => booksService()
}