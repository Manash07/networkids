import Icmp from "../model/icmp_model.js";

export async function getIcmpAlert(req, res) {
  try {
    const icmpAlerts = await Icmp.find();
    res.status(200).json(icmpAlerts);
  } catch (error) {
    console.error("An unexpected error was encountered: ", error);
    res.status(500).json({ error: error.message });
  }
}
