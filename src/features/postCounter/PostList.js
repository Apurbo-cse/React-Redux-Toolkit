import React from 'react'
import { useSelector } from 'react-redux'

const PostList = () => {

const posts = useSelector(state => state.posts)

  return (
    <div>PostList</div>
  )
}
export default PostList
