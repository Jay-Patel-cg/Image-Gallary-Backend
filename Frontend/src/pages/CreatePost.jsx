import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../utils/api'
import PostForm from '../components/PostForm'

function CreatePost() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async (formData) => {
    try {
      setLoading(true)
      setError(null)
      
      console.log('[CreatePost] Submitting post...')
      await api.post('/creat-post', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      console.log('[CreatePost] Post created successfully')
      navigate('/', { state: { refresh: true } })
    } catch (err) {
      console.error('[CreatePost] Error creating post:', err)
      let errorMessage = 'Failed to create post'
      
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

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Create Post</h1>
        <p className="text-gray-600 mt-2">Share your image with the world</p>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-600">{error}</p>
        </div>
      )}

      <PostForm onSubmit={handleSubmit} loading={loading} />
    </div>
  )
}

export default CreatePost
