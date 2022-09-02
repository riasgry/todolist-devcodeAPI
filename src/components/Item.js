import React from 'react'
import { useNavigate } from 'react-router-dom'
import DeleteImg from '../img/trash.png'
import swal from 'sweetalert2'
import axios from 'axios'

function Item({id, title, created_at}) {
    const d = new Date(created_at)
    const Navigate = useNavigate()
    const handleClicked = event =>{
      event.stopPropagation();
      swal.fire({
        icon: 'warning',
        html : "<h3>Apakah anda yakin menghapus activity <br/><b>"+title+"</b> </h3>" ,
        showCancelButton: true,
        reverseButtons:true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#6e7d88',
        cancelButtonText: "Cancel",
        confirmButtonText: 'Hapus',
        preConfirm:async()=>{
          try{
            const response = await axios.delete('https://todo.api.devcode.gethired.id/activity-groups/'+id)
            swal.fire("Activity berhasil di hapus").then(function(){window.location.reload()})
            
            return response.data
            
          }catch (err) {
            console.log(err);
          }
        } 
        
    
    })
  }

  return (
    <div className='card' onClick={()=>{Navigate("/Detail/"+id)}} >
        <h3>{title}</h3>
        <div>
          <p>{d.getDate()+' '+d.toLocaleString("default", {month: "long"})+' '+d.getFullYear()}</p>
          <img src={DeleteImg} alt="" onClick={handleClicked}/>
        </div>
        
       </div>
  )
}

export default Item