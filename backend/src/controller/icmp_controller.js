import Icmp from "../model/icmp_model.js";


// Controller function to get all ICMP alerts from the database
export async function getIcmpAlert(req, res) {
  try {
    const icmpAlerts = await Icmp.find(); // Fetch all ICMP alerts from the 
    
    if(!icmpAlerts || icmpAlerts.length === 0){

      return res.status(404).json({message: "No ICMP alerts found"}); // If no alerts found, send a 404 response
    }
    
    res.status(200).json(icmpAlerts); // Send the alerts as a JSON response with status 200 (OK)
    
   


  } catch (error) {
    console.error("An unexpected error was encountered: ", error); // Log the error for debugging purposes
    res.status(500).json({ error: error.message });
  }
}


// Controller function to post a new ICMP alert to the database
export async function postIcmpAlert(req,res){
  try{
    const {ip, alert} = req.body // Extract IP and alert message from the request body
    const postIcmp = new Icmp({ip, alert}) // Create a new ICMP alert document

    const saveIcmp = await postIcmp.save(); // Save the new alert to the database
    res.status(201).json({message: saveIcmp}); // Send a success response with status 201 (Created)
  } 
  catch(error){
    console.error("Error while saving the alert") // Log the error for debugging purposes
    res.status(500).json({message:"Internal server error"}) // Send an error response with status 500 (Internal Server Error)
  }
}