"use client"

import Image from "next/image"
import Link from "next/link"
import { ShoppingBag, Menu, Filter, ChevronDown, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect, Suspense } from "react"
import { useCart } from "@/contexts/cart-context"
import MobileMenu from "@/components/MobileMenu"
import { useSearchParams } from "next/navigation"

const products = [
    // Jewelry
    {
        id: 1,
        name: "Elegant Silver Bracelet",
        price: "E.G 89.99",
        image: "/jawlry/Fantastic Pure 935 Argentium Silver Open Flower Beautiful Pearl Unique Bracelet.jpeg",
        category: "Bracelets"
    },
    {
        id: 2,
        name: "Infinity Knot Necklace",
        price: "E.G 129.99",
        image: "/jawlry/Infinity Knot Necklace.jpeg",
        category: "Necklaces"
    },
    {
        id: 3,
        name: "Gold Wrap Bangle",
        price: "E.G 149.99",
        image: "/jawlry/Naomi Wrap Hinge Bangle - Gold - Gold.jpeg",
        category: "Bracelets"
    },
    {
        id: 4,
        name: "Delicate Necklaces",
        price: "E.G 79.99",
        image: "/jawlry/Necklaces.jpeg",
        category: "Necklaces"
    },
    {
        id: 5,
        name: "Elegant Gold Watch",
        price: "E.G 199.99",
        image: "/jawlry/Small Gold Watches for Women,Analog Womens Watch with Stainless Steel Expansion Band,Oval Case.jpeg",
        category: "Watches"
    },
    {
        id: 6,
        name: "Pearl Bracelet Set",
        price: "E.G 119.99",
        image: "/jawlry/The Town & Country Preppy Awards.jpeg",
        category: "Bracelets"
    },
    {
        id: 7,
        name: "Zircon Steel Ring",
        price: "E.G 59.99",
        image: "/jawlry/Zircon-Stainless-Steel-Ring-O-Shape-Geometric-Open-Adjustable-For-Women-Gold-Color-Ring-Fashion-Popular_152be46b-e8d8-4414-8eee-9d31ba9ee2a0.webp",
        category: "Rings"
    },
    {
        id: 8,
        name: "Rose Gold Bracelet",
        price: "E.G 139.99",
        image: "/jawlry/b3d30f311cfb2a809e0e18a96602659c.webp",
        category: "Watches"
    },
    {
        id: 9,
        name: "Classic Pearl Watch",
        price: "E.G 169.99",
        image: "/jawlry/download (1).jpeg",
        category: "Watches"
    },
    {
        id: 10,
        name: "Van Cleef Bracelet",
        price: "E.G 299.99",
        image: "/jawlry/van cleef bracelet.jpeg",
        category: "Bracelets"
    },
    {
        id: 11,
        name: "Designer Ring",
        price: "E.G 99.99",
        image: "/jawlry/850295d6155142fb266e7921090bbfcd_600x.webp",
        category: "Rings"
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
    },
    // New Watches
    {
        id: 27,
        name: "Rose Gold Minimalist Watch",
        price: "E.G 189.99",
        image: "/Wathces/Gemini_Generated_Image_543ka2543ka2543k.webp",
        category: "Watches"
    },
    {
        id: 28,
        name: "Silver Mesh Strap Watch",
        price: "E.G 159.99",
        image: "/Wathces/Gemini_Generated_Image_9g9jpm9g9jpm9g9j.webp",
        category: "Watches"
    },
    {
        id: 29,
        name: "Classic Leather Strap Watch",
        price: "E.G 129.99",
        image: "/Wathces/Gemini_Generated_Image_hvuun7hvuun7hvuu.webp",
        category: "Watches"
    },
    {
        id: 30,
        name: "Modern Black Dial Watch",
        price: "E.G 199.99",
        image: "/Wathces/Gemini_Generated_Image_nrz7jgnrz7jgnrz7.webp",
        category: "Watches"
    },
    {
        id: 31,
        name: "Luxury Diamond Bezel Watch",
        price: "E.G 299.99",
        image: "/Wathces/Gemini_Generated_Image_qfwq74qfwq74qfwq.webp",
        category: "Watches"
    },
    {
        id: 32,
        name: "Elegant Two-Tone Watch",
        price: "E.G 249.99",
        image: "/Wathces/Gemini_Generated_Image_vovb0vovb0vovb0v.webp",
        category: "Watches"
    }

]



function CollectionContent() {
    const searchParams = useSearchParams()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [isFilterOpen, setIsFilterOpen] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState("All")
    const { cartCount, addToCart } = useCart()

    const [addedItems, setAddedItems] = useState<Record<number, boolean>>({})
    const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null)

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
        setAddedItems(prev => ({ ...prev, [product.id]: true }))
        setTimeout(() => {
            setAddedItems(prev => ({ ...prev, [product.id]: false }))
        }, 2000)
    }

    const filteredProducts = selectedCategory === "All"
        ? products
        : products.filter(product => product.category === selectedCategory)

    const categories = ["All", "Bracelets", "Necklaces", "Rings", "Watches", "Hair Accessories", "Bags"]

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
                            <Link href="/collection" className="hover:text-pink-500 transition-colors duration-300 relative group">
                                COLLECTION
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                            <Link href="/#about" className="hover:text-pink-500 transition-colors duration-300 relative group">
                                ABOUT
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
                    <div
                        className="text-center max-w-3xl mx-auto"
                    >
                        <div className="flex items-center justify-center space-x-4 mb-6">
                            <span className="h-[1px] w-12 bg-pink-500"></span>
                            <span className="text-pink-600 text-xs uppercase tracking-widest font-medium">Shop Our Favorites</span>
                            <span className="h-[1px] w-12 bg-pink-500"></span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 leading-tight mb-6">
                            Curated <span className="font-serif italic text-pink-600">Collections</span>
                        </h1>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Discover our handpicked selection of elegant jewelry and trendy hair accessories. Find the perfect pieces to express your unique style.
                        </p>
                    </div>
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
                                <div
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
                                </div>
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
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div
                        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-6 md:gap-y-16"
                    >
                        {filteredProducts.map((product) => (
                            <div
                                key={product.id}
                                className="group flex flex-col h-full"
                                data-aos="fade-up"
                                data-aos-delay={(Number(product.id) % 8) * 50}
                            >
                                <div className="bg-white rounded-lg overflow-hidden flex-grow flex flex-col">
                                    {/* Product Image */}
                                    <div
                                        onClick={() => setSelectedProduct(product)}
                                        className="block cursor-pointer relative aspect-square overflow-hidden bg-gray-50 rounded-lg mb-4"
                                    >
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
                                    </div>

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
                                                className={`w-full rounded-sm h-10 text-xs tracking-widest uppercase transition-all duration-300 shadow-sm hover:shadow-md ${addedItems[product.id] ? "bg-pink-600 text-white hover:bg-pink-600" : "bg-black text-white hover:bg-pink-500 hover:text-white"}`}
                                            >
                                                {addedItems[product.id] ? "Added" : "Add to Cart"}
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
            < footer className="bg-black text-white" >
                <div className="container mx-auto px-6 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                        {/* About Section */}
                        <div>
                            <Image
                                src="/sa-removebg-preview.png"
                                alt="Salsel Logo"
                                width={40}
                                height={40}
                                className="h-10 w-auto mb-4"
                            />
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                Your destination for premium accessories. We curate timeless pieces that define your unique style.
                            </p>
                            <div className="flex space-x-4">
                                <a href="https://instagram.com/salsel" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors duration-300">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </a>
                                <a href="https://facebook.com/salsel" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors duration-300">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </a>
                                <a href="https://twitter.com/salsel" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors duration-300">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-lg font-medium mb-4 uppercase tracking-wider">Quick Links</h4>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-300 text-sm">Home</a></li>
                                <li><a href="#collections" className="text-gray-400 hover:text-pink-400 transition-colors duration-300 text-sm">Collections</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-300 text-sm">New Arrivals</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-300 text-sm">Best Sellers</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-300 text-sm">Sale</a></li>
                            </ul>
                        </div>

                        {/* Customer Service */}
                        <div>
                            <h4 className="text-lg font-medium mb-4 uppercase tracking-wider">Customer Service</h4>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-300 text-sm">Contact Us</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-300 text-sm">Shipping Info</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-300 text-sm">Returns & Exchanges</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-300 text-sm">FAQs</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-300 text-sm">Size Guide</a></li>
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div>
                            <h4 className="text-lg font-medium mb-4 uppercase tracking-wider">Newsletter</h4>
                            <p className="text-gray-400 text-sm mb-4">
                                Subscribe to get special offers and updates.
                            </p>
                            <div className="flex flex-col space-y-3">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="px-4 py-3 bg-gray-800 text-white rounded-sm focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm"
                                />
                                <button className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-sm transition-colors duration-300 font-medium text-sm uppercase tracking-wider">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-gray-800 pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                            <p className="text-gray-400 text-sm">
                                © {new Date().getFullYear()} Slasel. All rights reserved.
                            </p>
                            <div className="flex space-x-6">
                                <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-300 text-sm">Privacy Policy</a>
                                <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-300 text-sm">Terms of Service</a>
                                <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-300 text-sm">Cookie Policy</a>
                            </div>
                        </div>
                        <div className="mt-4 text-center">
                            <p className="text-gray-500 text-sm">
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
                    </div>
                </div>
            </footer >

            {/* Product Modal */}
            {selectedProduct && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm" onClick={() => setSelectedProduct(null)}>
                    <div
                        className="relative w-full max-w-3xl aspect-square md:aspect-[4/3] rounded-lg overflow-hidden flex items-center justify-center animate-in fade-in zoom-in duration-300"
                        onClick={e => e.stopPropagation()}
                    >
                        <Image
                            src={selectedProduct.image}
                            alt={selectedProduct.name}
                            fill
                            className="object-contain"
                        />
                        <button
                            onClick={() => setSelectedProduct(null)}
                            className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full transition-colors z-10 text-white border border-white/20"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            )}

        </div >
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


