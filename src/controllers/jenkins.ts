import { RequestHandler } from "express"

export const getSuccess: RequestHandler = (req, res) => {
    
    res.status(200).json({ status: "success", message: "working fine" });
}

