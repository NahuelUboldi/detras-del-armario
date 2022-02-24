import React from 'react'
import {useEffect} from "react"
import {useLocation} from "react-router"

function ScrollToTop(props) {
 const location = useLocation() 
 useEffect(() => {
   window.scrollTo(0,250)
 
 }, [location])
 
 return <>{props.children}</>
}

export default ScrollToTop