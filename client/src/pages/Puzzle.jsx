import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router'

export default function Puzzle() {
    const [input, setIput] = useState("")
    const [data, setData] = useState("")
    const [answer , setAnswer] = useState("")
    const q = useRef(null)
    async function getPuzzle() {
        const puzzle = await fetch("http://localhost:3000/puzzle", {
            headers: {
                "Content-Type": "application/json"
            }
        })
        const puzz = await puzzle.json()
        setData(puzz)
    }

    useEffect(() => {
        getPuzzle()
    }, [])

    async function sendInput(e) {
        debugger
        e.preventDefault()
        const res = await fetch("http://localhost:3000/puzzle", {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({ answer: input })
        })
        const result = await res.json()
        setAnswer(result)
        setIput("")
    }
    return (
        <>
            <form onSubmit={sendInput}>
                {data &&  <h3>When <b>Contry = {data.client.country}</b> and <b>Year = {data.client.year}</b> what is the <b>Attack Type?</b></h3>}
                <input type="text" value={input} placeholder='enter answer' onChange={e => setIput(e.target.value)} required />
                <button type='submit'>Send</button>
                {answer && <h4>{answer.message}</h4>}
                <Link to={"/"}> get data </Link>
            </form>
        </>
    )
}
