const jwt=require('jsonwebtoken');
const {JWT_SECRET} =require('./config')

const authMiddleware=(req,res,next)=>
{
    const authHeader=req.headers.authorization;
    if(!authHeader ||!authHeader.startsWith('Bearer ')){
        return res.status(403).json({ message:"invalid token entry "});
    }
    const token=authHeader.split(' ')[1];
   
    try{
    const decoded=jwt.verify(token,JWT_SECRET);
    console.log(decoded)
    req.userId=decoded.userId;
    next();
    }
    catch(error)
    {
        return res.status(403).json({error:error.message})
    }
};
module.exports=authMiddleware;