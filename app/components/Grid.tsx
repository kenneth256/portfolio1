import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { data } from '@/data'

const Grid = () => {
  return (
    <section id='About'>
      <BentoGrid>

        {
            data.map(({description, id, title, titleClassName, spareImg, img, imgClassName,  className}) => {
                return (
                    <BentoGridItem id={id}  description={description}  
                    key={id} title={title} 
                    img={img} 
                    className={className}
                    imgClassName={imgClassName}
                    />
                )
            })
        }
      </BentoGrid>
    </section>
  )
}

export default Grid
