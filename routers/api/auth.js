const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>
    res.send("autor route")
);
module.exports=router;