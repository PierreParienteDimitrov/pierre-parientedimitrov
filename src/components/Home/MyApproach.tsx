import React from 'react'

import Container from '@/layouts/containers/Container'
import { myApproach } from '@/utils/myApproach'

const MyApproach = () => {
  return (
    <Container>
      <section className="overflow-scroll">
        <div className="flex items-center whitespace-nowrap">
          <div className="flex flex-col space-y-8 bg-white p-8 shadow-md">
            <h3>My Approach</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              illum, minus quis doloremque a consequuntur accusamus ipsam
              similique aut! Natus laboriosam iste nihil laborum reiciendis
              voluptatum reprehenderit placeat necessitatibus hic.
            </p>
          </div>

          {myApproach.map((item, index) => {
            return (
              <div
                className="flex flex-col space-y-8 bg-white p-8 shadow-md"
                key={index}
              >
                <h3>{item.title}</h3>
                <ul>
                  {item.bullets.map((bullet, index) => {
                    return <li key={index}>{bullet}</li>
                  })}
                </ul>
              </div>
            )
          })}
        </div>
      </section>
    </Container>
  )
}

export default MyApproach
