import Container from '@/layouts/containers/Container'
import { aboutMe, professionalExperiences } from '@/utils/aboutMe'

const About = () => (
  <Container>
    <div className="m-auto mt-10 flex w-full flex-col space-y-16 md:w-4/6">
      {/* about me */}
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-1">
          <h4>About Me</h4>
          <hr />
        </div>
        <p>{aboutMe}</p>
      </div>
      {/* professional experiences */}
      <div className="flex flex-col space-y-1">
        <h4>Professional Experience</h4>
        <hr />
      </div>
      <div className="flex flex-col space-y-20">
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
  </Container>
)

export default About
