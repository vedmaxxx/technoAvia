import express from 'express'
import TrailController from '../controllers/Trail.js'
import authMiddleware from '../middleware/authMiddleware.js'
import adminMiddleware from '../middleware/adminMiddleware.js'

const router = new express.Router()

/*
 * Товары
 */
router.get('/', function(req, res, next) {
    res.send('trail WORK');
  });
// список всех товаров каталога
router.get('/getall', TrailController.getAll)
// получить один товар каталога
router.get('/getone/:id([0-9]+)', TrailController.getOne)
// создать товар каталога — нужны права администратора
router.post('/create', /*authMiddleware, adminMiddleware,*/ TrailController.create)
// обновить товар каталога  — нужны права администратора
router.put('/update/:id([0-9]+)', /*authMiddleware, adminMiddleware,*/ TrailController.update)
// удалить товар каталога  — нужны права администратора
router.delete('/delete/:id([0-9]+)', /*authMiddleware, adminMiddleware,*/TrailController.delete)


export default router