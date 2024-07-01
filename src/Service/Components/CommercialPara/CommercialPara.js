import React from 'react'
import './CommercialPara.css'
export default function CommercialPara({name,para}) {
  return (
    <div>
       <ul>
        <li className="commercial">{name}</li>
      </ul>
      <p className="commercial-para">
       {para}
        </p>
    </div>
  )
}
