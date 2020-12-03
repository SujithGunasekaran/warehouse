const router = require('express').Router();
const { compareSync } = require('bcrypt');
let UserCart = require('../userCartModel');

/* new cart add API */

router.route('/cart/addProduct').post((req,res) => {
    const username = req.body.username
    const productImage = req.body.productImage
    const productName = req.body.productName
    const productType = req.body.productType
    const productBrandName = req.body.productBrandName
    const productBrandCode = req.body.productBrandCode
    const productRating = req.body.productRating
    const productActualPrice = req.body.productActualPrice
    const productPrice = req.body.productPrice
    const productColor = req.body.productColor
    const productSize = req.body.productSize
    const productQuantity = req.body.productQuantity
    const productSizeName = req.body.productSizeName
    const fromPage = req.body.fromPage
    if(fromPage === 'product'){
        const newUserCartInfo = new UserCart({username,productImage,productName,productType,productBrandName,productBrandCode,productRating,productActualPrice,productPrice,productColor,productSize,productQuantity,productSizeName})
        UserCart.findOne({username : username, productName : productName, productColor : productColor, productSize : productSize})
        .then((user) =>{
            if(user){
                res.status(300).send()
            }
            else{
                newUserCartInfo.save()
                .then(()=>{
                    res.status(200).send()
                })
                .catch(()=>{
                    res.status(404).send()
                })
            }
        })
        .catch(()=>{
            res.status(404).send()
        })
        // else if(productColor === 'No' && productSize === 'No'){
        //     UserCart.findOne({username : username, productName : productName})
        //     .then((user) =>{
        //         if(user){
        //             res.status(300).send()
        //             console.log("already successfully")
        //         }
        //         else{
        //             newUserCartInfo.save()
        //             .then(()=>{
        //                 res.status(200).send()
        //                 console.log("Addedd")
        //             })
        //             .catch(()=>{
        //                 res.status(404).send()
        //                 console.log("network error")
        //             })
        //         }
        //     })
        //     .catch(()=>{
        //         res.status(404).send()
        //         console.log("Error")
        //     })
        // }
    }
    else{
        UserCart.findOneAndUpdate({username : username, productName : productName, productColor : productColor, productSize : productSize},{ $set:{productQuantity : productQuantity} }, { new : true } )
        .then(() =>{
            res.status(200).send()
        })
        .catch(()=>{
            res.status(404).send()
        })
    }
})

/* user cart get API */

router.route('/cart/getProduct').post((req,res)=>{
   UserCart.find({username : req.body.username})
   .then((user) => {
       if(user){
           res.status(200).json(user).send()
       }
       else{
           res.status(300).send()
       }
   })
   .catch(()=>{
       res.status(404).send()
   })
})

/* remove user cart */

router.route('/cart/removeProduct').post((req,res) =>{
    const username = req.body.username
    const productName = req.body.productName
    const productColor = req.body.productColor
    const productSize = req.body.productSize
    UserCart.findOneAndDelete({username : username, productName : productName,productColor : productColor, productSize : productSize})
    .then(()=>{
        res.status(200).send()
    })
    .catch(()=>{
        res.status(404).send()
    })
})

module.exports = router;