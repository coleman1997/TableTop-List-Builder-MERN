import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'


const ListUnitDetails = () => {
  const [unit, setUnits] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/list/${id}`)
      .then((response) => {
        setUnits(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      })
  }, [id])

  return (
    <div className='p-4'>
        <h1 className='text-3xl my-4'>Show Unit</h1>
        {loading ? (
            <Spinner />
        ) : (
            <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
                <div className='my-4'>
                    <span className='text-xl mr-4 text-gray-500'>Id</span>
                    <span>{unit._id}</span>
                </div>
                <div className='my-4'>
                    <span className='text-xl mr-4 text-gray-500'>Name</span>
                    <span>{unit.name}</span>
                </div>
                <div className='my-4'>
                    <span className='text-xl mr-4 text-gray-500'>Cost</span>
                    <span>{unit.cost}</span>
                </div>
                <div className='my-4'>
                    <span className='text-xl mr-4 text-gray-500'>Movement</span>
                    <span>{unit.movement}</span>
                </div>
                <div className='my-4'>
                    <span className='text-xl mr-4 text-gray-500'>Toughness</span>
                    <span>{unit.toughness}</span>
                </div>
                <div className='my-4'>
                    <span className='text-xl mr-4 text-gray-500'>Wounds</span>
                    <span>{unit.wounds}</span>
                </div>
                <div className='my-4'>
                    <span className='text-xl mr-4 text-gray-500'>Save</span>
                    <span>{unit.unitSave}</span>
                </div>
                <div className='my-4'>
                    <span className='text-xl mr-4 text-gray-500'>Unit Ability</span>
                    <span>{unit.unitAbility}</span>
                </div>
            </div>
        )}
    </div>
  )
}

export default ListUnitDetails