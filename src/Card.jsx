import React from 'react'

function Card({props}) {
  return (
  <div className='cards'>
    {props?.map((user) => (
          <div className="card">
            <img src={user.img_src}/>
            <p>Photo {user.id}</p>
          </div>
        ))}
    </div>
  )
}

export default Card