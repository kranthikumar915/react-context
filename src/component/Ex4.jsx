import React,{useContext} from 'react'
import { DataContext } from '../Context/DataProvider'
import ProductItem from '../screens/ProductItem'

function Ex4(props) {

    const context = useContext(DataContext)
    const [products] = context.productApi.products
    return (
        <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <h3 className="display-3 text-success">Comments</h3>
            </div>
        </div>

        {/* <div className="row">
            {
                products && products.map((item,index)=>{
                    return (
                        <ProductItem key={index} {...item}/>
                    )
                })
            }
        </div> */}
    </div>
    )
}
export default Ex4