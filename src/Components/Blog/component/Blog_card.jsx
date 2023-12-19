import React from 'react'

export default function Blog_card({data}) {
  const keys_data = Object.keys(data)

  return (
    <div>
      {keys_data.map((key,index)=>{
        return (<div key={key}>{key} : {data[key]}</div>)
      })} 
    </div>
  )
}
