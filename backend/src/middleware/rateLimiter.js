import rateLimit from "../config/upstash.js";



const rateLimiter = async (req, res, next) => {

    try{

        const {success} = await rateLimit.limit("my-limit-key") // Use a fixed key for simplicity; in production, consider using user-specific keys

        if(!success){
           return res.status(429).json({message: "Too many requests, please try again later."});
        }

        next();
    }
    catch(error){

        console.error("Rate Limiter Error:", error);
        next(error)

    }

}

export default rateLimiter;