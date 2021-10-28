module.exports.userEdp = async (req,res,next)=>{
    const notAllowed = await req.cookies.authtoken
    if(!notAllowed){
        res.redirect('/')
    }
    next()
}