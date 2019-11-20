import * as mongoose from 'mongoose';
const bookModel = new mongoose.Schema({
  title: { 
    type: String, 
    required: '{PATH} is required!'
  },
  subtitle: {
    type: String
  },
  author: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Author' 
  }
}, {
  timestamps: true
});
export default mongoose.model('Book', bookModel);