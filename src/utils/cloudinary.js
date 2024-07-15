import { v2 as cloudinary } from "cloudinary";

import fs from "fs";

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  if (!localFilePath) {
    return null;
  }

  try {
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    fs.unlinkSync(localFilePath);
    return response;
  } catch (error) {
    // Upload an image

    fs.unlinkSync(localFilePath); // remove the locally saved temporary file as the upload operation got failed
    console.log(error);
    return null;
  }
};

// this code was not working i don't know why

// const uploadOnCloudinary = async (localFilePath) => {
//   try {
//     if (!localFilePath) {
//       return null;
//     }
//
//     const response = await cloudinary.uploader.upload(localFilePath, {
//       resource_type: "auto",
//     });

//    return response;
//   } catch (error) {
//     fs.unlinkSync(localFilePath);

//     return null;
//   }
// };

export { uploadOnCloudinary };
