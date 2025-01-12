export const basicAuthMid = (req,res,next) =>{
    try{
        const b64auth = (req.headers.authorization || "").split(" ")[1] || "";
        const strauth = Buffer.from(b64auth, "base64").toString()
        const splitIndex = strauth.indexOf(":");
        const login = strauth.substring(0, splitIndex);
        const password = strauth.substring(splitIndex + 1);

        const isMatch = password === "qwert1234";
        const isMatchLogin = login === "Jahongir";

        if(!isMatch || !isMatchLogin){
            throw new Error("Login or Password wrong.!!!");
        }
        
        next();
    }catch(error){
        res.status(400).send(error.message)
    }
};