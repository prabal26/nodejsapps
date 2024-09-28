 //@desc Get Contacts
 //@route GET /api/contacts
 //@access public

 const getContacts = (req,res) => {
    res.status(200).json({
        message: `Get all Contacts`
    });
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

    res.status(201).json({
        message: "Create Contacts"
    });
 };
 //@desc Update Contacts
 //@route PUT /api/contacts:id
 //@access public

 const updateContacts = (req,res) => {
    res.status(201).json({
        message: `Update Contacts for ${req.params.id}`
    });
};
 //@desc delete Contacts
 //@route DELETE /api/contacts:id
 //@access public

 const deleteContacts = (req,res) => {
    res.status(201).json({
        message: `Delete Contacts for ${req.params.id}`
    });
};
  


 module.exports = { getContacts,createContacts,updateContacts,deleteContacts };