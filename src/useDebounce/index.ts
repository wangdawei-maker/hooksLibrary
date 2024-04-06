import {useEffect,useRef, useState} from 'react'

const useDebounce=(value,delay)=>{
   const timerRef=useRef<any>(null)
   const [state,setState]=useState(value)
    useEffect(()=>{

      let timer=setTimeout(() => {
        console.log('我是防抖函数')
        setState(value)
           //这里是每次触发的执行函数
      }, delay);
      timerRef.current=timer

      return ()=>{
        clearTimeout(timerRef.current)
      }
    },[value,delay])

    return state
}

export default useDebounce