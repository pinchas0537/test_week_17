import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router'

export default function Data() {
    const [allData, setData] = useState([])
    const [search , setSearch] = useState("")
    async function allDataf() {
        const data = await fetch("http://localhost:3000/allData", {
            headers: {
                "Content-Type": "application/json"
            }
        })
        const result = await data.json()
        setData(result.data)
    }
    useEffect(() => {
        allDataf()
    }, [])
    return (
        <>
            <Link to={"/puzzle"}>get to test</Link>
            <input id='search' placeholder='Search by city or country'onChange={e => setSearch(e.target.value)}/>
            <table>
                <tr>
                    <th>Event ID</th>
                    <th>Year</th>
                    <th>Country</th>
                    <th>City</th>
                    <th>Attack Type</th>
                    <th>Motive</th>
                </tr>
                {allData.filter((row=>{
                    return row.country_txt.toLowerCase().includes(search) || row.city.toLowerCase().includes(search)
                })).map((row) => (
                    <tr>
                        <td>{row.eventid}</td>
                        <td>{row.iyear}</td>
                        <td>{row.country_txt}</td>
                        <td>{row.city}</td>
                        <td>{row.attacktype1_txt}</td>
                        <td>{row.motive}</td>
                    </tr>
                ))}
            </table>
        </>
    )
}
