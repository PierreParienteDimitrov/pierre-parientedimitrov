import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ICase } from 'types/ICase'

import Container from '@/layouts/containers/Container'
import TwoColsScreen from '@/layouts/grids/TwoColsScreen'
import styles from '@/styles/animations.module.css'
import { tailwindStyles } from '@/utils/tailwindStyles'

import Tag from '../Tag'

interface IDescription {
  project: string
  description: string
  tags: string[]
  href: string
}

const Description: React.FC<IDescription> = ({
  project,
  description,
  tags,
  href,
}) => {
  return (
    <Container>
      <div className="flex w-full flex-col items-start space-y-4">
        <div className="flex flex-col space-y-2">
          <h6 className="font-black uppercase tracking-widest">{project}</h6>
          <h4>{description}</h4>
          <hr className="w-full" />
        </div>
        <div className="flex flex-wrap items-start">
          {tags.map((tag: string, index: number) => (
            <div key={index} className="mr-2 mb-2">
              <Tag tag={tag} />
            </div>
          ))}
        </div>
        <Link href={`${href}`} passHref>
          <h5
            className={`${tailwindStyles.textGradient} uppercase cursor-pointer ${styles['hover-underline-animation']} pt-8`}
          >
            Learn More
          </h5>
        </Link>
      </div>
    </Container>
  )
}

interface IProjectImage {
  alt: string
  src: string
  href: string
}

const ProjectImage: React.FC<IProjectImage> = ({ alt, src, href }) => {
  return (
    <div className="relative shadow-lg md:h-full md:w-full">
      <a href={`${href}`} target="_blank" rel="noreferrer">
        <Image
          src={src}
          alt={alt}
          layout="responsive"
          width={1440}
          height={764}
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 flex cursor-pointer items-center justify-center opacity-0 duration-300 hover:bg-black hover:opacity-90">
          <div className="flex flex-col items-center justify-center space-y-4 text-white">
            <h5 className="font-semibold uppercase tracking-widest">
              See project
            </h5>
          </div>
        </div>
      </a>
    </div>
  )
}

// const Description2: React.FC = () => {
//   return (
//     <Container>
//       <div className="flex w-full flex-col items-start space-y-4">
//         <div className="flex flex-col space-y-2">
//           <h6 className="font-black uppercase tracking-widest">Tempso</h6>
//           <h4>Classical Music Streaming App</h4>
//           <hr className="w-full" />
//         </div>
//         <div className="flex flex-wrap items-start">
//           <div className="mr-2 mb-2">
//             <Tag tag={tags.ur} />
//           </div>
//           <Tag tag={tags.ux} />
//           <Tag tag={tags.ui} />
//         </div>
//         <Link href={`${pageInformation[Routes.TempsoUX]!.path}`} passHref>
//           <h5
//             className={`${tailwindStyles.textGradient} uppercase cursor-pointer ${styles['hover-underline-animation']} pt-8`}
//           >
//             Learn More
//           </h5>
//         </Link>
//       </div>
//     </Container>
//   )
// }

// const ProjectImage2: React.FC = () => {
//   return (
//     <div className="relative w-full shadow-lg">
//       <a
//         href={`${pageInformation[Routes.TempsoUX]!.path}`}
//         target="_blank"
//         rel="noreferrer"
//       >
//         <Image
//           src="/case-study-tempso.png"
//           alt="Tempso Case Study"
//           layout="responsive"
//           width={1440}
//           height={862}
//           objectFit="cover"
//           priority
//         />
//         <div className="absolute inset-0 flex cursor-pointer items-center justify-center opacity-0 duration-300 hover:bg-black hover:opacity-90">
//           <div className="flex flex-col items-center justify-center space-y-4 text-white">
//             <h5 className="font-semibold uppercase tracking-widest">
//               Read Case Study
//             </h5>
//           </div>
//         </div>
//       </a>
//     </div>
//   )
// }

const Preview: React.FC<ICase> = (props) => {
  const { project, description, alt, href, src, tags } = props
  return (
    <div className="flex h-full w-screen items-center py-16 md:py-8">
      <TwoColsScreen
        leftSide={
          <Description
            project={project}
            description={description}
            tags={tags}
            href={href}
          />
        }
        rightSide={<ProjectImage alt={alt} src={src} href={href} />}
        leftDesktopOrder={1}
        leftMobileOrder={1}
        rightMobileOrder={2}
        rightDesktopOrder={2}
      />
    </div>
  )
}

export default Preview
