module.exports = (application) =>{
    application.get('/', (req, res)=>{
        res.render('../view/home/index.ejs');
    });
}