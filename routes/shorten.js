const express = require('express');
const validator = require('express-validator');
const router = express.Router();


const { ShortenDto } = require('../dto/shortenDto');
const { validate } = require('../config/validators/inputValidators');


router.get('/s?', async (req, res)=>{
    //s?linkOlder=teste&linkNew=aloha
    const linkOlder = req.query["linkOlder"];
    const linkNew = req.query["linkNew"];

    console.log(linkOlder);
    console.log(linkNew);

    shortenDto = new ShortenDto();

    shortened= await shortenDto.shortenLink(linkOlder, linkNew)
        .catch(err => {
        console.log("Shortened Save Error");
        return res.send({type:'error', message:'Shortened Save Error'});
    });

    console.log(shortened);
    res.send({type:'success', message:'Success'});
});

router.post('/link',
    validator.body('linkOlder').custom( validate ),
    async (req, res) => {

    const params = req.body;
    console.log(params);
});

module.exports =  router;
