const  posts = require('../data/posts');
const connection = require('../data/database')

//index
const index = (req, res) => {
    
 const sql = 'SELECT * FROM posts';

 connection.query(sql, (err, results) => {
    if (err) {
        return res.status(500).json({
        error: 'il database ha fallito'})
    };

    req.json(results);

 })
}

// const index = (req, res) => {
//   throw new Error("Test errore interno");
//   res.json({ posts });
// };

// show
const show = (req, res) => {

    const id = Number(req.params.id)

    const trovato = posts.find(post => post.id === id)

        if (!trovato) {
        return res.status(404).json({
            error: true,
            message: 'il post è troppo timido per farsi vedere'
        })
    }

    res.json(trovato)


};


// store
const store = (req, res) => {

   console.log(req.body);

   const newId =posts[posts.length - 1].id + 1;

   const nuovoArticolo = {
    id : newId,
    title: req.body.title,
    content:req.body.content,
    image: req.body.image,
    tags: req.body.tags
   }

   posts.push(nuovoArticolo)

   console.log(posts);
   
    res.status(201);  
    res.json(nuovoArticolo);
};


// update
const update = (req, res) => {

const id = Number(req.params.id)
    const post = posts.find(post => post.id === id)

    if (!post) {
        return res.status(404).json({
            error: true,
            message: 'bersaglio mancato'
        })
    }

    post.title = req.body.title;
    post.content = req.body.content;
    post.image = req.body.image;
    post.tags = req.body.tags;

    console.log(posts);
    

res.json(post);
};

// modify
const modify =  (req, res) => {
res.send(`Modifica piccolina del post ${req.params.id}`);
};

// destroy
const destroy = (req, res)=>{

    const id = Number(req.params.id)
    const target = posts.find(post => post.id === id)

    if (!target) {
        return res.status(404).json({
            error: true,
            message: 'heheh lo hai mancato'
        })
    }

    posts.splice(posts.indexOf(target), 1)
    console.log(posts);

    res.sendStatus(204)
}

module.exports = {index, show, store, update, modify, destroy}
