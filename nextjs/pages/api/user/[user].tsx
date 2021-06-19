import * as fs from "fs";
import * as path from "path";
import { NextApiRequest, NextApiResponse } from "next";

export default  (req: NextApiRequest, res: NextApiResponse) => {
  try {
    /**
     * Input your code implementation here!
     *
     * This route serves to read user profile json and respond with the user json.
     *
     * The implementation needs to fulfill the follow factors:
     * 1) The feedback route needs to be a GET route.
     * 2) The route needs to read user profile.
     * 3) If user profile json is not found, it should throw 404 error.
     * 4) If it's a invalid method route, throw 405 error.
     */
    if (req.method === 'GET'){
      const path = process.cwd()+'/pages/data/'+req.url.substring(10)+'.json'
      console.log(path)
      try {
        if (fs.existsSync(path)) {
          const data = fs.readFileSync(path).toString()
          return res.status(200).json(data);
        }
        return res.status(404).json({statusCode:404,message:"user not exist"});
      } catch(err) {
        console.error(err)
      } 
    } 
    return res.status(405).json({ statusCode: 405, message: "only accept get" });
  } catch (error) {
    return res.status(500).json({ statusCode: 500, message: error.message });
  }
};
