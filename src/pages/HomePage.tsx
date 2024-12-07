import React from 'react'
import { ImageList, ImageListItem } from '@mui/material'

function HomePage() {
  return (
    <div>
      HomePage
      <ImageList>
        <ImageListItem>
          <img src='https://pixabay.com/get/g2c4c2e0ee147ec6f4d626a146c8977baca0de03a0acbfc8b5e673e079f3b6c04b2a6c284888216e3a9632cc65318cc41958a443c183bf6bfa11bdf268bd092e4_640.jpg' />
        </ImageListItem>
        <ImageListItem>
          <img src='https://pixabay.com/get/g2c4c2e0ee147ec6f4d626a146c8977baca0de03a0acbfc8b5e673e079f3b6c04b2a6c284888216e3a9632cc65318cc41958a443c183bf6bfa11bdf268bd092e4_640.jpg' />
        </ImageListItem>
        <ImageListItem>
          <img src='https://pixabay.com/get/g2c4c2e0ee147ec6f4d626a146c8977baca0de03a0acbfc8b5e673e079f3b6c04b2a6c284888216e3a9632cc65318cc41958a443c183bf6bfa11bdf268bd092e4_640.jpg' />
        </ImageListItem>
      </ImageList>
    </div>
  )
}

export default HomePage