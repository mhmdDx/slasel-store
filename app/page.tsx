"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useRef } from "react"
import { Menu, ShoppingBag, Star } from "lucide-react"
import { useState, useEffect } from "react"
import { useCart } from "@/contexts/cart-context"
import MobileMenu from "@/components/MobileMenu"

const featuredProducts = [
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
    id: 7,
    name: "Zircon Steel Ring",
    price: "E.G 59.99",
    image: "/jawlry/Zircon-Stainless-Steel-Ring-O-Shape-Geometric-Open-Adjustable-For-Women-Gold-Color-Ring-Fashion-Popular_152be46b-e8d8-4414-8eee-9d31ba9ee2a0.webp",
    category: "Jewelry"
  }
]


export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { cartCount, addToCart } = useCart()



  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    setIsVisible(true)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])



  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
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
              <Image src="/sa-removebg-preview.png" alt="Brand Logo" width={40} height={40} className="h-10 w-auto" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8 text-sm text-gray-200 lg:absolute lg:left-1/2 lg:-translate-x-1/2">
              <Link href="/" className="hover:text-pink-500 transition-colors duration-300 relative group">
                HOME
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>

              <a href="#about" className="hover:text-pink-500 transition-colors duration-300 relative group">
                ABOUT
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <Link href="/collection" className="hover:text-pink-500 transition-colors duration-300 relative group">
                COLLECTION
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <a href="#contact" className="hover:text-pink-500 transition-colors duration-300 relative group">
                CONTACT US
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
              </a>

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
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20"
        style={{
          background: 'linear-gradient(135deg, #fce7f3 0%, #fbcfe8 50%, #fce7f3 100%)'
        }}
      >
        {/* Animated Background Elements */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 0.6
          }}
        >
          <div className="absolute top-20 left-10 w-24 h-24 sm:w-32 sm:h-32 bg-pink-300/40 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 sm:w-48 sm:h-48 bg-rose-300/40 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-20 h-20 sm:w-24 sm:h-24 bg-pink-200/30 rounded-full blur-lg animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div
              className="space-y-4 sm:space-y-6 lg:space-y-8 order-2 lg:order-1"
            >
              <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                <p className="text-pink-600 text-xs sm:text-sm uppercase tracking-wider font-medium" data-aos="fade-up">Trendy Girls Accessories</p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 leading-tight" data-aos="fade-up" data-aos-delay="100">
                  Express Your
                  <br />
                  <span className="text-pink-600 relative">
                    Unique Style
                    <svg className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-2 sm:h-3" viewBox="0 0 300 12" fill="none">
                      <path
                        d="M0 6C50 2 100 10 150 6C200 2 250 10 300 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="animate-draw"
                      />
                    </svg>
                  </span>
                </h1>
              </div>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-md" data-aos="fade-up" data-aos-delay="200">
                Discover our curated collection of stylish accessories - from elegant jewelry to trendy bags, clips, and
                hair accessories for every occasion.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4" data-aos="fade-up" data-aos-delay="300">
                <Link href="/collection">
                  <Button className="btn-primary bg-gray-900 hover:bg-black text-white px-8 py-6 rounded-full transition-all duration-300 hover:shadow-2xl hover:scale-105 shadow-lg group w-full sm:w-auto text-sm tracking-widest uppercase font-medium ">
                    SHOP COLLECTION
                    <ShoppingBag className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </div>
              <div className="flex items-center space-x-4 sm:space-x-6 pt-2 sm:pt-4">

              </div>
            </div>

            <div
              className="relative order-1 lg:order-2"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <div className="relative group">
                <div className="aspect-square overflow-hidden rounded-3xl shadow-primary-lg">
                  <Image
                    src="/main-hero.jpg"
                    alt="Stylish girls accessories collection"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    priority
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div >
      </section >




      {/* Product Categories */}

      <section
        id="about"
        className="py-16 bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 relative overflow-hidden"
      >
        <div className="container mx-auto px-6">
          <div
            className="grid lg:grid-cols-12 gap-6 items-start"
          >

            {/* Left Content Area (Previously Right) */}
            <div className="lg:col-span-7 space-y-8 order-2 lg:order-1">
              {/* Header */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="h-[1px] w-12 bg-black"></span>
                  <span className="text-sm font-medium tracking-[0.2em] uppercase text-gray-500">Shop By Category</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-sans text-black leading-none" data-aos="fade-right">
                  Curated <br />
                  <span className="font-serif italic font-light ml-12 text-pink-600">Essentials</span>
                </h2>
                <p className="text-gray-600 text-base leading-relaxed font-light max-w-md pt-2">
                  Explore our diverse collection of accessories - each category curated with style and quality in mind.
                </p>
              </div>

              {/* Uniform Grid */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { title: "Jewelry", desc: "Necklaces & Rings", img: "/f3.jpg", link: "/collection?category=Jewelry" },
                  { title: "Bags", desc: "Handbags", img: "/f1.jpg", link: "/collection?category=Bags" },
                  { title: "Hair", desc: "Accessories", img: "/f2.jpg", link: "/collection?category=Hair Accessories" },
                ].map((item, i) => (
                  <Link key={i} href={item.link} className="relative group cursor-pointer overflow-hidden aspect-[3/4]" data-aos="fade-up" data-aos-delay={i * 100}>
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-serif italic">{item.title}</h3>
                      <p className="text-[10px] uppercase tracking-widest opacity-90">{item.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="pt-2">
                <Link href="/collection">
                  <Button className="bg-transparent border border-black text-black hover:bg-black hover:text-white rounded-none px-10 py-5 h-auto text-xs tracking-widest uppercase transition-all duration-300">
                    View All Collections
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Main Image (Previously Left) */}
            <div className="hidden lg:block lg:col-span-5 relative h-[550px] sticky top-24 order-1 lg:order-2">
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src="/main1.webp"
                  alt="New Season Collection"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-black/5"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Products Grid */}
      <section id="featured" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-pink-600 text-xs uppercase tracking-widest font-medium">Top Picks</span>
            <h2 className="text-3xl md:text-4xl font-serif italic font-light text-black mt-3 mb-4" data-aos="fade-up">Featured Collection</h2>
            <div className="w-12 h-0.5 bg-pink-100 mx-auto"></div>
          </div>

          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          >
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="group flex flex-col"
                data-aos="fade-up"
                data-aos-delay={product.id * 50}
              >
                <div className="relative aspect-square overflow-hidden bg-gray-50 rounded-lg mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Overlay with Quick Add (Optional style) */}
                  <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <Button
                      onClick={() => addToCart({
                        id: product.id,
                        name: product.name,
                        price: parseFloat(product.price.replace('E.G ', '')),
                        quantity: 1,
                        image: product.image
                      })}
                      className="w-full bg-white/90 text-black hover:bg-black hover:text-white backdrop-blur-sm shadow-lg text-xs uppercase tracking-widest"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>

                <div className="text-center px-2">
                  <h3 className="text-sm font-medium text-gray-800 mb-2 line-clamp-1 group-hover:text-pink-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-base font-serif italic text-pink-600">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/collection">
              <Button className="bg-transparent border border-black text-black hover:bg-black hover:text-white rounded-none px-12 py-4 h-auto text-xs tracking-widest uppercase transition-all duration-300">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>



      {/* Contact Us Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-white via-white to-gray-300">
        <div className="container mx-auto px-6">
          <div
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center space-x-4 mb-4">
              <span className="h-[1px] w-12 bg-pink-500"></span>
              <span className="text-pink-600 text-xs uppercase tracking-widest font-medium">Get In Touch</span>
              <span className="h-[1px] w-12 bg-pink-500"></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-sans text-black leading-tight mb-4" data-aos="fade-up">
              Contact <span className="font-serif italic font-light text-gray-500">Us</span>
            </h2>
            <p className="text-gray-600 text-lg font-light max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* WhatsApp Contact */}
                <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300" data-aos="fade-right">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-serif italic text-black">WhatsApp</h3>
                      <p className="text-sm text-gray-500">Chat with us directly</p>
                    </div>
                  </div>
                  <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-green-500 hover:bg-green-600 text-white text-center py-3 rounded-sm transition-colors duration-300 font-medium"
                  >
                    Start Chat
                  </a>
                </div>

                {/* Email Contact */}
                <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300" data-aos="fade-left">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-serif italic text-black">Email</h3>
                      <p className="text-sm text-gray-500">Send us an email</p>
                    </div>
                  </div>
                  <a
                    href="mailto:contact@salsel.com"
                    className="block w-full bg-pink-500 hover:bg-pink-600 text-white text-center py-3 rounded-sm transition-colors duration-300 font-medium"
                  >
                    Send Email
                  </a>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="text-center">
                <p className="text-gray-600 mb-6 font-light">Follow us on social media</p>
                <div className="flex justify-center space-x-6">
                  {/* Instagram */}
                  <a
                    href="https://instagram.com/salsel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-pink-500 hover:text-white transition-all duration-300 shadow-sm group"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>

                  {/* Facebook */}
                  <a
                    href="https://facebook.com/salsel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-pink-500 hover:text-white transition-all duration-300 shadow-sm group"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>

                  {/* Twitter/X */}
                  <a
                    href="https://twitter.com/salsel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-pink-500 hover:text-white transition-all duration-300 shadow-sm group"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>

                  {/* TikTok */}
                  <a
                    href="https://tiktok.com/@salsel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-pink-500 hover:text-white transition-all duration-300 shadow-sm group"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Footer */}
      < footer className="bg-black text-white" >
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* About Section */}
            <div>
              <h3 className="text-2xl font-serif italic mb-4 text-pink-400">Slsel</h3>
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
    </div >
  )
}
