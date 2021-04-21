import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    /**
     * Input your code implementation here!
     *
     * This route serves to update the user profile with new testimonials.
     * The testimonial schema is as follows:
     *
     * {
     *   "rating": 5,
     *   "comment": "This teacher is great",
     *   "name": "John"
     * }
     *
     * The implementation needs to fulfill the follow factors:
     * 1) The feedback route needs to be a PUT route.
     * 2) The route needs to receive new testimonial through request body.
     * 3) The new testimonial need to be updated in the user profile json.
     * 4) Subsequent refresh to view user profile needs to reflect the latest testimonial.
     * 5) If user profile json is not found, it should throw 404 error.
     * 6) If testimonial json is missing information, it should throw 400 error.
     * 7) If it's a invalid method route, throw 405 error.
     */
  } catch (error) {
    return res.status(500).json({ statusCode: 500, message: error.message });
  }
};
