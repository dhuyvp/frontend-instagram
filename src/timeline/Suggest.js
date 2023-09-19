import React from 'react'
import './Suggest.css'
import { Avatar } from '@mui/material'

function Suggest() {
  return (
    <div className='suggestions'>
      <div className='suggestions__title'>Suggestions for you</div>
      <div className='suggestions_usernames'>
        <div className='suggestions_username'>
          <div className='username__left'>
            <span className='avatar'>
              <Avatar>Huy</Avatar>
            </span>
            <div className='username__info'>
              <span className='username'>dhuyvp</span>
              <span className='relation'>New to Instagram</span>
            </div>
          </div>
          <div className='follow__button'>Follow</div>
        </div>
      </div>
    </div>
  )
}

export default Suggest