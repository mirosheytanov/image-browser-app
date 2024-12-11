import { useState, useEffect } from 'react'
import { FetchedData } from '../interfaces/Interfaces'

const BASE_URL = 'https://pixabay.com/api/'
const API_KEY = import.meta.env.VITE_PIXABAY_API

function useFetchImageData(searchParams: string, page: number, category: string) {
  const [data, setData] = useState<FetchedData>(Object)

  useEffect(() => {

  const getImageData = async () => {
      if(searchParams?.trim() === '' && category === '' && category === category) {
        return
      }

      const q = searchParams?.split(' ').join('+')
      const fetchImageData = await fetch(`${BASE_URL}?key=${API_KEY}&q=${q}&category=${category}&page=${page}&per_page=12&image_type=photo&safesearch=true`)
      const imageData = await fetchImageData.json()
      setData(imageData)
      localStorage.setItem('imagesArray', JSON.stringify(imageData))
    }

    getImageData()
  }, [searchParams, page, category])

  return { data, page, category }
}

export default useFetchImageData