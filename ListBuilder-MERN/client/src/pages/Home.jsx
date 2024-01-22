import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom'
import { AiOutlineEdit } from 'react-icons/ai';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

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

console.log(units)

  return (
    <div className='p-4'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8'>Units List</h1>
        <Link to={'/units/create'}>
          <MdOutlineAddBox className='text-sky-800 text-4xl'/>
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <table className='w-full border-seperate border-spacing-2'>
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
                <td className='border border-slate-700 rounded-md'>{unit.name}</td>
                <td className='border border-slate-700 rounded-md'>{unit.cost}</td>
                <td className='border border-slate-700 rounded-md'>
                  <div className='flex justify-center gap-x-4'>
                    <Link to={`/units/edit/${unit._id}`}>
                      <AiOutlineEdit className='text-2xl text-yellow-600' />
                    </Link>
                    <Link to={`/units/delete/${unit._id}`}>
                      <MdOutlineDelete className='text-2xl text-red-600' />
                    </Link>
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