

const chekAuth = (req, res, next) =>{
    console.log('Desde mi middleware');
    next()
};

export default chekAuth