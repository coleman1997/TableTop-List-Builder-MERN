import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';

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
        {loading ? (
            <Spinner />
        ) : (
            <table className='w-full border-separate border-spacing-2'>
                <thead>
                    <tr>
                      <th className='border border-slate-600 rounded-md'>name</th>  
                      <th className='border border-slate-600 rounded-md'>cost</th>
                    </tr>   
                </thead>
                <tbody>
                   {listUnits?.map((listUnit) => (
                    <tr key={listUnit._id} className='h-8'>
                        <td className='border border-slate-700 rounded-md text-center'>{listUnit.unitProfile.name}</td>
                        <td className='border border-slate-700 rounded-md text-center'>{listUnit.unitProfile.cost}</td>
                    </tr>
                   ))} 
                </tbody>
            </table>
        )}
    </div>
  )
}

export default ListDisplay
