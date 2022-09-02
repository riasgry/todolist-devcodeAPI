import axios from 'axios';
import React from 'react'
import EmptyImg from '../img/empty.png'
import Item from './Item';
import useFetch from './useFetch'

function ListItem() {
  
    const {data,loading,error} = useFetch('https://todo.api.devcode.gethired.id/activity-groups?email=luhur.hidayatar@gmail.com')
    if(loading) return <h1>Loading...</h1>
    if(error) console.log(error);
    const addActivity = async()=>{
        const dataUpdate = {
          title: "My Activity",
          email: "luhur.hidayatar@gmail.com",
          _comment: "email digunakan untuk membedakan list data yang digunakan antar aplikasi" 
        }
        try{
          const response = await axios.post('https://todo.api.devcode.gethired.id/activity-groups',dataUpdate)
          window.location.reload()
          return response.data
        } catch(err){
          console.log(err)
        }
        
    }
   
    
  return (
    <div className='dashboard'>
        <div className="container">
          <h2>Activity</h2>
          <button onClick={addActivity}>+ Tambah</button>
        </div>
        <div className="card-list">
        {
          data?.data.length>0?(
            data?.data.map((datas)=> <Item key={datas.id} {...datas} />)
          ):(
            <img src={EmptyImg} alt="" />
          )
        }
        </div>
        
    </div>
  )
}

export default ListItem