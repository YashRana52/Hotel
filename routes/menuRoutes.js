const express = require ('express')
const router = express.Router();
const Menuhotel = require('./../models/Menuhotel')

router.post('/', async function(req, res) {
    try {
      
      const data = req.body //assuming the req body contain the person data
  
    //create a new person document using the mongoose model
    const newMenu = new Menuhotel(data);
  
    //save the new person data
    const response = await newMenu.save()
    console.log('data saved');
    res.status(200).json(response);
    
    
  
  
  
    } catch (error) {
      console.log(error);
      res.status(500).json({error: 'Internal server Error'});
      
      
    }
  })
  //get methode for menu items
  router.get('/', async function(req, res) {
    try{
      const data = await Menuhotel.find();
      console.log('data fetched');
    res.status(200).json(data);
    }
    catch (error) {
      console.log(error);
      res.status(500).json({error: 'Internal server Error'});
      
      
    }
  })
  
  router.get('/:tasteType',async(req,res)=>{
    
      try {
        const tasteType = req.params.tasteType; //extract the tastetype from parameter
    if (tasteType== 'sweet'|| tasteType=='spicy'|| tasteType=='sour') {
      const response = await Menuhotel.find({taste:tasteType})
      console.log('response fetched');
      res.status(200).json(response)
      
    }
  
       
      else{
        res.status(404).json({error:"invalid taste type}"})
      
      }
     } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Internal server Error'});
        
        
        
      }
      
    
  
  })

  module.exports = router;