import { createError } from "../utils/error.js";
import User from "../models/User.js";
import Video from "../models/Video.js";

// update User
export const update = async (req, res, next) => {
    if (req.params.id === req.user.id) {
        try {
            const updatedUser = await User.findByIdAndUpdate(
                req.params.id, 
                {$set:req.body},
                {new: true}
            );
            res.status(200).json(updatedUser);
        } catch(err) {
            next(err)
        }
    } else {
        return next(createError(403, "You can only update your account!"))
    }
};

// delete User
export const deleteUser = async (req, res, next) => {
    if (req.params.id === req.user.id) {
        try {
            await User.findByIdAndDelete(
                req.params.id 
            );
            res.status(200).json("User has been deleted.");
        } catch(err) {
            next(err)
        }
    } else {
        return next(createError(403, "You can delete only your account!"))
    }
};

// get a User
export const getUser = async (req, res, next) => {
    try{
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    } catch(err){
        next(err)
    }
};

// subscribe a User
export const subscribe = async (req, res, next) => {
    try{
        await User.findByIdAndUpdate(req.user.id, {
            // $push: {subscribedUsers:req.params.id} //using $push creates duplicates
            $addToSet: {subscribedUsers:req.params.id}
        })
        await User.findByIdAndUpdate(req.params.id, {
            $inc: {subscribers: 1}
        })
        res.status(200).json("Subscription successful.")
    } catch(err){
        next(err)
    }
};

// unsubscribe a User
export const unsubscribe = async (req, res, next) => {
    try{
        await User.findByIdAndUpdate(req.user.id, {
            $pull: {subscribedUsers:req.params.id}
        })
        await User.findByIdAndUpdate(req.params.id, {
            $inc: {subscribers: -1}
        })
        res.status(200).json("Unsubscribed successful.")
    } catch(err){
        next(err)
    }
};

// like a Video
export const like = async (req, res, next) => {
    const id = req.user.id;
    const videoId = req.params.videoId;
    try{
        await Video.findByIdAndUpdate(videoId, {
            $addToSet:{likes:id},
            $pull:{dislikes:id}
        })
        res.status(200).json("You've liked the video.")
    } catch(err){
        next(err)
    }
};

// dislike a Video
export const dislike = async (req, res, next) => {
    const id = req.user.id;
    const videoId = req.params.videoId;
    try{
        await Video.findByIdAndUpdate(videoId, {
            $addToSet:{dislikes:id},
            $pull:{likes:id}
        })
        res.status(200).json("You've disliked the video.")
    } catch(err){
        next(err)
    }
};