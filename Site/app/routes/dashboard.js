module.exports = (application) =>{
    application.get('/dashboard', (req, res)=>{
        res.render('../view/dashboard/index.ejs');
    });
}