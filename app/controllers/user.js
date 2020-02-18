const db = require("../../models");
const User = db.user;
const Tutorial = db.tutorial;
const Op = db.Sequelize.Op;

exports.create = (req,res)=>{
    const email = req.body.email;
    if (!email){
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const user_data = {
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        password:req.body.password
    };
    User.create(user_data)
      .then(data=>{
          res.send(data)
      })
      .catch(err=>{
          res.status(500).send({
              message:
              err.message || 'An error Occurred'
          })
      });
};

exports.findAll = (req,res)=>{
    User.findAll(
        {
            include: [
                { model: Tutorial }
            ]
        }
    )
      .then(data => {
          res.send(data);
      })
      .catch(err=>{
          res.status(500).send({
              message: err.message || 'An error occurred'
          });
      })
};
exports.findOne = (req,res)=>{
   const id = req.params.id;
   User.findByPk(id,{
       include: [
           { model: Tutorial }
       ]
   })
       .then(data=>{
       res.send(data)
   })
       .catch(err=>{
           res.status(500).send({
                   message:err.message || 'An error occurred'
               });
       });
};
exports.update = (req,res)=>{

};
exports.delete = (req,res)=>{
    res.send('test');
};