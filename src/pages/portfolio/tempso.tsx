import React from 'react'

import { ICarousel } from '@/../types/ICarousel'
import Carousel from '@/components/Carousel'
import Container from '@/layouts/containers/Container'

const TEMPSO: ICarousel[] = [
  {
    title: 'tempso1',
    src: '/Slide1.png',
    alt: 'alt1',
  },
  {
    title: 'tempso2',
    src: '/Slide2.png',
    alt: 'alt1',
  },
  {
    title: 'tempso3',
    src: '/Slide3.png',
    alt: 'alt3',
  },
  {
    title: 'tempso4',
    src: '/Slide4.png',
    alt: 'alt4',
  },
  {
    title: 'tempso5',
    src: '/Slide5.png',
    alt: 'alt5',
  },
  {
    title: 'tempso6',
    src: '/Slide6.png',
    alt: 'alt6',
  },
  {
    title: 'tempso7',
    src: '/Slide7.png',
    alt: 'alt7',
  },
]

const Tempso: React.FC = () => {
  return (
    <Container>
      {/* carousel */}
      <Carousel carouselItems={TEMPSO} />

      {/* title */}
      <div className="flex w-full flex-col space-y-1">
        <h2>TEMPSO</h2>
        <h6>DESIGNED BY PIERRE PARIENTE DIMITROV</h6>
      </div>
      <div className="flex flex-col space-y-2 md:flex-row">
        {/* left side */}
        <div className="order-2 pr-36 md:order-1 md:w-4/6">
          <div>
            <p>
              Tempso is a live Classical Music Streaming Mobile App, fully
              integrated with Spotify and Apple Music. My task was to design a
              mobile application where a user could discover and browse the
              classical music catalogue, compare recordings and save recordings
              and playlists to a library
            </p>
          </div>
          <div className="flex flex-col space-y-2">
            <div>
              <h3>Process</h3>
              <p>
                As the sole UX/UI designer and researcher, my goal was to create
                a user-centered design for Tempso by spending extra time with
                researching and iterating designs based on usability testings.
                Thus, the process was divided into the following steps:
              </p>
            </div>
            <div>
              <h3>Research</h3>
              <p>
                I spent a full month conducting user research with musicians,
                classical music amateurs and music streaming users through
                interviews to understand user’s experience with classical music
                streaming. I also reviewed secondary research and user comments
                about existing solutions for classical music streaming on forums
                and blogs.
              </p>
              <p>
                My hypothesis was that a majority of users would listen to
                classical music only if they were already very familiar with the
                genre, but I was surprised to find in my research that over half
                of potential users did not have a strong relationship to
                classical music and were curious to discover it. The largest
                complaint found in research was that users, both classical music
                specialists and non-specialists, didn’t know how to find
                classical music recordings or where to start.
              </p>
            </div>

            {/* Pain Points */}
            <div>
              <h3>Pain Points</h3>
              <div className="flex flex-col space-y-4">
                <div>
                  <h4>Accuracy</h4>
                  <p>
                    Classical music specialists who didn’t stream classical
                    music said their reasoning was that they could never get a
                    clear picture of what recording they were listening too.
                    “Why is the composer tagged as a performer? Why can’t I find
                    the complete list of performers for this recording?” were
                    common comments addressed to mainstream music streaming
                    platforms. I decided to change this by building a complete
                    classical music data architecture which would guide the
                    design process.
                  </p>
                </div>
                <div>
                  <h4>Exhaustivity</h4>
                  <p>
                    Classical music specialists felt like they could never
                    browse the complete discography of a performer, nor the
                    complete list of compositions from a composer. They could
                    also never compare easily different recordings of the same
                    composition and select their preferred version.
                  </p>
                </div>
                <div>
                  <h4>Discovery</h4>
                  <p>
                    Non-specialists classical music listeners felt like it was
                    extremely difficult to know where to start their journey on
                    mainstream music streaming apps. They felt like they were
                    left with limited choices with compilations such as “Relax
                    with Mozart” or intimidating classical music albums where
                    they did not understand the track titles. They wanted to
                    discover and explore classical music but “did not know where
                    to start”.
                  </p>
                </div>
              </div>
            </div>

            {/* Define */}
            <div>
              <h3>Define</h3>
              <p>
                I began the defining stage by creating multiple personas based
                on users interviewed during the research stage.
              </p>
              <p>IMAGE</p>
              <p>
                My biggest takeaway from research was that users wanted
                different type of experience for a classical music streaming
                app.
              </p>
              <p>
                Musicians and experimented classical music listeners wanted the
                ability to deep dive into the catalogue, explore performer’s
                discographies, composer’s catalogues, compare recordings,
                explore genres. This category of users wanted to be allowed to
                explore the catalogue through different data points, but did not
                need suggestions and recommendations on what to listen to.
              </p>
              <p>
                First-time listeners wanted to know where to start and what to
                listen to. They are not independent listeners and need help to
                turn on the music.
              </p>
              <p>
                To answer bot of those needs, I decided to list desired actions
                for both personas and build user journey:
              </p>
              <p>USER JOURNEY 1</p>
              <p>USER JOURNEY 2</p>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="order-1 md:relative md:order-2 md:w-2/6">
          <ul className="md:sticky md:top-16">
            <li>
              <h5>Year</h5>
              <hr />
              <p>2022</p>
            </li>
            <li>
              <h5>Role</h5>
              <hr />
              <p>UX/UI Designer</p>
            </li>
            <li>
              <h5>Technology</h5>
              <hr />
              <p>Sketch, Figma, Illustrator</p>
            </li>
            <li>
              <h5>Research Method</h5>
              <hr />
              <p>Usability Studies, Surveys, Interviews, Preference Tests</p>
            </li>
            <li>
              <h5>Application</h5>
              <hr />
              <p>Live App</p>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  )
}

export default Tempso
