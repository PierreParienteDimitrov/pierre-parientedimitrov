import Image from 'next/image'
import React from 'react'
import { IUseCasesItems } from 'types/ICase'

// const ProjectDescription: React.FC<IDescription> = ({
//   year,
//   platform,
//   title,
//   description,
//   href,
//   button,
//   external,
//   projectType,
//   tags,
//   client,
// }) => {
//   const border =
//     projectType === 'design' ? 'border-primary' : 'border-secondary'
//   const textColor = projectType === 'design' ? 'text-primary' : 'text-secondary'

//   const backgroundHover =
//     projectType === 'design' ? 'hover:bg-primary' : 'hover:bg-secondary'

//   return (
//     <div className="flex flex-col items-start space-y-8 dark:text-gray-100">
//       <div className="flex flex-col items-start space-y-4">
//         <h6 className={`font-semibold uppercase tracking-wider ${textColor}`}>
//           {client} ({year}) • {platform}
//         </h6>
//         <div className="flex flex-col space-y-2">
//           <h4 className="">{title}</h4>
//           <p className="text-gray-600 dark:text-gray-500">{description}</p>
//         </div>
//       </div>
//       <div className="flex space-x-2">
//         {tags.map((item) => (
//           <Tag key={item} tag={item} />
//         ))}
//       </div>
//       <div
//         className={`px-4 py-2 border ${border} ${textColor} bg-white cursor-pointer transition delay-50 duration-300 ease-in-out ${backgroundHover} hover:text-white dark:bg-gray-800`}
//       >
//         <a href={href} target={external ? '_blank' : ''} rel="noreferrer">
//           <h6 className="uppercase tracking-widest">{button}</h6>
//         </a>
//       </div>
//     </div>
//   )
// }

const UseCases: React.FC<{
  useCasesItems: IUseCasesItems[]
  title: string
  button: string
  projectType: string
}> = ({ useCasesItems, title, projectType }) => {
  const textColor = projectType === 'design' ? 'text-primary' : 'text-secondary'
  return (
    <div className="flex flex-col space-y-8">
      <h2 className={`font-thin capitalize tracking-wide ${textColor}`}>
        {title}{' '}
      </h2>
      <div className="flex w-full flex-wrap">
        {useCasesItems.map((element, index) => {
          return (
            <div
              key={index}
              className="flex w-full flex-col space-y-4 pb-16 md:w-1/2 md:pr-8"
            >
              <a
                href={element.href}
                target={element.external ? '_blank' : ''}
                rel="noreferrer"
              >
                <div className="relative">
                  <Image
                    src={element.src}
                    alt={element.alt}
                    layout="responsive"
                    width={640}
                    height={383}
                    objectFit="cover"
                    priority
                  />
                  <div className="absolute inset-0 flex cursor-pointer items-center justify-center pr-4 pb-4 opacity-0 duration-300 hover:bg-black hover:opacity-90">
                    <div className="flex flex-col items-center justify-center space-y-4 text-white">
                      <h3>{element.title}</h3>
                      <h6 className="uppercase">{element.client}</h6>
                    </div>
                  </div>
                </div>
              </a>
              {/* <ProjectDescription
                year={element.year}
                platform={element.platform}
                title={element.title}
                description={element.description}
                projectType={element.projectType}
                href={element.href}
                button={button}
                external={element.external}
                tags={element.tags}
                client={element.client}
              /> */}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default UseCases
