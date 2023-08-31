'use client'
import React, { useState, useRef, useEffect } from 'react'

type Props = {
    finish: string,
    plus: number,
    start: string,

}
export const IcrementCount = ({start, finish, plus} : Props) => {
    const [count, setCount] = useState(Number(start));
    const timerIdRef = useRef(null);
    
    useEffect(() => {
        if(count == Number(finish)){
            clearTimeout(timerIdRef.current);
        }
        else{
            timerIdRef.current = setTimeout(() => {
                setCount(count + plus);
            }, 50);
        }
        
        () => {
        clearTimeout(timerIdRef.current);
        }
    }, [count])
    
  return (
    <h3 className=' text-medify-blue-500'>{count}</h3>
    
  )
}
