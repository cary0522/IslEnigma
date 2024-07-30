const jwt=require('jsonwebtoken');
const secretKey=process.env.JWT_SECRET;
const expiresIn=process.env.JWT_EXPIRES_IN;

const loginToken={
    generateToken:async (payload) => {
        try {
            const token=jwt.sign(payload,secretKey,{expiresIn:expiresIn});
            return token;
        } catch (error) {
            console.log(error);
            throw error;
        }
    },
}
module.exports=loginToken;