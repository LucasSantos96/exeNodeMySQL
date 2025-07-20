const express = require('express')
const app= express()
const handlebars = require('express-handlebars')
const Post = require('./models/Post')
const { where } = require('sequelize')


//config
//Template engine
 app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
 app.set('view engine', 'handlebars')

//Body parser 
app.use(express.urlencoded({extended:true}))
app.use(express.json())




//Rotas

app.get('/', (req, res)=>{
    //chama todos os dados que existem dentro da tabela postapp
    //{order:[['id', 'DESC']] serve para ordernar a partir da ultima atualização feita
    Post.findAll({order:[['id', 'DESC']]}).then((posts)=>{
        res.render('home', {posts: posts})
    })
})

app.get('/cad',(req,res)=>{
    res.render('formulario')
})


//rota para adicionar no banco de dados
app.post('/add', (req,res)=> {
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(()=>{
        res.redirect('/')
    }).catch((err)=>{
        res.send('Erro ao criar post', err)
    })
})

//Rota botão de deletar
app.get('/deletar/:id', (req,res)=>{
    Post.destroy({where: {'id':req.params.id}}).then(()=>{
        res.redirect('/')
    }).catch((err)=>{
        res.send('Essa postagem não existe', err)
    })
})


app.get('/cadnovo',(req,res)=>{
    res.redirect('/cad').then(()=>{
        alert('Cadastrar novo usuário')
    }).catch((err)=>{
        console.error('Erro ao voltar para cadastro', err)
    })
})

app.get('voltar',(req,res)=>{
    res.redirect('/')
})






app.listen(8081, ()=>{
    console.log('Servidor roando na url http://localhost:8081')
})