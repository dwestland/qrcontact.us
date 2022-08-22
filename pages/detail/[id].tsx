import React from 'react'
import { useQuery } from 'react-query'
import { useRouter } from 'next/router'
import Navbar from '@/components/Navbar'

interface Article {
  article: {
    id: number
    body: string
    title: string
    author: {
      name: string
      email: string
    }
  }
}

const Details = () => {
  const router = useRouter()
  const { id } = router.query

  const fetchArticle = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/blog/${+id}`)
    return res.json()
  }

  const { data, error, isLoading, isError } = useQuery<Article, Error>(
    'article',
    fetchArticle
    // { staleTime: 2000 }
  )
  console.log('%c data ', 'background: red; color: white', data)
  if (isLoading) {
    return (
      <div className="container">
        <Navbar />
        <span>Loading...</span>
      </div>
    )
  }

  if (isError) {
    return <span>Error: {error?.message}</span>
  }
  console.log(
    '%c data.article ',
    'background: blue; color: white',
    data.article
  )
  const { title, body, author } = data.article
  const bestName = author.name ?? author.email

  return (
    <div className="container">
      <Navbar />
      <h1>Blog details</h1>
      <h2>{title}</h2>
      <p>
        By <i>{bestName}</i>
      </p>
      <p>{body}</p>
    </div>
  )
}
export default Details
