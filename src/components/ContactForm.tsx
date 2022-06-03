import { useRouter } from 'next/router'
import React, { useState } from 'react'

import { RequestAccess } from '@/utils/RequestAccess'
import { validateEmail } from '@/utils/validateEmail'

const ContactForm: React.FC = () => {
  const router = useRouter()

  const [email, setEmail] = useState<string>('')
  const [emailError, setEmailError] = useState<boolean>(false)
  const [name, setName] = useState<string>('')
  const [company, setCompany] = useState<string>('')
  const [thankYouMessage, setThankYouMessage] = useState<boolean>(false)
  const [design, setDesign] = useState<boolean>(false)
  const [engineering, setEngineering] = useState<boolean>(false)

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault()
    // Add Validation
    const isEmailValid = validateEmail(email)

    if (!isEmailValid) {
      setEmailError(true)
      return
    }

    const data = await RequestAccess(name, email, company, design, engineering)

    if (data) {
      setThankYouMessage(true)
      router.reload()
    }
  }

  return (
    <form
      className="min-w-[343px] rounded-md border-[0.5px] border-gray-100 bg-gray-100 p-4 shadow-inner md:p-8"
      onSubmit={(e) => handleSubmit(e)}
    >
      <h6 className="pb-4 font-black uppercase tracking-wider text-primary-400">
        Contact Me!
      </h6>
      <div className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full border border-gray-200 p-2 text-black"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full border border-gray-200 p-2 text-black"
        />
        {emailError && (
          <h5 className="text-red-500">Please enter a valid email</h5>
        )}
        <input
          type="text"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          required
          className="w-full border border-gray-200 p-2 text-black"
        />
        <h5>
          Are you interested in <em>(click both if it applies)</em>:
        </h5>
        <div className="flex space-x-4">
          <div
            className={`w-full cursor-pointer border-tertiary border-[0.5px] ${
              design ? 'bg-tertiary' : '  hover:bg-tertiary'
            } p-2 transition duration-700 ease-in-out `}
            onClick={() => setDesign(!design)}
          >
            <h5>Product design</h5>
          </div>
          <div
            className={`w-full cursor-pointer border-tertiary border-[0.5px]
             ${
               engineering ? 'bg-tertiary' : 'hover:bg-tertiary'
             } p-2 transition duration-700 ease-in-out `}
            onClick={() => setEngineering(!engineering)}
          >
            <h5>Engineering</h5>
          </div>
        </div>

        {thankYouMessage ? (
          <h5>Thank you for your submission!</h5>
        ) : (
          <div
            className="w-full cursor-pointer bg-gradient-to-r from-secondary to-tertiary py-3 text-center"
            onClick={(e) => handleSubmit(e)}
          >
            <h6 className="font-black uppercase tracking-wider text-white">
              Submit
            </h6>
          </div>
        )}
      </div>
    </form>
  )
}

export default ContactForm
