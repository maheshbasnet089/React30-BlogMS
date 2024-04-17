import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Layout from '../../components/layout/Layout'
import Form from './components/form/Form'
import axios from 'axios'
import { baseUrl } from '../../config'
import { useNavigate } from 'react-router-dom'

const AddBlog = () => {
  const navigate = useNavigate()
  const handleCreateBlog = async (data)=>{
    try {
      const response = await axios.post(`${baseUrl}/blog`,data,{
        headers : {
          "Content-Type" : "multipart/form-data",
          "Authorization" : localStorage.getItem('token')
        }
      })
      if(response.status === 201){
       navigate('/')
      }else{
        alert("Something went wrong")
      }
    } catch (error) {
      alert(error?.response?.data?.message)
    }
  }
  return (
  <Layout>
	<Form type='Create' onSubmit={handleCreateBlog} />
  </Layout>
  )
}

export default AddBlog