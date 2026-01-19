import {Alert} from "../model/schema.js";



/**
  * Gets intrusion from the database. It is not used in the current implementation but can 
  * be useful for future extensions. 
 */


// Controller function to get all alerts from the database
export async function getIntrusionAlert(req, res) {
  try {
    const intrusionAlerts = await Alert.find(); // Fetch all alerts 
    
    if(!intrusionAlerts || intrusionAlerts.length === 0){

      return res.status(404).json({message: "No alerts found"}); // If no alerts found, send a 404 response
    }
    
    res.status(200).json(intrusionAlerts); // Send the alerts as a JSON response with status 200 (OK)


  } catch (error) {
    console.error("An unexpected error was encountered: ", error); // Log the error for debugging purposes
    res.status(500).json({ error: error.message });
  }
}


/** *********************************************************************************************** */


/**
  * Posts a new intrusion alert to the database. It is not used in the current implementation but can 
  * be useful for future extensions. 
 */


// Controller function to post a new  alert to the database
export async function postIntrusionAlert(req,res){
  try{
    const {ip, alert} = req.body // Extract IP and alert message from the request body
    const postAlert = new Alert({ip, alert}) // Create a new alert document

    const saveAlert = await postAlert.save(); // Save the new alert to the database
    res.status(201).json({message: saveAlert}); // Send a success response with status 201 (Created)
  } 
  catch(error){
    console.error("Error while saving the alert") // Log the error for debugging purposes
    res.status(500).json({message:"Internal server error"}) // Send an error response with status 500 (Internal Server Error)
  }
}