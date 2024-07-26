const asyncHandler = (fn) => async (req,res,next) =>{
    try {
        await fn(req,res,next)
    } catch (err) {
        console.error(err.message);
        if(err.isJoi===true)err.status=422;
        res.status(err.status||500).send(err.message)
    }
}

module.exports = asyncHandler