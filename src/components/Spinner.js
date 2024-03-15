import React from 'react'
import loading from './loading.svg';

const Spinner = (props) => {
  return (
    <>
    <div className='d-flex justify-content-center '>
      <img alt='loading' src={loading}></img>
    </div>
    <p style={{textAlign: 'center', color: 'white'}}>{props.message}</p>
    </>
  )
}

export default Spinner
