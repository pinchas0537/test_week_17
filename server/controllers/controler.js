import { readCSV } from "../db/db.js";

export async function getData(req, res) {
   const data = await readCSV()
   return res.json({ data })
}
let puzzle;

export async function players(req, res) {
   const data = await readCSV()
   const random = Math.floor(Math.random() * data.length)
   puzzle = data[random]
   const client = {
      country: puzzle.country_txt,
      year: puzzle.iyear,
   }
   return res.json({ client })
}

export async function answerf(req, res) {
   const { answer } = req.body
   let count = 0   
   if (answer === puzzle.attacktype1_txt) {
      count++
      return res.json({ message: "sucress" ,count})
   }

   else{
      const data = await readCSV()
      const dataset =  data.filter(row => answer === row.attacktype1_txt)
      if (dataset.length !== 0) {
         count ++
         return res.json({ message: "sucress" ,count})
      }
      else{
         return res.json({message:"No matching result found. No point."})
      }
   }
}