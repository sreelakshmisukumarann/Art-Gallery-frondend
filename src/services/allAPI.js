//register api

import { BASE_URL } from "./baseurl"
import { commonAPI } from "./commonAPI"

//for register
export const registerApi = async(user)=>{
   return await commonAPI("POST",`${BASE_URL}/register`,user,"")
}

//for login
export const loginApi = async(user)=>{
    return await commonAPI("POST",`${BASE_URL}/login`,user,"")
}

//add art work
export const addArtAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${BASE_URL}/artwork/add`,reqBody,reqHeader)
}

//get all art work
export const AllArtAPI = async()=>{
    return await commonAPI("GET",`${BASE_URL}/artwork/all-work`)
}

//get specfic artist work
export const specificArtistworkAPI = async(reqHeader)=>{
    return await commonAPI("GET",`${BASE_URL}/artwork/artist-work`,"",reqHeader)
}

//add profile details
export const addProfileAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${BASE_URL}/profile/addprofile`,reqBody,reqHeader)
}

//get all profile
export const AllProfileAPI = async()=>{
    return await commonAPI("GET",`${BASE_URL}/profile/all-profile`)
}

//get specfic artist profile
export const oneProfileAPI = async(reqHeader)=>{
    return await commonAPI("GET",`${BASE_URL}/profile/login-profile`,"",reqHeader)
}

//admin login
export const adminLoginAPI = async (user) => {
    return await commonAPI("POST", `${BASE_URL}/admin/login`, user, "");
  };

//admin updates
export const updateArtworkStatusAPI = async (artworkId, newStatus, reqHeader) => {
    return await commonAPI("POST", `${BASE_URL}/artworks/updateStatus`, { artworkId, newStatus }, reqHeader);
  };

//ad wishliast  
export const addWishlistAPI = async(wishlistItem,reqHeader)=>{
    return await commonAPI("POST",`${BASE_URL}/wishlist/add-wishlist`,wishlistItem,reqHeader)
}

//get one user wishlist
export const getWishlistAPI = async(reqHeader)=>{
    return await commonAPI("GET",`${BASE_URL}/wishlist/user-wishlist`,"",reqHeader)
}

//add to cart
export const addToCartAPI = async (cartItem, reqHeader) => {
    return await commonAPI("POST", `${BASE_URL}/cart/add-to-cart`, cartItem, reqHeader);
}

//get one user cart
export const getCartAPI = async(reqHeader)=>{
    return await commonAPI("GET",`${BASE_URL}/cart/user-cart`,"",reqHeader)
}

//delete wishlist
export const deleteWishlistAPI = async(itemId,reqHeader)=>{
    //path parameter - :id - router
    return await commonAPI("DELETE",`${BASE_URL}/wishlist/remove/${itemId}`,{},reqHeader)
 }

//delete cartitem
export const deleteCartAPI = async(itemId,reqHeader)=>{
    //path parameter - :id - router
    return await commonAPI("DELETE",`${BASE_URL}/cart/remove/${itemId}`,{},reqHeader)
 }
 
//add delivery details
export const DeliveryDetailsAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${BASE_URL}/delivery/delivery-details`,reqBody,reqHeader)
}

// //editDeliverydetails
// export const editDeliveryAPI = async(DeliveryId,reqBody,reqHeader)=>{
//     //path parameter - :id - router
//     return await commonAPI("PUT",`${BASE_URL}/delivery/edit/${DeliveryId}`,reqBody,reqHeader)
//  }

//checkout
export const checkoutAPI = async(reqHeader)=>{
    return await commonAPI("DELETE",`${BASE_URL}/checkout/remove`,"",reqHeader)
 }

//  //add to cart from wishlist
// export const addToCartFromWishlistAPI = async (itemId, reqHeader) => {
//     return await commonAPI("POST", `${BASE_URL}/cart/add-from-wishlist`, itemId, reqHeader);
// }
