import emailjs from '@emailjs/browser'
import { useRouter } from 'next/router'
import React, { useRef, useState } from 'react'

import { RequestAccess } from '@/utils/RequestAccess'
import { validateEmail } from '@/utils/validateEmail'

import styles from '../styles/contactForm.module.css'

const ContactForm: React.FC = () => {
  const router = useRouter()
  const form = useRef<HTMLFormElement>(null)

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

    if (router.pathname === '/') {
      const formParams = { email, name, company, design, engineering }
      emailjs
        .send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          formParams,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log(result.text)
          },
          (error) => {
            console.log(error.text)
          }
        )
    }

    const data = await RequestAccess(name, email, company, design, engineering)

    if (data) {
      setThankYouMessage(true)
      router.reload()
    }
  }

  return (
    <div className={`w-full h-full shadow-inner ${styles.container}`}>
      <div className={`py-8 px-4 ${styles['card-wrapper']} text-white`}>
        <form
          ref={form}
          onSubmit={(e) => handleSubmit(e)}
          // className={`min-w-[343px] h-full p-96 shadow-inner md:p-32`}
        >
          <h6 className="pb-4 font-black uppercase tracking-wider">
            Contact Me!
          </h6>
          <div className={`flex flex-col space-y-8 ${styles.content}`}>
            <div className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full border p-2 text-white"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border p-2 text-white"
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
                className="w-full border p-2 text-white"
              />
            </div>
            <div className="flex flex-col space-y-4">
              <h5>
                Are you interested in <em>(click both if it applies)</em>:
              </h5>
              <div className="flex space-x-4">
                <div
                  className={`w-full cursor-pointer border-tertiary border-[0.5px] text-center ${
                    design ? 'bg-tertiary' : '  hover:bg-tertiary'
                  } p-2 transition duration-700 ease-in-out `}
                  onClick={() => setDesign(!design)}
                >
                  <h6 className="font-black uppercase tracking-wider">
                    Product Design
                  </h6>
                </div>
                <div
                  className={`w-full cursor-pointer border-secondary border-[0.5px] text-center
             ${
               engineering ? 'bg-secondary' : 'hover:bg-secondary'
             } p-2 transition duration-700 ease-in-out `}
                  onClick={() => setEngineering(!engineering)}
                >
                  <h6 className="font-black uppercase tracking-wider">
                    Engineering
                  </h6>
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
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
