import * as mongoose from 'mongoose'

const authorModel = new mongoose.Schema({
    name: {
        type: String,
        required: '${PATH} is required'
    },
    bio: {
        type: String
       },
       website: {
        type: String
       },
       books: [
         { type: mongoose.Schema.Types.ObjectId, ref: 'Book' }
       ]
     }, {
       timestamps: true
     }
)

export default mongoose.model( 'author', authorModel )