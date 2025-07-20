const db = require('./db')

//Cria os dados abaixo na tabela postapp
const Post = db.sequelize.define('postagens',{
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
})


//executar apenas uma vez, depois pode ser apagado ou comentado
//Post.sync({force:true})

module.exports = Post 