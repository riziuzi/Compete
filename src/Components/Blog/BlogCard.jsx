import React, { useState } from 'react'
import EditorReadOnly from '../Editor/EditorReadOnly'

export default function BlogCard({index, data }) {
  const [dummy, setDummy] = useState(false)
  let headerText = Object.keys(data.data.blocks)
    .map((key) => data.data.blocks[key])
    .find((block) => block.type === "header");
  let headerTextValue = headerText ? headerText.data.text : null;
  const handleBlogOnClick = () => {
    setDummy((prev) => !prev)
  }
  return (
    <div>
      {!dummy ? (<div><button onClick={handleBlogOnClick}>
        <div className="container">
          <h6>{data["userId"]}</h6>
          <small>{data["lastUpdatedDate"]}</small>
          <h3>{headerTextValue}</h3>
        </div>
      </button></div>) : (<div>
        <button onClick={handleBlogOnClick}>
          <EditorReadOnly index={index} data={data.data} />
        </button></div>)
      }
    </div>
  )
}
