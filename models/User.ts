import mongoose from 'mongoose'

/* PetSchema will correspond to a collection in your MongoDB database. */
const UserSchema = new mongoose.Schema({
  first_name: {
    /* The name of this pet */

    type: String,
    required: [true, 'Please enter your first name.'],
  },
  last_name: {
    /* The name of this pet */

    type: String,
    required: [true, 'Please enter your last name.'],
  },
  company: {
    /* The name of this pet */

    type: String,
    required: [true, 'Please enter your company.'],
  },
  email: {
    /* The species of your pet */

    type: String,
    required: [true, 'Please enter your email.'],
  },
  has_access: {
    /* List of dietary needs, if applicable */

    type: Boolean,
  },
})

export default mongoose.models.User || mongoose.model('User', UserSchema)
