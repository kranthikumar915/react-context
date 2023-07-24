import React,{useContext} from 'react'
import { DataContext } from '../Context/DataProvider'
import CommentItem from '../screens/CommentItem'

function Ex3(props){

    const context = useContext(DataContext)
    const [comments] = context.commentApi.comments
    return (

        <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <h3 className="display-3 text-success">Comments</h3>
            </div>
        </div>

        <div className="row">
            {
                comments && comments.map((item,index)=>{
                    return (
                        <CommentItem key={index} {...item}/>
                    )
                })
            }
        </div>
    </div>
    )
}
export default Ex3