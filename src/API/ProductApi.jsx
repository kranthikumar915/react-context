import React,{useCallback, useEffect, useState} from 'react'

const URL = `https://jsonplaceholder.typicode.com`

//custom hook usePosrtApi
function useProductApi(props){
    const[product,setProduct] = useState([])

    const getProducts = useCallback(()=>{
        const readProduct = async ()=>{
            await fetch(`${URL}/products`)
            .then(out => out.json())
            .then(res =>{
                //console.log('posts=',res)
                setProduct(res)
            }).catch(err => console.log(err.message))
        }
        readProduct()
    },[])

    useEffect(()=>{
        getProducts()
    },[])

    return {
        products:[product,setProduct]
    }
}
export default useProductApi