import { pageInformation, Routes } from 'constants/pages'
import Head from 'next/head'

import Container from '@/layouts/containers/Container'
import { aboutMe, professionalExperiences, skills } from '@/utils/copy/aboutMe'

const Resume = () => (
  <>
    <Head>
      <title>{pageInformation[Routes.Resume]!.title}</title>
      <meta
        property="og:url"
        content="https://www.pierreparientedimitrov.com/"
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="website-preview" />
      <meta
        property="og:description"
        content="Pierre Pariente Dimitrov Portfolio = UX/UI designer & Software Engineer"
      />
      <meta property="og:image" content="/website-preview.png" />
    </Head>

    <Container>
      <div className="m-auto mt-10 mb-48 flex w-full flex-col space-y-16 dark:text-gray-100 md:w-4/6">
        {/* about me */}
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-1">
            <h4>About Me</h4>
            <hr />
          </div>
          <p>{aboutMe}</p>
        </div>
        {/* skills */}
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-1">
            <h4>Skills</h4>
            <hr />
          </div>
          {skills.map((skill, index) => {
            return <p key={index}>{skill}</p>
          })}
        </div>
        {/* professional experiences */}
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-1">
            <h4>Professional Experience</h4>
            <hr />
          </div>
          <div className="flex flex-col space-y-16">
            {professionalExperiences.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex w-full flex-col space-y-2 tracking-wide"
                >
                  <div className="flex flex-col space-y-2">
                    <div className="flex w-full justify-between font-bold uppercase">
                      <h5>{item.position}</h5>
                      <h6>
                        {item.dates} - {item.city}
                      </h6>
                    </div>
                    {item.project && (
                      <div>
                        <p>{item.project}</p>
                      </div>
                    )}
                  </div>
                  <ul className="flex list-disc flex-col space-y-2 pt-4 pl-4 leading-6">
                    {item.description.map((bullet, index) => {
                      return <li key={index}>{bullet}</li>
                    })}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Container>
  </>
)

export default Resume
