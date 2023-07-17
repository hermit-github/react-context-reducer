import React from 'react'
import {AiFillStar,AiOutlineStar} from 'react-icons/ai'

const Rating = ({rating,onClick,style,clickDisabled}) => {

    const handleOnClick = (i) => {
        if(!clickDisabled){
            onClick(i+1)
        }
    }
  
  return (
    <>
        {[...Array(5)].map((_,i) => (
            <span key={i} onClick={() => handleOnClick(i)} style={style}>
                {rating>i ? (
                    <AiFillStar fontSize='15px'/>
                ):(
                    <AiOutlineStar fontSize='15px'/>
                )}
            </span>
        ))}
    </>
  )
}

export default Rating