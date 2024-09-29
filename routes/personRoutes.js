const express = require ('express')
const router = express.Router();
const Person = require('./../models/Personhotel')


//Post route to add a person

router.post('/', async function(req, res) {
    try {
      
      const data = req.body //assuming the req body contain the person data
  
    //create a new person document using the mongoose model
    const newPerson = new Person(data);
  
    //save the new person data
    const response = await newPerson.save()
    console.log('data saved');
    res.status(200).json(response);
   
    
    
  
  
  
    } catch (error) {
      console.log(error);
      res.status(500).json({error: 'Internal server Error'});
      
      
    }
  })
  //get method for data
  router.get('/', async function(req, res) {
    try{
      const data = await Person.find();
      console.log('data fetched');
    res.status(200).json(data);
    }
    catch (error) {
      console.log(error);
      res.status(500).json({error: 'Internal server Error'});
      
      
    }
  })


  router.get('/:workType',async(req,res)=>{
  
    try {
      const workType = req.params.workType; //extract the worktype from parameter
  if (workType== 'chef'|| workType=='manager'|| workType=='waiter') {
    const response = await Person.find({work:workType})
    console.log('response fetched');
    res.status(200).json(response)
    
  }

     
    else{
      res.status(404).json({error:"invalid work type}"})
    
    }
   } catch (error) {
      console.log(error);
      res.status(500).json({error: 'Internal server Error'});
      
      
      
    }
    
  

})
router.put('/:id', async (req, res) => {
    try {
        const personId = req.params.id; // Extract the id from the URL parameter
        const updatedPersonData = req.body; // Updated data from the request body

        const response = await Person.findByIdAndUpdate(personId, updatedPersonData, {
            new: true,
            runValidators: true,
        });
        
        if (!response) {
            return res.status(404).json({ error: 'Person not found' });
        }
        
        console.log('data updated');
        res.status(200).json(response);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server Error' });
    }
});
//delete function method

router.delete('/:id', async (req, res)=>{
    try {
        const personId = req.params.id; // extract the person id from the url parameter

        //Assuming you have a person model
        const response = await Person.findByIdAndDelete(personId)
        if (!response) {
            return res.status(404).json({ error: 'Person not found' });
        }
        console.log('data deleted');
        res.status(200).json({message: 'person Deleted Succesfully'});
    } catch (error) {
        
        console.log(error);
        res.status(500).json({ error: 'Internal server Error' });
    
    }
})

module.exports = router;