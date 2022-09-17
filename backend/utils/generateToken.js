import jwt from 'jsonwebtoken'

const generateToken=()=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:'30d'
    })
}

export default generateToken