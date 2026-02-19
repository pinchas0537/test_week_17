import {Router} from "express"
import { answerf, getData, players } from "../controllers/controler.js"

const router = Router()

router.get("/allData",getData)

router.get("/puzzle",players)

router.post("/puzzle",answerf)


export default router