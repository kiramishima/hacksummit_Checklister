import bcrypt from 'bcrypt'
import Bluebird from 'bluebird'
import User from '../../models/User'

var hash = function (toHash) {
  var q = new Bluebird(function (resolve, reject) {
    bcrypt.genSalt(10, function (err, salt) {
      if (err) { return reject(err) }
      bcrypt.hash(toHash, salt, function (err, hash) {
        if (err) { return reject(err) }
        resolve(hash)
      })
    })
  })
  return q
}

export default function (router) {
  router.route('/signup')
    .get((req, res) => {
      res.json({message: 'Signup Route'})
    })
    .post((req, res) => {
      let user = User.findOne({name: req.body.username}).exec()
      user.then(function (doc) {
        console.log(doc)
        if (doc) {
          res.json({message: 'User already exists.'})
        } else {
          hash(req.body.password).then(function (encrypted) {
            let newUser = User.create({
              name: req.body.username,
              password: encrypted
            })
            newUser.then(function (usr) {
              console.log(usr)
            })
            res.json({message: 'User Created.', userId: newUser._id})
          }).catch(function (err) {
            console.error(err)
          })
        }
      }).catch(function (err) {
        console.error(err)
      })
    })
}
