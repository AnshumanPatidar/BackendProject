const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((error) =>
      next(error)
    );
  };
};

export { asyncHandler };

// const asyncHandler = ( ) => {}
// const asyncHandler = (func) => ( ) => {}
// const asyncHandler = (func) => async () => {}

// THIS IS A WRAPPER FUNCTION USING TRY AND CATCH BUT WE ARE NOT GOING TO USE IT
// ACTUALY WHAT WE ARE DOING HERE IT WE ARE WRAPPING OUR ASYNCRONOUS FUNCTION OR PROCESSES
// SO IF WE EVER GET A ASYNCRONOUS FUNCTION SO WE WILL PASS THE FUNCTION TO HANDLE ITS PROMISE
// NHI AAYE SMJH ME TOH VIDEO DELK LENA 8 TH NUMBER K 😎
// ITS JUST TO SHOW THAT , THIS IS ALSO A WAY TO WRITE A WRAPPER FUNCTION

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
