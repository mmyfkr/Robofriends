import React from 'react';



const Card = ({name, email, id}) =>{
 
    return (
        <div className='bg-light-green dib br3 pa ma2 grow bw2 shadow-2 tc card-container'>
            <img src={`https://robohash.org/${id}?200x200`} alt='robot' />
            <div>
                <h2 className='f3'>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card