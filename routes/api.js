import { Router } from "express"
import { feb1, feb2, feb3, feb4, feb5, feb6, feb7 } from "../app/controllers/api/week-1-controller"
import { feb8, feb9, feb10, feb11, feb12, feb13, feb14 } from "../app/controllers/api/week-2-controller"
import { feb15, feb16, feb17, feb18, feb19, feb20, feb21 } from "../app/controllers/api/week-3-controller"
import { feb22, feb23, feb24, feb25, feb26, feb27, feb28 } from "../app/controllers/api/week-4-controller"
const router = Router()

router.get('/week-1/feb-1', feb1)
router.get('/week-1/feb-2', feb2)
router.get('/week-1/feb-3', feb3)
router.get('/week-1/feb-4', feb4)
router.get('/week-1/feb-5', feb5)
router.get('/week-1/feb-6', feb6)
router.get('/week-1/feb-7', feb7)

router.get('/week-2/feb-8', feb8)
router.get('/week-2/feb-9', feb9)
router.get('/week-2/feb-10', feb10)
router.get('/week-2/feb-11', feb11)
router.get('/week-2/feb-12', feb12)
router.get('/week-2/feb-13', feb13)
router.get('/week-2/feb-14', feb14)

router.get('/week-3/feb-15', feb15)
router.get('/week-3/feb-16', feb16)
router.get('/week-3/feb-17', feb17)
router.get('/week-3/feb-18', feb18)
router.get('/week-3/feb-19', feb19)
router.get('/week-3/feb-20', feb20)
router.get('/week-3/feb-21', feb21)

router.get('/week-3/feb-22', feb22)
router.get('/week-3/feb-23', feb23)
router.get('/week-3/feb-24', feb24)
router.get('/week-3/feb-25', feb25)
router.get('/week-3/feb-26', feb26)
router.get('/week-3/feb-27', feb27)
router.get('/week-3/feb-28', feb28)
export default router