import { Avatar, Card, CardHeader, CardContent, Typography, useMediaQuery } from '@mui/material'

interface Props {
  avatarImage: string
  username: string
  imageViews: number
  imageLikes: number
  imageDownloads: number
  imageComments: number
}

function ImageInfoComponent({ avatarImage, username, imageViews, imageLikes, imageDownloads, imageComments }: Props) {
  const screenMediaQuery = useMediaQuery('(min-width: 1024px)')

  return (
    <div>
        <Card sx={ screenMediaQuery ? { display: 'flex' ,flexDirection: 'row', justifyContent: 'space-between' } : { display: 'block', justifyContent: 'center' } } variant='outlined'>
          <CardHeader 
            sx={ screenMediaQuery  ? { justifyContent: 'center' } : { display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
            avatar={
              <>
                <Avatar sx={{ width: 56, height: 56 }} src={avatarImage} />
                <h3>{username}</h3>
              </>
            }
          />
          <CardContent>
            <Typography variant='h6' component='div'>Views: {imageViews}</Typography>
            <Typography variant='h6' component='span'>Likes: {imageLikes}</Typography>
            <Typography variant='h6'>Downloads: {imageDownloads}</Typography>
            <Typography variant='h6'>Comments: {imageComments}</Typography>
          </CardContent>
        </Card>
    </div>
  )
}

export default ImageInfoComponent