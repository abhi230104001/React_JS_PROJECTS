import React,{useEffect,useState} from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
  const data = useLoaderData()
  // const [data,setData] = useState([]);
  // useEffect(()=>{
  //   fetch('https://api.github.com/users/hiteshchoudhary')
  //   .then(Response => Response.json())
  //   .then(data =>{
  //     console.log(data);
  //     setData(data)
  //   })

  // },[])
    
    
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
     <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}
/// we call api  from here and take data of api by using Loader 
export default Github

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/Abhishek230104001')
  return response.json()
}

