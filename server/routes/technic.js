import express from 'express'
import TechnicController from '../controllers/Technic.js'
import authMiddleware from '../middleware/authMiddleware.js'
import adminMiddleware from '../middleware/adminMiddleware.js'

const router = new express.Router()

/*
 * Товары
 */
router.get('/', function(req, res, next) {
    res.send('technic WORK');
  });
// список всех товаров каталога
router.get('/getall', TechnicController.getAll)
// получить один товар каталога
router.get('/getone/:id([0-9]+)', TechnicController.getOne)
// создать товар каталога — нужны права администратора
router.post('/create', /*authMiddleware, adminMiddleware,*/ TechnicController.create)
// обновить товар каталога  — нужны права администратора
router.put('/update/:id([0-9]+)', /*authMiddleware, adminMiddleware,*/ TechnicController.update)
// удалить товар каталога  — нужны права администратора
router.delete('/delete/:id([0-9]+)', /*authMiddleware, adminMiddleware,*/TechnicController.delete)


export default router