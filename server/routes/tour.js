import express from 'express'
import TourController from '../controllers/Tour.js'
import authMiddleware from '../middleware/authMiddleware.js'
import adminMiddleware from '../middleware/adminMiddleware.js'

const router = new express.Router()

/*
 * Товары
 */
router.get('/', function(req, res, next) {
    res.send('tour WORK');
  });
// список всех товаров каталога
router.get('/getall', TourController.getAll)
// получить один товар каталога
router.get('/getone/:id([0-9]+)', TourController.getOne)
// создать товар каталога — нужны права администратора
router.post('/create', /*authMiddleware, adminMiddleware,*/ TourController.create)
// обновить товар каталога  — нужны права администратора
router.put('/update/:id([0-9]+)', /*authMiddleware, adminMiddleware,*/ TourController.update)
// удалить товар каталога  — нужны права администратора
router.delete('/delete/:id([0-9]+)', /*authMiddleware, adminMiddleware,*/TourController.delete)


export default router