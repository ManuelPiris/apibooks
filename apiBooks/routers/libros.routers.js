const {Router} = require ("express")
const router = Router();
const librosCtrl = require("../controller/libros.controller")


router.get("/libros",librosCtrl.getAllLibros)

router.get("/libros/:id_libro",librosCtrl.getLibros)

router.post("/libros",librosCtrl.postLibros)

router.put("/libros",librosCtrl.putLibros)

router.delete("/libros/:id_libro",librosCtrl.deleteLibros)

module.exports = router;