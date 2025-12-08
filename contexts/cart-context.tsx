"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export interface CartItem {
    id: number
    name: string
    price: number
    quantity: number
    image: string
}

interface CartContextType {
    cartItems: CartItem[]
    addToCart: (item: CartItem) => void
    removeFromCart: (id: number) => void
    updateQuantity: (id: number, quantity: number) => void
    clearCart: () => void
    cartCount: number
    cartTotal: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
    const [cartItems, setCartItems] = useState<CartItem[]>([])
    const [isLoaded, setIsLoaded] = useState(false)

    // Load cart from localStorage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem('cart')
        if (savedCart) {
            try {
                setCartItems(JSON.parse(savedCart))
            } catch (error) {
                console.error('Error loading cart:', error)
            }
        }
        setIsLoaded(true)
    }, [])

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem('cart', JSON.stringify(cartItems))
        }
    }, [cartItems, isLoaded])

    const addToCart = (item: CartItem) => {
        setCartItems((prev) => {
            const existingItem = prev.find((i) => i.id === item.id)
            if (existingItem) {
                return prev.map((i) =>
                    i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
                )
            }
            return [...prev, item]
        })
    }

    const removeFromCart = (id: number) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id))
    }

    const updateQuantity = (id: number, quantity: number) => {
        if (quantity <= 0) {
            removeFromCart(id)
            return
        }
        setCartItems((prev) =>
            prev.map((item) => (item.id === id ? { ...item, quantity } : item))
        )
    }

    const clearCart = () => {
        setCartItems([])
    }

    const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)
    const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                cartCount,
                cartTotal,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    const context = useContext(CartContext)
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider')
    }
    return context
}
