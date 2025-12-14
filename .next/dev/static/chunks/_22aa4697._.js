(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/contexts/cart-context.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CartProvider",
    ()=>CartProvider,
    "useCart",
    ()=>useCart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const CartContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function CartProvider({ children }) {
    _s();
    const [cartItems, setCartItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Load cart from localStorage on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartProvider.useEffect": ()=>{
            const savedCart = localStorage.getItem('cart');
            if (savedCart) {
                try {
                    setCartItems(JSON.parse(savedCart));
                } catch (error) {
                    console.error('Error loading cart:', error);
                }
            }
            setIsLoaded(true);
        }
    }["CartProvider.useEffect"], []);
    // Save cart to localStorage whenever it changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartProvider.useEffect": ()=>{
            if (isLoaded) {
                localStorage.setItem('cart', JSON.stringify(cartItems));
            }
        }
    }["CartProvider.useEffect"], [
        cartItems,
        isLoaded
    ]);
    const addToCart = (item)=>{
        setCartItems((prev)=>{
            const existingItem = prev.find((i)=>i.id === item.id);
            if (existingItem) {
                return prev.map((i)=>i.id === item.id ? {
                        ...i,
                        quantity: i.quantity + item.quantity
                    } : i);
            }
            return [
                ...prev,
                item
            ];
        });
    };
    const removeFromCart = (id)=>{
        setCartItems((prev)=>prev.filter((item)=>item.id !== id));
    };
    const updateQuantity = (id, quantity)=>{
        if (quantity <= 0) {
            removeFromCart(id);
            return;
        }
        setCartItems((prev)=>prev.map((item)=>item.id === id ? {
                    ...item,
                    quantity
                } : item));
    };
    const clearCart = ()=>{
        setCartItems([]);
    };
    const cartCount = cartItems.reduce((sum, item)=>sum + item.quantity, 0);
    const cartTotal = cartItems.reduce((sum, item)=>sum + item.price * item.quantity, 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CartContext.Provider, {
        value: {
            cartItems,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            cartCount,
            cartTotal
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/contexts/cart-context.tsx",
        lineNumber: 83,
        columnNumber: 9
    }, this);
}
_s(CartProvider, "UmTwc289iIrCEM8NVqILbgc1hDE=");
_c = CartProvider;
function useCart() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}
_s1(useCart, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "CartProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/AOSInit.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AOSInit",
    ()=>AOSInit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$aos$2f$dist$2f$aos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/aos/dist/aos.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const AOSInit = ()=>{
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AOSInit.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$aos$2f$dist$2f$aos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].init({
                easing: 'ease-out-quad',
                duration: 1000
            });
        }
    }["AOSInit.useEffect"], []);
    return null;
};
_s(AOSInit, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = AOSInit;
var _c;
__turbopack_context__.k.register(_c, "AOSInit");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_22aa4697._.js.map