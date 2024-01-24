import React, { useState } from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddUnit = () => {
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');
  const [movement, setMove] = useState('');
  const [toughness, setTough] = useState('');
  const [wounds, setWounds] = useState('');
  const [unitSave, setSave] = useState('');
  const [unitAbility, setAbility] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSaveUnit = () => {
    const data = {
      name,
      cost,
      movement,
      toughness,
      wounds,
      unitSave,
      unitAbility,
    };
    setLoading(true);
    axios
      .post('http://localhost:5555/units', data)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        alert('An error occured. Please check console.');
        console.log(error);
      })
  };

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Create Unit</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Name</label>
          <input 
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Cost</label>
          <input 
            type='number'
            value={cost}
            onChange={(e) => setCost(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Movement</label>
          <input 
            type='number'
            value={movement}
            onChange={(e) => setMove(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Toughness</label>
          <input 
            type='number'
            value={toughness}
            onChange={(e) => setTough(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Wounds</label>
          <input 
            type='number'
            value={wounds}
            onChange={(e) => setWounds(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Save</label>
          <input 
            type='text'
            value={unitSave}
            onChange={(e) => setSave(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Abilities</label>
          <textarea 
            type='text'
            value={unitAbility}
            onChange={(e) => setAbility(e.target.value)}
            className='border-2 border-gray-500 h-36 px-4 my-4 w-full'
          />
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleSaveUnit}>Save</button>
      </div>
    </div>
  )
}

export default AddUnit