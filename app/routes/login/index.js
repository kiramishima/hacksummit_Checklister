import bcrypt from 'bcrypt'
import Bluebird from 'bluebird'
import User from '../../models/User'
import * as jwt from 'jsonwebtoken'

var compare = function (password, hash) {
  var q = new Bluebird(function (resolve, reject) {
    bcrypt.compare(password, hash, function (err, res) {
      if (err) { return reject(err) }

      resolve(res)
    })
  })

  return q
}

export default function (app, router) {
  router.route('/login')
    .get((req, res) => {
      res.render('base', { message: 'hooray! welcome to our api!', title: 'API Documentation' })
    })
    .post( async (req, res) => {
      let user = await User.findOne({name: req.body.username}).exec()
      
      if(!user) {
          res.json({message: 'Invalid user/password combination.', success: false})
      } else {
          var token = jwt.sign(user, app.get('superSecret'), {
            expiresIn: 1440 // expires in 24 hours
          })
          res.json({
            message: 'Success Login', 
            success: true, 
            token: token
          })
      }
    })
}
