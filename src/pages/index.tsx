import Hero from '@/components/Hero/Hero'
import Container from '@/layouts/containers/Container'

const Index: React.FC = () => {
  return (
    <Container>
      {/* intro */}
      <div className="flex h-screen flex-col space-y-10 pt-36">
        <Hero />
      </div>

      {/* statement */}
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-4/6 md:pr-10">
          <h2>Short Statement</h2>
          <h3>
            Description lorem ipsum dolor sit amet consectetur adipisicing elit.
            Odio, quis.
          </h3>
          <h4>
            Paragraph Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, error?
          </h4>
        </div>
        <div className="w-full bg-slate-50 md:w-2/6">Picture</div>
      </div>

      {/* case studies */}
      <div className="mt-32">
        <h2>Case Studies</h2>
        <div className="flex flex-wrap space-y-4">
          <div className="flex w-full flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
            <div className="h-96 w-full items-center bg-blue-50 md:w-1/2">
              Case 1
            </div>
            <div className="h-96 w-full items-center bg-blue-50 md:w-1/2">
              Case 2
            </div>
          </div>
          <div className="flex w-full flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
            <div className="h-96 w-full items-center bg-blue-50 md:w-1/2">
              Case 1
            </div>
            <div className="h-96 w-full items-center bg-blue-50 md:w-1/2">
              Case 2
            </div>
          </div>
        </div>
      </div>

      {/* testimonials */}
      <div className="mt-32">
        <div className="flex w-full justify-center px-96 text-center">
          <h4>
            Testimonials Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Maxime, pariatur!
          </h4>
        </div>
      </div>
      {/* testimonials */}
      <div className="mt-32 w-full bg-slate-900">
        <div className="flex w-full flex-col justify-center space-y-4 text-center">
          <h2>We would work great together.</h2>
          <p>
            Read about my available services and let’s talk about your interface
            design goals.
          </p>
        </div>
      </div>
    </Container>
  )
}

export default Index
