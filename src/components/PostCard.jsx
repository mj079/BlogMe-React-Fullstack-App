import React from 'react'
import appwriteService from '../appwrite/conf'
import { Link } from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
  return (
    <Link to={`/post/${$id}`}>
        <div></div>
    </Link>
  )
}

export default PostCard