const asyncHandler = (requestHandler) => {
    return (req ,res , next ) => {
       Promise.resolve(requestHandler(req , res , next))
       .catch((error) => next(error))
    }
}

export {asyncHandler}


// const asyncHandler = ( ) => {}
  // const asyncHandler = (func) => ( ) => {}
     // const asyncHandler = (func) => async () => {}


// THIS IS A WRAPPER FUNCTION USING TRY AND CATCH BUT WE ARE NOT GOING TO USE IT 
// ACTUALY WHAT WE ARE DOING HERE IT WE ARE WRAPPING OUR MONGO DB CONNECTION FUNTION FROM DP FOLDER 
// SO IF WE EVER WANT TO USE IT AGAIN WE WILL USE IT AS MANY TIME AS WE WANT USING THIS FUNCTION
// ITS JUST TO SHOW THAT , THIS IS ALSO A WAY TO DO IT 

// THIS IS A HIGHER ORDER FUNCTION (FUNCTION THAT TAKE FUNTION AS A ARGUMENT AND TREAT THEM AS VARIABLE)


// const asyncHandler = (func) => async (req , res , next ) => {
//          try {
//             await func(req ,res , next) 
//          } catch (error) {
//              res.status(error.code || 500).json({
//               success : false,
//               message : error.message
//              })

//          }
// }