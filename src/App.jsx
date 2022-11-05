import { useState, useEffect } from 'react'
import './App.css'
import DogImage from './components/DogImage/DogImage'
import GenerateImageButton from './components/GenerateImageButton/GenerateImageButton'
import axios from 'axios'
import LoadingImg from './components/LoadingImg/LoadingImg'

function App() {
  const [imgUrl, setImgUrl] = useState(
    'https://images.dog.ceo/breeds/terrier-tibetan/n02097474_3661.jpg',
  )
  const [loading, setLoading] = useState(false)
  const sleep = async () => new Promise((resolve) => setTimeout(resolve, 5000))

  const requestAPI = async () => {
    setLoading(true)
    try {
      const res = await axios.get(`https://dog.ceo/api/breeds/image/random`, {
        headers: {},
        params: {},
      })
       await sleep()
      setImgUrl(res.data.message)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    setLoading(false)
  }, [imgUrl])

  return (
    <main className="App">
      <GenerateImageButton requestAPI={requestAPI} />
      {loading ? <LoadingImg /> : <DogImage imgUrl={imgUrl} />}
    </main>
  )
}

export default App
