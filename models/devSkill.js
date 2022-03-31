const devSkills = [
    {id: 1, devSkill: 'HTML'},
    {id: 2, devSkill: 'CSS'},
    {id: 3, devSkill: 'JavaScript'}
  ];
  
  // const router = express.Router();
  // // require the Todo model
  // const DevSkill = require('../models/devSkill');


  module.exports = {
    getAll,
    getOne, 
    create
  };


  function getAll() {
    return devSkills;
  }
  
  function getOne(id) {
    // Use the Array.prototype.find iterator method
    return devSkills.find(devSkill => devSkill.id === parseInt(id));
  }

  function create(devSkill) {
    devSkill.id = Date.now() % 1000000;
    devSkills.push(devSkill);
  }