import React from 'react'

export default function Blog_card({ data }) {
  let headerText = Object.keys(data.data.blocks)
    .map((key) => data.data.blocks[key])
    .find((block) => block.type === "header");
  let headerTextValue = headerText ? headerText.data.text : null;

  return (
    <div>
      <div className="container">
        <h6>{data["userId"]}</h6>
        <small>{data["lastUpdatedDate"]}</small>
        <h3>{headerTextValue}</h3>
      </div>
    </div>
  )
}
