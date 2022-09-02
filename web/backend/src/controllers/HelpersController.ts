import { Request, Response } from 'express'
import User from '../models/User'
import FoodTruck from '../models/FoodTruck'
import Reviews from '../models/Reviews'

export default {

    async resetUser(req: Request, res: Response) {

        const { instagram } = req.query

        const user = User.findOne({ instagram: instagram })

        if (!user) {
            res.status(204).end()
        }

        await Reviews.deleteMany({rated_by: user._id})
        await FoodTruck.deleteMany({ sugested_by: user._id })
        await User.deleteMany({ instagram: instagram })

        return res.status(204).end()
    }
}