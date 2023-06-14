import React from 'react';
import './BaseComponent.scss';


const BaseComponent:React.FC<
{
    title:string,
    name:string

}
>=(props)=>{
    const {title , name}=props;
   // let title:string = 'base component';
    return(

        <div className='title'>
           <p>{title}</p><br></br>
           {name}
        </div>
    );
}
export default BaseComponent;