const router = require('express').Router();
const skillsCtrl = require('../controllers/skills');

module.exports = router;

router.get('/', skillsCtrl.index);
router.post('/', skillsCtrl.create);
router.put('/:id', skillsCtrl.update);
router.get('/new', skillsCtrl.new);
router.get('/:id/edit', skillsCtrl.edit);
router.get('/:id', skillsCtrl.show);
router.delete('/:id', skillsCtrl.delete);