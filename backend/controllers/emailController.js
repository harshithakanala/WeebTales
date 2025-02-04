import EmailModel from "../models/EmailModel.js";

const subscribeEmail = async (req, res) => {
    try {
      const { email } = req.body;
  
      // Check if the email already exists
      const existingEmail = await EmailModel.findOne({ email });
      if (existingEmail) {
        return res.json({ success: false, message: "Email is already subscribed" });
      }
  
      // Add the new email to the database
      const newEmail = new EmailModel({ email });
      await newEmail.save();
  
      res.json({ success: true, message: "Email subscribed successfully" });
    } catch (error) {
      console.log(error);
      res.json({ success: false, message: error.message });
    }
  };

// Route for getting all subscribed emails
const getSubscribedEmails = async (req, res) => {
  try {
    const emails = await EmailModel.find({});
    res.json({ success: true, emails });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Route for deleting a subscribed email
const deleteEmail = async (req, res) => {
  try {
    const { id } = req.params; // Get email ID from request parameters

    const deletedEmail = await EmailModel.findByIdAndDelete(id);
    if (!deletedEmail) {
      return res.json({ success: false, message: "Email not found" });
    }

    res.json({ success: true, message: "Email unsubscribed successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { subscribeEmail, getSubscribedEmails, deleteEmail };
