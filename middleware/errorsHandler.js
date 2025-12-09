function errorsHandler(err, req, res, next) {

    res.status(500)
    res.json({
        error:err.message,
        message: 'senti a me, meglio che lasci perdere'
    })
}

module.exports = errorsHandler