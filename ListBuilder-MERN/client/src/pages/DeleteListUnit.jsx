import React, { useState } from 'react'
import Spinner from '../components/Spinner'
import BackButton from '../components/BackButton'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';

const DeleteListUnit = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const handleDeleteUnit = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/list/${id}`)
      .then(() => {
        setLoading(true);
        navigate('/list');
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      })
  }
  return (
    <div className='p-4' >
      <BackButton />
      <h1 className='text-3xl my-4'>Delete Unit</h1>
      {loading ? <Spinner /> : '' }
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl'>Are you sure you want to delete this unit?</h3>
        <button className='p-4 bg-red-600 text-white m-8 w-full' onClick={handleDeleteUnit}>
          Yes, delete it.
        </button>
      </div>
    </div>
  )
}

export default DeleteListUnit