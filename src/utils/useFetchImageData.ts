import { useState, useEffect } from 'react'

const BASE_URL = 'https://pixabay.com/api/'
const API_KEY = import.meta.env.VITE_PIXABAY_API

interface FetchedData {
  hits: FetchedImage[];
  total: number;
  totalHits: number;
}

interface FetchedImage {
  collections: number;
  comments: number;
  downloads: number;
  id: number;
  imageHeight: number;
  imageSize: number;
  imageWidth: number;
  largeImageURL: string;
  likes: number;
  pageURL: string;
  previewHeight: number;
  previewURL: string;
  previewWidth: number;
  tags: string;
  type: string;
  user: string;
  userImageURL: string;
  user_id: number;
  views: number;
  webformatHeight: number;
  webformatURL: string;
  webformatWidth: number;
}

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
    }

    getImageData()
  }, [searchParams, page, category])

  return { data, page, category }
}

export default useFetchImageData