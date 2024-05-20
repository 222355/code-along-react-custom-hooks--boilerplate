import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'


function useStorage(key,initialValue) {
    const getValue=()=>{
        const localstorageValue =localStorage.getItem(key)
        if(localstorageValue){
            return JSON.parse(localstorageValue)
        }
        const sessionStorageValue =sessionStorage.getItem(key)
        if(sessionStorageValue ){
            return JSON.parse(sessionStorageValue)
        }
        return initialValue
    }
    const [value,setValue]=useState(getValue)
    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value))
        sessionStorage.setItem(key,JSON.stringify(value))
    },[key,value])
  return [value,setValue]
}

export default useStorage
