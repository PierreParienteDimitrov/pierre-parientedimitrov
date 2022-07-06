import mongoose from 'mongoose'

/* PetSchema will correspond to a collection in your MongoDB database. */
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  company: {
    type: String,
  },
  email: {
    type: String,
    required: [true, 'Please enter your email.'],
  },
  hasAccess: {
    default: false,
    type: Boolean,
  },
  design: {
    default: false,
    type: Boolean,
  },
  engineering: {
    default: false,
    type: Boolean,
  },
})

export default mongoose.models.User || mongoose.model('User', UserSchema)
