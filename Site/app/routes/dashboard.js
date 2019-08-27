module.exports = (application) =>{
    application.get('/dashboard', (req, res, err)=>{
        res.render('../view/dashboard/index.ejs');      
    });

    application.get('/login', (req, res)=>{
        res.render('../view/dashboard/login.ejs');
    });

    application.get('/register', (req, res)=>{
        res.render('../view/dashboard/register.ejs');
    });

    application.get('/err', (req, res)=>{
        res.render('../view/dashboard/404.ejs');
    });

    application.get('/table', (req, res)=>{
        res.render('../view/dashboard/tables.ejs');
    });

    application.get('/blank', (req, res)=>{
        res.render('../view/dashboard/blank.ejs');
    });

    application.get('/charts', (req, res)=>{
        res.render('../view/dashboard/charts.ejs');
    });

    application.get('/fgps', (req, res)=>{
        res.render('../view/dashboard/forgot-password.ejs');
    });
}