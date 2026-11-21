import React, { useState, useEffect, useRef } from 'react';
import { ShoppingBag, Search, Plus, Check, Star, Filter } from 'lucide-react';

export default function ProjectPreviewDailyMart() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cartCount, setCartCount] = useState(3);
  const [addedItem, setAddedItem] = useState(null);
  const timerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const categories = ['All', 'Fruits', 'Vegetables', 'Dairy', 'Bakery'];

  const products = [
    {
      id: 1,
      name: 'Organic Honeycrisp Apples',
      category: 'Fruits',
      price: '₹140',
      unit: '1 kg',
      tag: 'Fresh',
      tagColor: 'bg-emerald-100 text-emerald-800',
      rating: '4.9',
    },
    {
      id: 2,
      name: 'Hass Avocados (Pack of 2)',
      category: 'Vegetables',
      price: '₹180',
      unit: '2 pcs',
      tag: 'Best Seller',
      tagColor: 'bg-amber-100 text-amber-800',
      rating: '4.8',
    },
    {
      id: 3,
      name: 'Farm Fresh Greek Yogurt',
      category: 'Dairy',
      price: '₹95',
      unit: '400g',
      tag: 'Organic',
      tagColor: 'bg-lime-100 text-lime-900',
      rating: '5.0',
    },
  ];

  const handleAddToCart = (id) => {
    setCartCount((prev) => prev + 1);
    setAddedItem(id);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setAddedItem(null), 1200);
  };

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="w-full bg-[#FAFAFA] border border-[#E5E5DF] rounded-xl overflow-hidden shadow-xs text-xs font-sans select-none">
      {/* Browser Bar */}
      <div className="bg-[#F0F0EB] px-4 py-2.5 border-b border-[#E5E5DF] flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
          <span className="ml-2 font-mono text-[11px] text-[#71717A]">
            dailymart-app.web / store
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-50 text-emerald-700 border border-emerald-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            live preview
          </span>
        </div>
      </div>

      {/* App Header */}
      <div className="p-4 bg-white border-b border-[#EAEAE5] flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold text-xs">
            DM
          </div>
          <div>
            <div className="font-bold text-[#121316] text-sm leading-none tracking-tight">
              DailyMart
            </div>
            <span className="text-[10px] text-[#787880]">Fresh essentials, fast</span>
          </div>
        </div>

        {/* Search Mockup */}
        <div className="hidden sm:flex items-center gap-2 bg-[#F5F5F2] px-2.5 py-1.5 rounded-lg border border-[#E5E5DF] text-[#71717A] text-[11px] w-48">
          <Search className="w-3.5 h-3.5" />
          <span>Search vegetables, dairy...</span>
        </div>

        {/* Cart Counter */}
        <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-900 border border-emerald-200 px-2.5 py-1 rounded-lg font-medium text-[11px]">
          <ShoppingBag className="w-3.5 h-3.5 text-emerald-700" />
          <span>{cartCount} items</span>
        </div>
      </div>

      {/* Categories Bar */}
      <div className="px-4 py-2 bg-[#F9F9F7] border-b border-[#EAEAE5] flex items-center gap-1.5 overflow-x-auto no-scrollbar">
        <Filter className="w-3 h-3 text-[#8A8B92] mr-1 shrink-0" />
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-2.5 py-1 rounded-full text-[11px] font-medium transition-all ${
              selectedCategory === cat
                ? 'bg-[#121316] text-white shadow-xs'
                : 'bg-white text-[#52525B] border border-[#E5E5DF] hover:border-[#121316]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid Mockup */}
      <div className="p-4 bg-white grid grid-cols-1 sm:grid-cols-3 gap-3">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="p-3 rounded-lg border border-[#E5E5DF] bg-[#FCFCFB] hover:border-emerald-600/40 hover:bg-white transition-all group"
          >
            <div className="flex items-start justify-between mb-2">
              <span
                className={`text-[9px] px-1.5 py-0.5 rounded font-medium ${product.tagColor}`}
              >
                {product.tag}
              </span>
              <span className="flex items-center gap-0.5 text-[10px] text-amber-700 font-mono">
                <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                {product.rating}
              </span>
            </div>

            <div className="font-semibold text-[#18181B] text-[12px] line-clamp-1 mb-0.5">
              {product.name}
            </div>
            <div className="text-[10px] text-[#71717A] mb-2">{product.unit}</div>

            <div className="flex items-center justify-between pt-2 border-t border-[#EDEDE8]">
              <span className="font-bold text-[#18181B] font-mono text-xs">
                {product.price}
              </span>
              <button
                onClick={() => handleAddToCart(product.id)}
                className={`p-1.5 rounded-md transition-all ${
                  addedItem === product.id
                    ? 'bg-emerald-600 text-white'
                    : 'bg-[#EDEDE8] text-[#121316] hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-300'
                }`}
                aria-label={`Add ${product.name} to cart`}
              >
                {addedItem === product.id ? (
                  <Check className="w-3.5 h-3.5" />
                ) : (
                  <Plus className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Info */}
      <div className="px-4 py-2 bg-[#F6F6F2] border-t border-[#E5E5DF] flex items-center justify-between text-[11px] text-[#71717A]">
        <span>⚡ Responsive React state &amp; category discovery</span>
        <span className="font-mono text-[10px] text-emerald-700 font-medium">Netlify Deployed</span>
      </div>
    </div>
  );
}
