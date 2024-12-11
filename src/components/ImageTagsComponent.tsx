import React from 'react'

import './ImageTagsComponent.scss'

interface Props {
  children: React.ReactNode
}

function ImageTagsComponent({ children }: Props) {

  return (
    <div className='image-tags-wrapper'>
      <div>
        {children}
      </div>
    </div>
  )
}

export default ImageTagsComponent