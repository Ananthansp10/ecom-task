import jwt from 'jsonwebtoken'

const accessTokenSecret = process.env.JWT_ACCESS_SECRET
const refreshTokenSecret = process.env.JWT_REFRESH_SECRET

export const generateAccessToken = (userId,email) => {
    return jwt.sign({id:userId,email:email},accessTokenSecret,{expiresIn:"30m"})
}
export const generateRefreshToken = (userId,email) => {
    return jwt.sign({id:userId,email:email},refreshTokenSecret,{expiresIn:"7d"})
}