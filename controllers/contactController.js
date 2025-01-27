 //@desc Get Contacts
 //@route GET /api/contacts
 //@access public
 


 const getContacts = (req,res,next) => {
    console.log('test')
    try {
        res.status(200).json({
            message: `Get all Contacts`
        });
    } catch (error) {
        console.log(error)
        next(error)
    }
    
 };

 //@desc Create Contacts
 //@route POST /api/contacts
 //@access public

 const createContacts = (req,res,next) => {
    console.log("The req body is :", req.body);
    const {name , email} = req.body
    try{
        if(name && email) {
        res.status(201).json({
            message: "Create Contacts"
        });
        
    }else{
        console.log("trashh")   
    }}
    catch(error){
        console.log(error)
        next(error)
    }
 };


 //@desc Update Contacts
 //@route PUT /api/contacts:id
 //@access public

 const updateContacts = (req,res) => {
    const {name , email} = req.body
    console.log(name,email)
    if(name == null || email == null){
       const error = new Error("NOT FOUND");
       error.code = 404;
       throw error;
    }
    else{
        res.status(201).json({
            message: `Update Contacts for ${req.params.id}`
        });
    }
};


 //@desc delete Contacts
 //@route DELETE /api/contacts:id
 //@access public

 const deleteContacts = (req,res,next) => {
    res.status(201).json({
        message: `Delete Contacts for ${req.params.id}`
    });
};
  


 module.exports = { getContacts,createContacts,updateContacts,deleteContacts };