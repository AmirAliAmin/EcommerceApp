import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (prop)=>{

    const currency = '$';
    const delivery_fee = 10
    const [search, setSearch] = useState("");
    const[showSearch, setShowSearch] = useState(false)
    const [cardItems, setCartItems] = useState({})
    const navigate = useNavigate()

    const addToCart = async (itemId, size) => {
        if (!size) {
            toast.error("Select the Size")
            
        }

        let cartData = structuredClone(cardItems);

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;  
            }else{
                cartData[itemId][size] = 1;
            }
        }else{
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItems(cartData)
        
    }

    const getCartCount = ()=>{
        let totalCount = 0;
        for(const items in cardItems){
            for(const item in cardItems[items]){
                try {
                    if (cardItems[items][item] > 0) {
                        totalCount += cardItems[items][item]
                        
                    }
                } catch (error) {
                    
                }
            }
        }
        return totalCount
    }

    const updateQuantity = async (itemId, size, quantity) => {
        let cartData = structuredClone(cardItems);
        cartData[itemId][size] = quantity;

        setCartItems(cartData)
        
    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for(const items in cardItems ){
            let itemInfo = products.find((product)=>product._id === items)
            for(const item in cardItems[items]){
                try {
                    if (cardItems[items][item] >0) {
                        totalAmount += itemInfo.price * cardItems[items][item]
                        
                    }
                } catch (error) {
                    
                }
            }
        }
        return totalAmount;
        
    }

    const value ={
        products, currency,delivery_fee,
        search,setSearch,showSearch,setShowSearch,
        cardItems,addToCart,
        getCartCount,updateQuantity,
        getCartAmount,navigate
    }

   
    return(
        <ShopContext.Provider value={value}>
            {prop.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider;