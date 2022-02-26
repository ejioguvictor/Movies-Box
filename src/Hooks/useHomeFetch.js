import { useState, useEffect } from 'react'
import apiSettings from '../API'

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0
}

export const useHomeFetch = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [state, setState] = useState(initialState)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)


  const fetchMovies = async (page, searchTerm = '') => {
    try {
      setError(false)
      setIsLoading(true)

      const movies = await apiSettings.fetchMovies(searchTerm, page)

      setState(prev => ({
        ...movies,
        results:
          page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
      }))

    } catch (error) {
      setError(true)
    }
    setIsLoading(false)
  }

  //initial rendering and search
  useEffect(() => {
    setState(initialState)
    fetchMovies(1, searchTerm)
  }, [searchTerm])

  return { state, isLoading, error, searchTerm, setSearchTerm }
}