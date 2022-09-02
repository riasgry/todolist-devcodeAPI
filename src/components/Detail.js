import React from 'react'
import {useState} from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import useFetch from './useFetch'
import FormAddList from './FormAddList'
import axios from 'axios'

function Detail() {
    const {id} = useParams();
    const Navigate = useNavigate()
    const [show, isShow] = useState(false)
    const [inputTitle, setInputTitle] = useState(false)
    const handleClicked = event =>{
      (!show)?isShow(true):isShow(false);
    }
    const {data,setData} = useFetch('https://todo.api.devcode.gethired.id/activity-groups/'+id)
    
    const dataUpdate = {
      title : data?.title
    }
    const HandleChangeTitle=(event)=>{
      dataUpdate.title=event.target.value
    }

    const handleClickedTitle = event =>{
      event.stopPropagation();
      setInputTitle(true)
    }
    const cancelHandleTitle = async() =>{
      setInputTitle(false);
      if(dataUpdate.title!==null&&dataUpdate.title!==data.title){
        try{
          const response = await axios.patch('https://todo.api.devcode.gethired.id/activity-groups/'+id,dataUpdate)
          setData(response.data)
          return data
        }catch(err){
          console.log(err)
        }
      }
    }


  return (
    <div className='detail-container' onClick={cancelHandleTitle}>
      <h3 onClick={()=>Navigate('/')}>Back</h3>
        <div className="head">
          <div  onClick={handleClickedTitle}>
            {
              inputTitle ? (
                <input type="text" defaultValue={data?.title} onChange={HandleChangeTitle}/>
              ):(<h2>{data?.title}</h2>)
            }
          <h4>change</h4>
          </div>
         
          <button onClick={handleClicked}>+ Tambah</button>
          {
            show && (
              <FormAddList handleClicked={handleClicked} />
            )
          }
        </div>
        
    </div>
  )
}

export default Detail