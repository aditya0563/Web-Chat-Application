 import jwt from "jsonwebtoken"
 const isAuthenticated = async (req, res, next) => {
    try {
        const token = req.cookies.token
        if(!token){
            return res.status(401).json({
                message: "User authentication failed 🤡",
                cause: "Token is not exists 😕",
                solution: "Log in again 😤"
            })
        }

        const decode = jwt.verify(token, process.env.JWT_SECRET_KEY)
        if(!decode){
            return res.status(404).json({
                message: "Authentication Failed 🥲",
                cause: "Decode failed 🥲"
            })
        }
        req.id = decode.userId
        next()
        
    } catch (error) {
        console.log(error)
    }
 }
export default isAuthenticated