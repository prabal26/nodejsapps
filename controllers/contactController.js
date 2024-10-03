 //@desc Get Contacts
 //@route GET /api/contacts
 //@access public

 const getContacts = (req,res) => {
    try {
        res.status(200).json({
            message: `Get all Contacts`
        });
    } catch (error) {
        console.log("checkmark");
    }
    
 };

 //@desc Create Contacts
 //@route POST /api/contacts
 //@access public

 const createContacts = (req,res) => {
    console.log("The req body is :", req.body);
    const {name , email} = req.body
    if(!name || !email) {
        res.status(400);
        throw new Error("All Fields are mandatory");
    }
    else{
    res.status(201).json({
        message: "Create Contacts"
    });
 };
 };


 //@desc Update Contacts
 //@route PUT /api/contacts:id
 //@access public

 const updateContacts = (req,res) => {
    const {name , email} = req.body
    if(name != null && email != null) {
        res.status(201).json({
            message: `Update Contacts for ${req.params.id}`
        });
    }
    else{
        res.status(404);
        throw new Error("All Fields are mandatory");
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