import React, { useState } from 'react'
import { ImageList, ImageListItem, ImageListItemBar, Button, ButtonGroup, TextField, Pagination, useMediaQuery } from '@mui/material'
import { Link } from 'react-router-dom'
import useFetchImageData from '../utils/useFetchImageData'
import { FetchedData } from '../interfaces/Interfaces'

function HomePage() {
  const [imageData, setImageData] = useState('')
  const [inputData, setInputData] = useState<string>('')
  const [currentPage, setCurrentPage] = useState(1)
  const [searchCategory, setSearchCategory] = useState<string>('')

  const fetchedData = useFetchImageData(imageData, currentPage, searchCategory)
  const screenMediaQuery = useMediaQuery('(min-width: 768px)')

  const handleInputData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputData(event.target.value)
  }

  const handleSearchClick = () => {
    setImageData(inputData)
    setCurrentPage(1)
    setSearchCategory('')
  }

  const handleCategoryClick = (event: React.UIEvent<HTMLButtonElement>) => {
    setSearchCategory(event.currentTarget.innerText.toLowerCase())
    setCurrentPage(1)
  }

  const storedImages: FetchedData = JSON.parse(localStorage.getItem('imagesArray') || 'false')

  const imagesArray = fetchedData && fetchedData.data.hits
  const fetchedHits = fetchedData && fetchedData.data.totalHits
  const fetchedPages = Math.ceil(fetchedHits / imagesArray?.length)
  
  return (
    <div>
      <div>
        <TextField style={ screenMediaQuery ? {} : { width: '-webkit-fill-available' } } size='small' variant='outlined' value={inputData} onChange={handleInputData} />
        <Button style={ screenMediaQuery ? { marginLeft: '5px'} : { display: 'block', width: '-webkit-fill-available', marginTop: '5px', marginBottom: '5px' }} size='large' variant='contained' onClick={() => {handleSearchClick()}}>Search</Button>
      </div>
      <ButtonGroup variant='text'>
        <Button size='small' onClick={handleCategoryClick}>fashion</Button>
        <Button size='small' onClick={handleCategoryClick}>nature</Button>
        <Button size='small' onClick={handleCategoryClick}>science</Button>
        <Button size='small' onClick={handleCategoryClick}>education</Button>
        <Button size='small' onClick={handleCategoryClick}>backgrounds</Button>
      </ButtonGroup>
      <ImageList gap={4} cols={screenMediaQuery ? 4 : 1} rowHeight={320} variant='masonry'>
        <>
          {storedImages.hits?.map((data) => {
            return (
              <Link key={data.id} to={`/${data.id}`} state={{ homePage: { data } }}>
                <ImageListItem key={data.id}>
                  <img key={data.id} src={data.webformatURL} />
                  <ImageListItemBar 
                    title={`${data.likes} Likes`}
                  />
                </ImageListItem>
              </Link>
            )
          })}
        </>
      </ImageList>
      {fetchedPages ? <Pagination style={{ justifyContent: 'center', display: 'flex' }} page={currentPage} count={fetchedPages ? fetchedPages : 0} onChange={(_, newPage) => {setCurrentPage(newPage)}} /> : null}
    </div>
  )
}

export default HomePage