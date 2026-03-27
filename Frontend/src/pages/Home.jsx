import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import api from '../utils/api'
import PostCard from '../components/PostCard'
import PostList from '../components/PostList'

function Home() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const location = useLocation()

  const fetchPosts = async () => {
    try {
      setError(null)
      console.log('[Home] Fetching posts...')
      const res = await api.get('/posts')
      console.log('[Home] Posts received:', res.data)
      setPosts(res.data?.posts || res.data || [])
    } catch (err) {
      console.error('[Home] Error fetching posts:', err)
      let errorMessage = 'Failed to fetch posts'
      
      if (err.code === 'ERR_NETWORK' || err.message === 'Network Error') {
        errorMessage = 'Network Error: Unable to connect to server. Please ensure the backend is running on port 3000.'
      } else if (err.response) {
        errorMessage = err.response.data?.message || `Server error: ${err.response.status}`
      } else if (err.request) {
        errorMessage = 'No response from server. Please check if the backend is running.'
      } else {
        errorMessage = err.message || 'An unexpected error occurred'
      }
      
      setError(errorMessage)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    setLoading(true)
    fetchPosts().finally(() => setLoading(false))
  }, [location.state])

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Latest Posts</h1>
        <p className="text-gray-600 mt-2">Discover amazing images from our community</p>
      </div>
      
      <PostList
        posts={posts}
        loading={loading}
        error={error}
        onRetry={fetchPosts}
      />
    </div>
  )
}

export default Home
