import React, { createContext, useReducer, useContext } from "react";

// Initial state for the cart
const initialState = {
  items: [], // Will store products added to the cart
  totalQuantity: 0, // Total number of items in the cart
  totalPrice: 0, // Total price of items in the cart
  savings: 0,
  finalPrice: 0,
};

// Cart action types
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const UPDATE_QUANTITY = "UPDATE_QUANTITY";

// Reducer function to handle cart actions
const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // Check if product is already in the cart
      const existingProductIndex = state.items.findIndex(item => 
        item.product_name === action.payload.product_name &&
        item.selectedFruit === action.payload.selectedFruit &&
        Array.isArray(item.selectedFlavours) &&
        item.selectedFlavours.length === action.payload.selectedFlavours.length &&
        item.selectedFlavours.every((flavour, index) => flavour === action.payload.selectedFlavours[index])
    );    
      let updatedItems;
      if (existingProductIndex >= 0) {
        const updatedItem = { ...state.items[existingProductIndex] };
        updatedItem.quantity += action.payload.quantity;
        updatedItems = [...state.items];
        updatedItems[existingProductIndex] = updatedItem;
      } else {
        updatedItems = [...state.items, action.payload];
      }
      const updatedTotalPrice = updatedItems.reduce(
        (acc, item) => acc + item.product_original_price * item.quantity,
        0
      );
      const updatedTotalQuantity = updatedItems.reduce(
        (acc, item) => acc + item.quantity,
        0
      );
      const updatedSavings = parseFloat((updatedTotalPrice * 0.3).toFixed(2));
      const updatedFinalPrice = parseFloat(
        (updatedTotalPrice - updatedSavings).toFixed(2)
      );
      return {
        items: updatedItems,
        totalQuantity: updatedTotalQuantity,
        totalPrice: updatedTotalPrice,
        savings: updatedSavings,
        finalPrice: updatedFinalPrice,
      };

    case REMOVE_FROM_CART:
      const filteredItems = state.items.filter(item => 
        item.product_name !== action.payload.product_name ||
        item.selectedFruit !== action.payload.selectedFruit ||
        !(
            Array.isArray(item.selectedFlavours) &&
            item.selectedFlavours.length === action.payload.selectedFlavours.length &&
            item.selectedFlavours.every((flavour, index) => flavour === action.payload.selectedFlavours[index])
        )
    );    
      const newTotalPrice = filteredItems.reduce(
        (acc, item) => acc + item.product_original_price * item.quantity,
        0
      );
      const newTotalQuantity = filteredItems.reduce(
        (acc, item) => acc + item.quantity,
        0
      );
      const newSavings = parseFloat((newTotalPrice * 0.3).toFixed(2));
      const newFinalPrice = parseFloat((newTotalPrice - newSavings).toFixed(2));
      return {
        items: filteredItems,
        totalQuantity: newTotalQuantity,
        totalPrice: newTotalPrice,
        savings: newSavings,
        finalPrice: newFinalPrice,
      };

    case UPDATE_QUANTITY:
      const itemIndex = state.items.findIndex(item => 
        item.product_name === action.payload.product_name &&
        item.selectedFruit === action.payload.selectedFruit &&
        Array.isArray(item.selectedFlavours) &&
        item.selectedFlavours.length === action.payload.selectedFlavours.length &&
        item.selectedFlavours.every((flavour, index) => flavour === action.payload.selectedFlavours[index])
    ); 
    
      if (itemIndex >= 0) {
        const updatedItem = {
          ...state.items[itemIndex],
          quantity: action.payload.quantity,
        };
        const updatedCartItems = [...state.items];
        updatedCartItems[itemIndex] = updatedItem;
        const updatedPrice = updatedCartItems.reduce(
          (acc, item) => acc + item.product_original_price * item.quantity,
          0
        );
        const updatedQuantity = updatedCartItems.reduce(
          (acc, item) => acc + item.quantity,
          0
        );
        const newSavings = parseFloat((updatedPrice * 0.3).toFixed(2));
        const newFinalPrice = parseFloat(
          (updatedPrice - newSavings).toFixed(2)
        );
        return {
          items: updatedCartItems,
          totalQuantity: updatedQuantity,
          totalPrice: updatedPrice,
          savings: newSavings,
          finalPrice: newFinalPrice,
        };
      }
      return state;

    default:
      return state;
  }
};

// Create the Cart context
const CartContext = createContext();

// Cart provider component to wrap the app
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the Cart context
export const useCart = () => useContext(CartContext);
