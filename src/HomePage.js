import {React} from 'react'
import Blogs from './Blogs'
import { useBlogApi } from './api-hooks/useBlogApi'

const HomePage = () => {
  const { blogs, handleDelete } = useBlogApi()


  return (
    <div className="home-page">
        <h1>All Blogs!</h1>
        <Blogs blogs={blogs} handleDelete={handleDelete}/>
    </div>
  )
}

export default HomePage