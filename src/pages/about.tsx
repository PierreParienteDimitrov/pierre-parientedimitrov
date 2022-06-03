import Container from '@/layouts/containers/Container'

const About = () => (
  <Container>
    <div className="m-auto mt-10 flex w-full flex-col space-y-8 md:w-3/6">
      <h2>In construction</h2>
      <div className="flex flex-col space-y-2">
        <h6 className="font-extrabold">2015</h6>
        <p>
          I started my career in San Francisco, as a Strategic Analyst for a
          major international bank. I learned there how to conduct Market
          Research and User Interviews. This lead me to the world of UX/UI
          Design.
        </p>
      </div>
      <div className="flex flex-col space-y-2">
        <h6 className="font-extrabold">2017</h6>
        <p>
          After multiple online trainings and many hours working of different
          projects, I started a new chapter of my career as a Product Designer.
          Over the last five years, I have conceptualised, designed and built
          Mobile Applications, Websites and Web App for a wide range of
          industries.
        </p>
      </div>
      <div className="flex flex-col space-y-2">
        <h6 className="font-extrabold">2020</h6>
        <p>
          In 2020, at the start of the pandemic, I started a Full-Stack Web
          Development Bootcamp with UCLA. I have since then refined my
          engineering skills and worked on multiple web-based projects.
        </p>
      </div>
    </div>
  </Container>
)

export default About
