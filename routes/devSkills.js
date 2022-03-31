var express = require('express');
var router = express.Router();
const devSkillController = require('../controllers/devSkills');
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/', devSkillController.index);
router.get('/new', devSkillController.new);


router.get('/:id', devSkillController.show);
router.post('/', devSkillController.create);
router.delete('/:id', devSkillController.delete);




// router.get('/devSkills', function(req, res) {
//   res.render('devSkills/index', {
//     devSkills: devSkillsDb.getAll()
//   });
// });



module.exports = router;


