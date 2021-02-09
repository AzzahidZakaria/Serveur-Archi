let express = require('express');

//création de l'objet router qui me permet d'instancier express
let router = express.Router();

let todo = ["Faire les courses","Nourir le chat"];


router.get('/',(request,response) => { 
    response.render("home2.ejs",{todo,messageConfirm:""});

});


router.get('/remove/:todo',(request,response) => {
    let item_number = request.params.todo;
    //response.send('Bonjour' + request.query.name);
    todo.splice(item_number,1);
     

    response.render("home2.ejs",{todo,messageConfirm:" Suppression réussie"}); 
});

router.post('/ajouter',(request,response) => {
    let todoForm = request.body.todo;

    //response.send('Bonjour' + request.query.name);
    todo.push(todoForm);  
// Add an item  
    response.render("home2.ejs",{todo,messageConfirm:" Ajout réussi"}); 

});

// router.post('/exemple',(request,response) => { 
//     console.log(request.body);
//     response.send('Hello' + request.body.test);
//     resp.render('/')


// });


module.exports = router;