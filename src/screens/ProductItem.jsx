import React from 'react'

function ProductItem(props){
    return (
        
        <div className='col-md-3 mt-2 mb-2'>
            <div className='card'>
                <div className='card-header'>
                    <h5 className='text-center text-primary'>{props.id} {props.name}</h5>
                </div>
                <div className='card-body'>
                <div><strong>Email</strong>
                <span className="text-success">  {props.email}</span></div>
                         <p className='text-justify'>
                                 {props.body}
                        </p>
                </div>
                <div className='card-footer'>
                        <p className='float-end text-warning'>postid = {props.postId}</p>
                </div>
           </div>
        </div>
            

    )
}
export default ProductItem