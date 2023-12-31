import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom"

const Admin = () => {

    const [queries,setQueries]=useState([])

    const fetchQueries=async()=>{
        const response=await axios.get("")
        const data=await response.data.contacts;
        setQueries(data)
    }

    const handleDelete=async(id)=>{
      const response=await axios.delete('')
      if(response.status ===200){
        fetchQueries();
      }

    }
    const handleUpdate=()=>{
      
    }

    useEffect(()=>{
        fetchQueries();
    },[])
  return (
    <table className="table-auto border-collapse w-full">
  <thead>
    <tr>
      <th className="border px-4 py-2">ID</th>
      <th className="border px-4 py-2">NAME</th>
      <th className="border px-4 py-2">EMAIL</th>
      <th className="border px-4 py-2">IMAGE</th>
      <th className="border px-4 py-2">DELETE</th>
      <th className="border px-4 py-2">UPDATE</th>
    </tr>
  </thead>
  <tbody>
    {queries.map((item) => (
      <tr key={item._id}>
        <td className="border px-4 py-2">{item._id}</td>
        <td className="border px-4 py-2">
          <Link to={`/contact/${item._id}`} className="text-blue-500 hover:underline">
            {item.name}
          </Link>
        </td>
        <td className="border px-4 py-2">{item.email}</td>
        <td className="border px-4 py-2">
          <img src={item.imageUrl} className="w-20 h-20 object-cover" alt={item.name} />
        </td>
        <td className="border px-4 py-2">
          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded" onClick={() => handleDelete(item._id)}>
            Delete
          </button>
        </td>
        <td className="border px-4 py-2">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            Update
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>

  )
}

export default Admin