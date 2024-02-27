import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom'
import { AiOutlineEdit } from 'react-icons/ai';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import { BsInfoCircle } from 'react-icons/bs'
import { BiBookOpen } from 'react-icons/bi'

const Home = () => {
const [units, setUnits] = useState([]);
const [loading, setLoading] = useState(false);

useEffect(() => {
  setLoading(true);
  axios
    .get('http://localhost:5555/units')
    .then((response) => {
      setUnits(response.data);
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
      setLoading(false);
    })
}, [])

const handleAddtoList = (unit) => {
  axios
    .post('http://localhost:5555/list', {
      unitProfile: unit
    })
    .then(() => {
      setLoading(false);
      alert('Unit Added!')
    })
    .catch((error) => {
      setLoading(false);
      alert('An error occured. Please check console.');
      console.log(error);
    })
}

console.log(units)

  return (
    <div className='p-4'>
      <div className='flex items-center'>
        <h1 className='text-3xl my-8'>Added Units</h1>
        <Link to={'/units/create'}>
          <MdOutlineAddBox className='text-sky-800 text-4xl'/>
        </Link>
        <Link to={'/list'}>
          <BiBookOpen className='text-sky-800 text-4xl'/>
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <table className='w-full border-separate border-spacing-2'>
          <thead>
            <tr>
            <th className='border border-slate-600 rounded-md'>Name</th>
            <th className='border border-slate-600 rounded-md'>Cost</th>
            <th className='border border-slate-600 rounded-md'>Operations</th>
            </tr>
            </thead>
          <tbody>
            {units?.map((unit) => (
              <tr key={unit._id} className='h-8'>
                <td className='border border-slate-700 rounded-md text-center'>{unit.name}</td>
                <td className='border border-slate-700 rounded-md text-center'>{unit.cost}</td>
                <td className='border border-slate-700 rounded-md text-center'>
                  <div className='flex justify-center gap-x-4'>
                    <Link to={`/units/details/${unit._id}`}>
                      <BsInfoCircle className='text-2xl text-yellow-600' />
                    </Link>
                    <Link to={`/units/edit/${unit._id}`}>
                      <AiOutlineEdit className='text-2xl text-yellow-600' />
                    </Link>
                    <Link to={`/units/delete/${unit._id}`}>
                      <MdOutlineDelete className='text-2xl text-red-600' />
                    </Link>
                    <MdOutlineAddBox className='text-sky-800 text-2xl' onClick={() => handleAddtoList(unit._id)}/>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default Home 