import React from 'react'
import { Avatar, Stack } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'

function ImagePage() {
  const location = useLocation()

  const { homePage } = location.state
  const { data } = homePage

  return (
    <Stack spacing={2}>
      <Link to={'/'}>Back</Link>
      <img src={data.largeImageURL} />
      <Avatar sx={{ width: 56, height: 56 }} src={data.userImageURL} />
      <span>{data.user}</span>
      <span>{data.tags}</span>
    </Stack>
  )
}

export default ImagePage