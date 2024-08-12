export const create = async (req, res) => {
    try {
        res.status(201).json(req.body)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}