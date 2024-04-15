import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import BackButton from '../components/BackButton'
import { Link } from 'react-router-dom'
import { MdOutlineDelete } from 'react-icons/md';

const ListDisplay = () => {
const [loading, setLoading] = useState(false);
const [listUnits, setListUnits] = useState([]);

useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/list')
      .then((response) => {
        setListUnits(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      })
  }, [])

    return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-8'>My List</h1>
        {loading ? (
            <Spinner />
        ) : (
            <table className='w-full border-separate border-spacing-2'>
                <thead>
                    <tr>
                      <th className='border border-slate-600 rounded-md'>name</th>  
                      <th className='border border-slate-600 rounded-md'>cost</th>
                      <th className='border border-slate-600 rounded-md'>Operations</th>
                    </tr>   
                </thead>
                <tbody>
                   {listUnits?.map((listUnit) => (
                    <tr key={listUnit._id} className='h-8'>
                        <td className='border border-slate-700 rounded-md text-center'>{listUnit.unitProfile.name}</td>
                        <td className='border border-slate-700 rounded-md text-center'>{listUnit.unitProfile.cost}</td>
                        <td className='border border-slate-700 rounded-md text-center'>
                          <div className='flex justify-center gap-x-4'>
                            <Link to={`/list/delete/${listUnit._id}`}>
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

export default ListDisplay
