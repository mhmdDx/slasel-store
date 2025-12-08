"use client"

import Image from "next/image"
import Link from "next/link"
import { ShoppingBag, Menu, Filter, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect, Suspense, useRef } from "react"
import { useCart } from "@/contexts/cart-context"
import MobileMenu from "@/components/MobileMenu"
import { useSearchParams } from "next/navigation"
import { motion, useInView } from "framer-motion"

const products = [
    // Jewelry
    {
        id: 1,
        name: "Elegant Silver Bracelet",
        price: "E.G 89.99",
        image: "/jawlry/Fantastic Pure 935 Argentium Silver Open Flower Beautiful Pearl Unique Bracelet.jpeg",
        category: "Jewelry"
    },
    {
        id: 2,
        name: "Infinity Knot Necklace",
        price: "E.G 129.99",
        image: "/jawlry/Infinity Knot Necklace.jpeg",
        category: "Jewelry"
    },
    {
        id: 3,
        name: "Gold Wrap Bangle",
        price: "E.G 149.99",
        image: "/jawlry/Naomi Wrap Hinge Bangle - Gold - Gold.jpeg",
        category: "Jewelry"
    },
    {
        id: 4,
        name: "Delicate Necklaces",
        price: "E.G 79.99",
        image: "/jawlry/Necklaces.jpeg",
        category: "Jewelry"
    },
    {
        id: 5,
        name: "Elegant Gold Watch",
        price: "E.G 199.99",
        image: "/jawlry/Small Gold Watches for Women,Analog Womens Watch with Stainless Steel Expansion Band,Oval Case.jpeg",
        category: "Jewelry"
    },
    {
        id: 6,
        name: "Pearl Bracelet Set",
        price: "E.G 119.99",
        image: "/jawlry/The Town & Country Preppy Awards.jpeg",
        category: "Jewelry"
    },
    {
        id: 7,
        name: "Zircon Steel Ring",
        price: "E.G 59.99",
        image: "/jawlry/Zircon-Stainless-Steel-Ring-O-Shape-Geometric-Open-Adjustable-For-Women-Gold-Color-Ring-Fashion-Popular_152be46b-e8d8-4414-8eee-9d31ba9ee2a0.webp",
        category: "Jewelry"
    },
    {
        id: 8,
        name: "Rose Gold Bracelet",
        price: "E.G 139.99",
        image: "/jawlry/b3d30f311cfb2a809e0e18a96602659c.webp",
        category: "Jewelry"
    },
    {
        id: 9,
        name: "Classic Pearl Necklace",
        price: "E.G 169.99",
        image: "/jawlry/download (1).jpeg",
        category: "Jewelry"
    },
    {
        id: 10,
        name: "Van Cleef Bracelet",
        price: "E.G 299.99",
        image: "/jawlry/van cleef bracelet.jpeg",
        category: "Jewelry"
    },
    {
        id: 11,
        name: "Designer Ring",
        price: "E.G 99.99",
        image: "/jawlry/850295d6155142fb266e7921090bbfcd_600x.webp",
        category: "Jewelry"
    },
    // Hair Accessories
    {
        id: 12,
        name: "Star Headband",
        price: "E.G 12.99",
        image: "/hair-acc/1pc Double Layer Star Headband For Women, Unique Design Star Hairband, Elegant & Simple Sweet Style Headband, All-Match Thin Headband Hair Accessory Tiaras,Hairband,Hair Hoop.jpeg",
        category: "Hair Accessories"
    },
    {
        id: 13,
        name: "Tortoiseshell Hair Claws",
        price: "E.G 15.99",
        image: "/hair-acc/Anthropologie Tortoiseshell Hair Claws Set Of 2 - Cream Tort.jpeg",
        category: "Hair Accessories"
    },
    {
        id: 14,
        name: "Resin Clips Set",
        price: "E.G 9.99",
        image: "/hair-acc/FAT FACE Multi 2 Pack Resin Clips ONE Womens.jpeg",
        category: "Hair Accessories"
    },
    {
        id: 15,
        name: "Gold Flower Pin",
        price: "E.G 18.99",
        image: "/hair-acc/Gold Enamel Flower Hair Pin.jpeg",
        category: "Hair Accessories"
    },
    {
        id: 16,
        name: "Nora Flower Claw",
        price: "E.G 14.99",
        image: "/hair-acc/Nora Flower Claw Clip.jpeg",
        category: "Hair Accessories"
    },
    {
        id: 17,
        name: "Resin Flower Claw",
        price: "E.G 13.99",
        image: "/hair-acc/Piranha de Cabelo em Resina com Forma de Flor.jpeg",
        category: "Hair Accessories"
    },
    {
        id: 18,
        name: "Polka Dot Clips",
        price: "E.G 11.99",
        image: "/hair-acc/Polka Dot Creaseless Clips, Set of 4 for Women, Acrylic_Iron by Anthropologie.jpeg",
        category: "Hair Accessories"
    },
    {
        id: 19,
        name: "Printed Claw Clip",
        price: "E.G 10.99",
        image: "/hair-acc/Printed Polka Dot Claw Clip.jpeg",
        category: "Hair Accessories"
    },
    {
        id: 20,
        name: "Trendy Hair Pieces",
        price: "E.G 24.99",
        image: "/hair-acc/This Grandma Trend Is Here to Stay, So Snap Up These Under-$100 Pieces Stat.jpeg",
        category: "Hair Accessories"
    },
    {
        id: 21,
        name: "Elegant Hair Styling Set",
        price: "E.G 39.99",
        image: "/hair-acc/download (1).jpeg",
        category: "Hair Accessories"
    },
    // Bags
    {
        id: 22,
        name: "Prada Fashion Tote",
        price: "E.G 249.99",
        image: "/pags/Prada Fashion Collections For Women _ Moda Operandi.jpeg",
        category: "Bags"
    },
    {
        id: 23,
        name: "Boho Crochet Beach Tote",
        price: "E.G 79.99",
        image: "/pags/Women's Summer Crochet Beach Tote – Boho Chic Knit Bag, Aesthetic Hippie Fashion.jpeg",
        category: "Bags"
    },
    {
        id: 24,
        name: "Luxury Straw Tote Bag",
        price: "E.G 159.99",
        image: "/pags/Grande Capacidade Feminina Ráfia Palha Tote Bolsa Boêmio Luxo Verão Praia Férias Bolsa De Ombro.jpeg",
        category: "Bags"
    },
    {
        id: 25,
        name: "Designer Knit Bag",
        price: "E.G 189.99",
        image: "/pags/knit bag.jpeg",
        category: "Bags"
    },
    {
        id: 26,
        name: "Elegant Summer Bag",
        price: "E.G 129.99",
        image: "/pags/download (2).jpeg",
        category: "Bags"
    }

]



function CollectionContent() {
    const searchParams = useSearchParams()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [isFilterOpen, setIsFilterOpen] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState("All")
    const { cartCount, addToCart } = useCart()

    // Refs for scroll-triggered animations
    const productsRef = useRef(null)
    const productsInView = useInView(productsRef, { once: true, margin: "-50px" })

    // Set initial category from URL parameter
    useEffect(() => {
        const categoryParam = searchParams.get('category')
        if (categoryParam) {
            setSelectedCategory(categoryParam)
        }
    }, [searchParams])

    const handleAddToCart = (product: typeof products[0]) => {
        addToCart({
            id: product.id,
            name: product.name,
            price: parseFloat(product.price.replace('E.G ', '')),
            quantity: 1,
            image: product.image
        })
    }

    const filteredProducts = selectedCategory === "All"
        ? products
        : products.filter(product => product.category === selectedCategory)

    const categories = ["All", "Jewelry", "Hair Accessories", "Bags"]

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
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
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

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="flex items-center justify-center space-x-4 mb-6"
                        >
                            <span className="h-[1px] w-12 bg-pink-500"></span>
                            <span className="text-pink-600 text-xs uppercase tracking-widest font-medium">Shop Our Favorites</span>
                            <span className="h-[1px] w-12 bg-pink-500"></span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 leading-tight mb-6"
                        >
                            Curated <span className="font-serif italic text-pink-600">Collections</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className="text-gray-600 text-lg leading-relaxed"
                        >
                            Discover our handpicked selection of elegant jewelry and trendy hair accessories. Find the perfect pieces to express your unique style.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Filter Section */}
            <section className="py-8 bg-white border-b border-gray-100/50 relative z-40">
                <div className="container mx-auto px-6">
                    <div className="flex justify-start md:justify-end">
                        <div className="relative">
                            <button
                                onClick={() => setIsFilterOpen(!isFilterOpen)}
                                className="flex items-center space-x-2 text-sm uppercase tracking-widest font-medium text-gray-800 hover:text-pink-600 transition-colors"
                            >
                                <Filter className="w-4 h-4" />
                                <span>Filter</span>
                                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isFilterOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {isFilterOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                    className="absolute left-0 md:left-auto md:right-0 mt-4 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50"
                                >
                                    {categories.map((category) => (
                                        <button
                                            key={category}
                                            onClick={() => {
                                                setSelectedCategory(category)
                                                setIsFilterOpen(false)
                                            }}
                                            className={`w-full text-left px-4 py-2 text-sm transition-colors hover:bg-pink-50 ${selectedCategory === category
                                                ? "text-pink-600 font-medium"
                                                : "text-gray-600"
                                                }`}
                                        >
                                            {category}
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </div>
                    </div>

                    {/* Active Filter Display (Optional) */}
                    {selectedCategory !== "All" && (
                        <div className="mt-4 flex items-center space-x-2 text-sm text-gray-500">
                            <span>Active Filter:</span>
                            <span className="font-medium text-gray-800">{selectedCategory}</span>
                            <button
                                onClick={() => setSelectedCategory("All")}
                                className="ml-2 text-xs text-pink-500 hover:underline"
                            >
                                Clear
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-16 bg-white" ref={productsRef}>
                <div className="container mx-auto px-6">
                    <div
                        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-6 md:gap-y-16"
                    >
                        {filteredProducts.map((product, index) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={productsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{
                                    delay: Math.min(index * 0.05, 0.4),
                                    duration: 0.5,
                                    ease: "easeOut"
                                }}
                                className="group flex flex-col h-full"
                            >
                                <div className="bg-white rounded-lg overflow-hidden flex-grow flex flex-col">
                                    {/* Product Image */}
                                    <Link href="#" className="block cursor-pointer">
                                        <div className="relative aspect-square overflow-hidden bg-gray-50 rounded-lg mb-4">
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
                                        </div>
                                    </Link>

                                    {/* Product Info */}
                                    <div className="flex flex-col flex-grow text-center px-2">
                                        <h3 className="text-sm md:text-base font-medium text-gray-800 mb-2 line-clamp-1 group-hover:text-pink-600 transition-colors">
                                            {product.name}
                                        </h3>
                                        <p className="text-lg font-serif italic text-pink-600 mb-4">
                                            {product.price}
                                        </p>

                                        <div className="mt-auto pb-2">
                                            <Button
                                                onClick={() => handleAddToCart(product)}
                                                className="w-full bg-black text-white hover:bg-pink-500 hover:text-white rounded-sm h-10 text-xs tracking-widest uppercase transition-all duration-300 shadow-sm hover:shadow-md"
                                            >
                                                Add to Cart
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {filteredProducts.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-gray-500 text-lg">No products found in this category.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">
                        Can't Find What You're Looking For?
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Contact us for custom jewelry pieces or special requests. We're here to help you find the perfect accessory.
                    </p>
                    <Button className="bg-black text-white hover:bg-pink-600 rounded-none px-12 py-6 h-auto text-sm tracking-widest uppercase transition-all duration-300">
                        Contact Us
                    </Button>
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

export default function CollectionPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-white flex items-center justify-center">
            <div className="text-center">
                <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-pink-500 border-r-transparent"></div>
                <p className="mt-4 text-gray-600">Loading...</p>
            </div>
        </div>}>
            <CollectionContent />
        </Suspense>
    )
}


