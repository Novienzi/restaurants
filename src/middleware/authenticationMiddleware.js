const jwt = require('jsonwebtoken');
const { UnAuthorized} = require('../helper/error')

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) throw new UnAuthorized('UnAuthorized')
  
    jwt.verify(token, process.env.JWT_SECRET , (err, decode) => {
        if (err) {
            throw new UnAuthorized('UnAuthorized')
        }
      req.user = decode
      next()
    })
}


module.exports = authenticateToken