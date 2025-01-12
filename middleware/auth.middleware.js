export const registerMiddleware = (req, res, next) => {
    const { email, password } = req.body
    if (!email || !password) {
      return res.status(400).send("Email and password are required!")
    }
  
    if (password.length <= 5) {
      res.status(400).send("The passsword must be longer than 5 characters!")
    }
  
    if (validateEmail(email)) {
      res.status(400).send("Email is not valid!")
    }
  
  
  
    next()
  }