import User from "../models/user";

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


// export const addUser = async (req, res) => {
//     try {
//         const { name, displayName, loggedInWith } = req.body;
//         const newUserObj = {
//             name,
//             displayName,
//             loggedInWith,
//         }
//     } catch (error) {

//     }
// }

export const createUser = (req,res) => {
    const user = new User(req.body);
    user.save((err,user) => {
        if(err) {
            return res.status(400).json({
                error: "Not able to save user in DB"
            });
        }
        res.json({user});
    });
};
