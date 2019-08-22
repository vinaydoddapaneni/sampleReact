import React from 'react';

export const Textfield =(props) =>{
    return(
        <input type={props.text} className='form-control' placeholder={props.place}/>
    )
}
