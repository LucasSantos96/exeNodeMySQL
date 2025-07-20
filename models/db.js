const { raw } = require('body-parser')
const Sequelize = require('sequelize')

 //Conexão com o banco de dados
 const sequelize = new Sequelize('postapp', 'root', '629321', {
    host:'localhost',
    dialect:'mysql',
    query:{raw:true}
 })

 


 //Rodar para testar a conexão
 /*
sequelize.authenticate().then(()=>{
    console.log('Conectado com sucesso')
 }).catch((err)=>{
        console.error('Falha ao conectar', err)
 })

*/



module.exports =  {
    Sequelize: Sequelize,
    sequelize: sequelize
}