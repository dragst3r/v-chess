import React from 'react'
import { useEffect } from 'react'
import {io} from 'socket.io-client'

const Socket = ()=>{

    useEffect(()=>{
        const socket = io('http://localhost:3000')
    },[])
}

export default Socket