import jwt from 'jsonwebtoken'

export const authUser = async (req, res, next) => {
    const { token } = req.headers;

    if (!token) {
        return res.json({ success: false, message: 'Not Authorized. Login Again' });
    }

    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(token_decode.id);

        if (!user) {
            return res.json({ success: false, message: 'User not found. Please log in again' });
        }

        req.userId = token_decode.id;
        next();

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: 'Invalid Token or Session Expired' });
    }
};

