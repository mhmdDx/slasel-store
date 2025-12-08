"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ShoppingBag, Menu, Trash2, Plus, Minus, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useCart } from "@/contexts/cart-context"
import MobileMenu from "@/components/MobileMenu"

// Sample cart items (in a real app, this would come from state management)
const initialCartItems = [
    {
        id: 1,
        name: "Elegant Silver Bracelet",
        price: 89.99,
        quantity: 1,
        image: "/jawlry/Fantastic Pure 935 Argentium Silver Open Flower Beautiful Pearl Unique Bracelet.jpeg"
    },
    {
        id: 2,
        name: "Infinity Knot Necklace",
        price: 129.99,
        quantity: 2,
        image: "/jawlry/Infinity Knot Necklace.jpeg"
    }
]

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 70,
            damping: 20,
            mass: 1
        } as const
    }
}

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1
        }
    }
}

export default function CartPage() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const { cartItems, removeFromCart, updateQuantity: updateCartQuantity, cartCount } = useCart()

    const updateQuantity = (id: number, change: number) => {
        const item = cartItems.find(i => i.id === id)
        if (item) {
            updateCartQuantity(id, item.quantity + change)
        }
    }

    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
    const shipping = subtotal > 0 ? 10 : 0
    const total = subtotal + shipping

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-gray-500/90 backdrop-blur-md border-b border-pink-100 transition-all duration-300">
                <div className="container mx-auto px-6">
                    <div className="flex items-center justify-between py-4">
                        {/* Mobile Menu Button - Left on sm/md */}
                        <button
                            className="md:hidden text-gray-200 hover:text-pink-500 transition-colors duration-300 order-1"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <Menu className="w-6 h-6" />
                        </button>

                        {/* Logo - Left on lg+, Center on sm/md */}
                        <div className="flex items-center space-x-2 absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 order-2 lg:order-first">
                            <Link href="/">
                                <Image src="/sa-removebg-preview.png" alt="Brand Logo" width={40} height={40} className="h-10 w-auto" />
                            </Link>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8 text-sm text-gray-200 lg:absolute lg:left-1/2 lg:-translate-x-1/2">
                            <Link href="/" className="hover:text-pink-500 transition-colors duration-300 relative group">
                                HOME
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                            <Link href="/#about" className="hover:text-pink-500 transition-colors duration-300 relative group">
                                ABOUT
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                            <Link href="/collection" className="hover:text-pink-500 transition-colors duration-300 relative group">
                                COLLECTION
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                            <Link href="/#contact" className="hover:text-pink-500 transition-colors duration-300 relative group">
                                CONTACT US
                                <span className="absolute -bottom-1 left-0 w-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
                            </Link>

                        </div>

                        {/* Right side - Cart and Search */}
                        <div className="flex items-center space-x-4 text-sm text-gray-200 order-3">

                            <Link href="/cart" className="hover:text-pink-500 transition-colors duration-300 relative">
                                <span className="hidden lg:inline">CART ({cartCount})</span>
                                <ShoppingBag className="w-6 h-6 lg:hidden" />
                                <span className="absolute -top-2 -right-2 w-2 h-2 bg-pink-500 rounded-full animate-pulse"></span>
                            </Link>
                        </div>
                    </div>


                </div>
            </nav>

            {/* Mobile Menu */}
            <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
            <section className="pt-32 pb-16 bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        className="text-center max-w-3xl mx-auto will-change-transform"
                    >
                        <div className="flex items-center justify-center space-x-4 mb-6">
                            <span className="h-[1px] w-12 bg-pink-500"></span>
                            <span className="text-pink-600 text-xs uppercase tracking-widest font-medium">Shopping Cart</span>
                            <span className="h-[1px] w-12 bg-pink-500"></span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 leading-tight mb-6">
                            Your <span className="font-serif italic text-pink-600">Cart</span>
                        </h1>
                        <Link href="/collection" className="inline-flex items-center text-gray-600 hover:text-pink-600 transition-colors">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Continue Shopping
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Cart Content */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    {cartItems.length === 0 ? (
                        // Empty Cart State
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                            className="text-center py-20 will-change-transform"
                        >
                            <ShoppingBag className="w-24 h-24 mx-auto text-gray-300 mb-6" />
                            <h2 className="text-3xl font-light text-gray-800 mb-4">Your cart is empty</h2>
                            <p className="text-gray-600 mb-8">Add some beautiful jewelry to your cart!</p>
                            <Link href="/collection">
                                <Button className="bg-black text-white hover:bg-pink-600 rounded-none px-12 py-6 h-auto text-sm tracking-widest uppercase transition-all duration-300">
                                    Shop Collection
                                </Button>
                            </Link>
                        </motion.div>
                    ) : (
                        // Cart Items
                        <div className="grid lg:grid-cols-3 gap-8">
                            {/* Cart Items List */}
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={staggerContainer}
                                className="lg:col-span-2 space-y-4 will-change-transform"
                            >
                                {cartItems.map((item) => (
                                    <motion.div
                                        key={item.id}
                                        variants={fadeInUp}
                                        className="bg-white border border-gray-200 rounded-lg p-4 md:p-6 flex flex-col sm:flex-row gap-4 hover:shadow-lg transition-shadow duration-300 will-change-transform"
                                    >
                                        {/* Product Image */}
                                        <div className="relative w-full sm:w-32 h-32 flex-shrink-0 bg-gray-50 rounded-lg overflow-hidden">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>

                                        {/* Product Details */}
                                        <div className="flex-1 flex flex-col justify-between">
                                            <div>
                                                <h3 className="text-lg font-medium text-gray-800 mb-2">{item.name}</h3>
                                                <p className="text-xl font-serif italic text-pink-600">E.G {item.price.toFixed(2)}</p>
                                            </div>

                                            {/* Quantity Controls */}
                                            <div className="flex items-center justify-between mt-4">
                                                <div className="flex items-center space-x-3 border border-gray-300 rounded-lg">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, -1)}
                                                        className="p-2 hover:bg-gray-100 transition-colors rounded-l-lg"
                                                        disabled={item.quantity <= 1}
                                                    >
                                                        <Minus className="w-4 h-4 text-gray-600" />
                                                    </button>
                                                    <span className="px-4 font-medium text-gray-800">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, 1)}
                                                        className="p-2 hover:bg-gray-100 transition-colors rounded-r-lg"
                                                    >
                                                        <Plus className="w-4 h-4 text-gray-600" />
                                                    </button>
                                                </div>

                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="text-red-500 hover:text-red-700 transition-colors p-2"
                                                >
                                                    <Trash2 className="w-5 h-5" />
                                                </button>
                                            </div>
                                        </div>

                                        {/* Item Total */}
                                        <div className="text-right sm:text-left lg:text-right">
                                            <p className="text-lg font-medium text-gray-800">
                                                E.G {(item.price * item.quantity).toFixed(2)}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* Cart Summary */}
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={fadeInUp}
                                className="lg:col-span-1 will-change-transform"
                            >
                                <div className="bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 rounded-lg p-4 sticky top-24">
                                    <h2 className="text-xl font-serif italic text-gray-800 mb-4">Order Summary</h2>

                                    <div className="space-y-3 mb-4">
                                        <div className="flex justify-between text-sm text-gray-600">
                                            <span>Subtotal</span>
                                            <span>E.G {subtotal.toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-between text-sm text-gray-600">
                                            <span>Shipping</span>
                                            <span>E.G {shipping.toFixed(2)}</span>
                                        </div>
                                        <div className="border-t border-gray-300 pt-3">
                                            <div className="flex justify-between text-lg font-medium text-gray-800">
                                                <span>Total</span>
                                                <span className="text-pink-600">E.G {total.toFixed(2)}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <Button className="w-full bg-black text-white hover:bg-pink-600 rounded-none px-6 py-4 h-auto text-xs tracking-widest uppercase transition-all duration-300 mb-3">
                                        Proceed to Checkout
                                    </Button>

                                    <Link href="/collection" className="block text-center text-xs text-gray-600 hover:text-pink-600 transition-colors">
                                        Continue Shopping
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black text-white py-12">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} Slasel. All rights reserved.
                    </p>
                    <p className="text-gray-500 text-sm mt-4">
                        Made by{" "}
                        <a
                            href="https://mohamed-eid.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-pink-400 hover:text-pink-300 transition-colors duration-300 font-medium"
                        >
                            mhmdDx
                        </a>
                    </p>
                </div>
            </footer>
        </div>
    )
}
