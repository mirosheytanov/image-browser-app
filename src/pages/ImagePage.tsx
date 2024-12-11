import { Chip, Stack, useMediaQuery } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'
import ImageInfoComponent from '../components/ImageInfoComponent'
import ImageTagsComponent from '../components/ImageTagsComponent'

function ImagePage() {
  const location = useLocation()
  const screenMediaQuery = useMediaQuery('(min-width: 1024px)')

  const { homePage } = location.state
  const { data } = homePage

  return (
    <Stack spacing={2}>
      <Link style={{ border: '1px solid #646cff', borderRadius: '5px'}} to={'/'}>Back</Link>
      <img src={ screenMediaQuery ? data.largeImageURL : data.webformatURL } />
      <ImageTagsComponent>
        <span>Tags: </span>{data?.tags.split(',').map((tag: string) => {
            return <Chip style={{ marginRight: '5px' }} key={tag} label={tag} />
        })}
      </ImageTagsComponent>
      <ImageInfoComponent avatarImage={data.userImageURL} username={data.user} imageViews={data.views} imageLikes={data.likes} imageDownloads={data.downloads} imageComments={data.comments} />
    </Stack>
  )
}

export default ImagePage