
import React, { useState } from 'react';
import { CartProvider, useCart } from './context/CartContext';
import { ToastProvider } from './context/ToastContext';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import CartButton from './components/CartButton';
import CartView from './components/CartView';
import CheckoutView from './components/CheckoutView';
import PaymentView from './components/PaymentView';
import PaymentProcessingView from './components/PaymentProcessingView';
import OrderConfirmationView from './components/OrderConfirmationView';
import ToastContainer from './components/ToastContainer';
import OurStory from './components/OurStory';
import BestSellers from './components/BestSellers';
import ImageGallery from './components/ImageGallery';
import { ProductCategory, Product } from './types';
import { PRODUCTS } from './constants';

const AppContent: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | 'ALL'>('ALL');
  const [searchTerm, setSearchTerm] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [isOrderConfirmationOpen, setIsOrderConfirmationOpen] = useState(false);

  const { cartItems, subtotal } = useCart();

  const bestSellerIds = [21, 22, 23, 2]; // Chicken, Mutton, Prawn pickles, and Pootharekulu
  const bestSellers = PRODUCTS.filter(p => bestSellerIds.includes(p.id))
                              .sort((a, b) => bestSellerIds.indexOf(a.id) - bestSellerIds.indexOf(b.id));

  const filteredProducts = PRODUCTS
    .filter(p => activeCategory === 'ALL' || p.category === activeCategory)
    .filter(p => 
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      p.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const handleOpenCart = () => {
    setIsCheckoutOpen(false);
    setIsPaymentOpen(false);
    setIsCartOpen(true);
  };
  
  const handleCloseCart = () => setIsCartOpen(false);
  
  const handleOpenCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleCloseCheckout = () => setIsCheckoutOpen(false);

  // Logic for direct Payment flow
  const handlePlaceOrderClick = () => {
    setIsCheckoutOpen(false);
    setIsPaymentOpen(true);
  };

  const handleClosePayment = () => setIsPaymentOpen(false);

  const handleConfirmPayment = () => {
    setIsPaymentOpen(false);
    setIsProcessingPayment(true);
  };

  const handlePaymentSuccess = () => {
    setIsProcessingPayment(false);
    setIsOrderConfirmationOpen(true);
  };

  const handleCloseOrderConfirmation = () => {
    setIsOrderConfirmationOpen(false);
  };
  
  return (
    <div className="bg-stone-50 min-h-screen font-sans text-gray-800">
      <Header 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <main className="pt-40 md:pt-24">
        <Hero />
        <div id="story">
          <OurStory />
        </div>
        <ImageGallery />
        <div id="bestsellers">
          <BestSellers products={bestSellers} />
        </div>
        <div id="products">
          <ProductGrid products={filteredProducts} />
        </div>
      </main>
      <Footer />
      <CartButton onOpenCart={handleOpenCart} />
      
      {isCartOpen && <CartView onClose={handleCloseCart} onCheckout={handleOpenCheckout} />}
      
      {isCheckoutOpen && (
        <CheckoutView 
          onClose={handleCloseCheckout} 
          onOrderRequestSent={handleCloseCheckout}
          onPlaceOrder={handlePlaceOrderClick}
        />
      )}

      {isPaymentOpen && (
        <PaymentView 
          orderDetails={{ items: cartItems, total: subtotal }}
          onClose={handleClosePayment}
          onConfirmPayment={handleConfirmPayment}
        />
      )}

      {isProcessingPayment && (
        <PaymentProcessingView onSuccess={handlePaymentSuccess} />
      )}

      {isOrderConfirmationOpen && (
        <OrderConfirmationView 
          orderDetails={{ items: cartItems, total: subtotal }}
          onClose={handleCloseOrderConfirmation}
        />
      )}

      <ToastContainer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ToastProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </ToastProvider>
  );
};

export default App;
