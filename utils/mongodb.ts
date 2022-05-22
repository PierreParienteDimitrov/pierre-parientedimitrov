import mongoose from 'mongoose'

// CONNECTING TO MONGOOSE (Get Database Url from .env.local)
const { DATABASE_URL } = process.env

// connection function
export const connect = async () => {
  const conn = await mongoose
    .connect(DATABASE_URL as string)
    .catch((err) => console.log(err))
  console.log('Mongoose Connection Established')

  // USER ACCESS SCHEMA
  const UserAccessSchema = new mongoose.Schema({
    email: String,
    hasAccess: Boolean,
  })

  // USER ACCESS MODEL
  const UserAccess =
    mongoose.models.UserAccess || mongoose.model('UserAccess', UserAccessSchema)

  return { conn, UserAccess }
}
