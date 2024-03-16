import React, { useState } from 'react'
import { useEffect } from 'react';
import BackButton from '../components/BackButton'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import Spinner from '../components/Spinner'
const ShowBook = () => {

  const [book, setBook] = useState({});
  const[loading, setLoading] = useState(false);
  const {id}= useParams();

useEffect(()=>{
setLoading(true);
axios.get(`http://localhost:5555/books/${id}`)
.then((response)=>{
  setBook(response.data);
  setLoading(false)
})
.catch((error)=>{
  console.log(error);
});
},[])

  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>
        Show Book
      </h1>
      {loading ?(
        <Spinner/>
       
      ):(
        <div class="flex flex-col border border-sky-400 rounded-xl p-6">
        <div class="my-2">
            <span class="text-xl mr-4 text-gray-500">Id</span>
            <span>{book._id}</span>
        </div>
    
        <div class="my-2">
            <span class="text-xl mr-4 text-gray-500">Title</span>
            <span>{book.title}</span>
        </div>
    
        <div class="my-2">
            <span class="text-xl mr-4 text-gray-500">Author</span>
            <span>{book.author}</span>
        </div>
    
        <div class="my-2">
            <span class="text-xl mr-4 text-gray-500">Publish Year</span>
            <span>{book.publishYear}</span>
        </div>
    
        <div class="my-2">
            <span class="text-xl mr-4 text-gray-500">Create Time</span>
            <span>{new Date(book.createdAt).toLocaleString()}</span>
        </div>
    
        <div class="my-2">
            <span class="text-xl mr-4 text-gray-500">Last Update Time</span>
            <span>{new Date(book.updatedAt).toLocaleString()}</span>
        </div>
    </div>
    
      )}
    </div>
  )
}

export default ShowBook