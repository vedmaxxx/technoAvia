import express from 'express'

import trail from './trail.js'
import tour from './tour.js'
import technic from './technic.js'
import user from './user.js'
// import feedback from './feedback.js'
import order from './order.js'
import { Technic } from '../models/mapping.js'

const router = new express.Router()

router.use('/trail', trail)
router.use('/tour', tour)
router.use('/technic', technic)
router.use('/user', user)
// router.use('/feedback', feedback)
router.use('/order', order)
router.get('/', function(req, res, next) {
    res.send('INDEX WORK');
  });

export default router