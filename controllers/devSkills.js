
const DevSkill = require('../models/devSkill');

 module.exports = {
    index, 
    show,
    new: newDevSkill,
    create
  }

  function create(req, res){
    console.log(req.body, '<- req.body, contents of the form')
    DevSkill.create(req.body)
    res.redirect('/devSkills');
}

function index (req, res) {
    res.render('devSkills/index', {
      devSkills: DevSkill.getAll()
    });
  }

function show(req, res) {
    console.log(req.params,  " < - req.params in show function")
    res.render('devSkills/show', {
        devSkillNum: req.params.id,
        devSkill: DevSkill.getOne(req.params.id)
    });
  }

function newDevSkill(req, res){
    res.render('devSkills/new')
}