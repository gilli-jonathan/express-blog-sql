function notFound(req, res, next) {

    res.status(404)
    res.json({
        error:'Not Found',
        message: 'mi dispiace ma non abbiamo trovato la pagina che stai cercando'
    });
};

module.exports = notFound