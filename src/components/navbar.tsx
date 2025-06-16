import React, { useState } from 'react';
import { Search, ShoppingCart, User, Heart, Menu, Bell } from 'lucide-react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const EcommerceTopbar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems] = useState<CartItem[]>([
    { id: 1, name: 'iPhone 15 Pro', price: 42900, quantity: 1 },
    { id: 2, name: 'AirPods Pro', price: 8900, quantity: 1 }
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <header className="bg-white shadow-md border-b border-blue-100">
      {/* Top announcement bar */}
      <header className="flex bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm py-2">
        <span className="max-w-7xl mx-auto px-4 justify-center">
          🎉 ลดราคาพิเศษ 25% สำหรับสมาชิกใหม่ | จัดส่งฟรีเมื่อซื้อครบ 1,000 บาท
        </span>
      </header>

      {/* Main header */}
      <nav className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Menu size={24} />
            </button>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">K</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-2xl font-bold text-gray-800">Kota-Tools</h1>
                <p className="text-xs text-gray-500">ร้านขายเครื่องมือและวัสดุอุปกรณ์ก่อสร้าง</p>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-4 lg:mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="ค้นหาสินค้า, แบรนด์, หรือหมวดหมู่..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 pr-4 border border-blue-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-blue-50/50 text-gray-700 placeholder-gray-500"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-400" size={20} />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-medium transition-colors">
                ค้นหา
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <button className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors hidden sm:block">
              <Bell size={24} />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </button>

            {/* Wishlist */}
            <button className="relative p-2 text-gray-600 hover:text-red-500 transition-colors hidden sm:block">
              <Heart size={24} />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                5
              </span>
            </button>

            {/* Shopping Cart */}
            <div className="relative">
              <button
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <ShoppingCart size={24} />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-blue-500 text-white text-xs rounded-full flex items-center justify-center font-medium">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Cart Dropdown */}
              {isCartOpen && (
                <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-lg shadow-xl border border-blue-100 z-50">
                  <div className="p-4 border-b border-blue-100">
                    <h3 className="font-semibold text-gray-800">ตรวจสอบรถเข็น ({totalItems} สินค้า)</h3>
                  </div>
                  <div className="max-h-64 overflow-y-auto">
                    {cartItems.map((item) => (
                      <div key={item.id} className="p-4 border-b border-gray-100 flex justify-between items-center">
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-800 text-sm">{item.name}</h4>
                          <p className="text-blue-600 font-semibold">฿{item.price.toLocaleString()}</p>
                        </div>
                        <div className="text-gray-600 text-sm">x{item.quantity}</div>
                      </div>
                    ))}
                  </div>
                  <div className="p-4 border-t border-blue-100">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-semibold text-gray-800">รวมทั้งหมด:</span>
                      <span className="font-bold text-blue-600 text-lg">฿{totalPrice.toLocaleString()}</span>
                    </div>
                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-medium transition-colors">
                      ดำเนินการชำระเงิน
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* User Menu */}
            <div className="relative">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center space-x-2 p-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <User size={24} />
                <span className="hidden lg:block text-sm font-medium">บัญชีของฉัน</span>
              </button>

              {/* User Dropdown */}
              {isUserMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-xl border border-blue-100 z-50">
                  <div className="p-2">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-md transition-colors">
                      โปรไฟล์ของฉัน
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-md transition-colors">
                      คำสั่งซื้อ
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-md transition-colors">
                      รายการโปรด
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-md transition-colors">
                      ตั้งค่า
                    </a>
                    <hr className="my-2 border-blue-100" />
                    <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md transition-colors">
                      ออกจากระบบ
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-blue-100">
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center space-x-2 p-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                <Bell size={20} />
                <span>แจ้งเตือน</span>
              </button>
              <button className="flex items-center space-x-2 p-3 text-gray-600 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                <Heart size={20} />
                <span>รายการโปรด</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Categories Bar */}
      <div className='flex justify-center w-full bg-blue-50 border-t border-blue-100 '>
        <ul className='flex justify-center max-w-7xl gap-12 py-2'>
          <li className="group relative">
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 transition-all duration-700"
            >
              หมวดหมู่ทั้งหมด
            </a>
            <span className="absolute left-0 bottom-[-2px] w-full h-0.5 bg-gradient-to-r from-blue-400 to-blue-700
            transform scale-x-0 group-hover:scale-x-70 transition-transform duration-500"></span>
          </li>

          <li className='group relative'>
            <a 
              href='#'
              className="text-gray-600 hover:text-gray-800 transition-all duration-700"
            >
              อุปกรณ์ก่อสร้าง
            </a>
            <span className="absolute left-0 bottom-[-2px] w-full h-0.5 bg-gradient-to-r from-blue-400 to-blue-700 
            transform scale-x-0 group-hover:scale-x-70 transition-transform duration-500"></span>
          </li>

          <li className='group relative'>
            <a 
              href='#'
              className="text-gray-600 hover:text-gray-800 transition-all duration-700"
            >
              เครื่องสุขา
            </a>
            <span className="absolute left-0 bottom-[-2px] w-full h-0.5 bg-gradient-to-r from-blue-400 to-blue-700 
            transform scale-x-0 group-hover:scale-x-70 transition-transform duration-500"></span>
          </li>

          <li className='group relative'>
            <a 
              href='#'
              className="text-gray-600 hover:text-gray-800 transition-all duration-700"
            >
              อุปกรณ์ประปา
            </a>
            <span className="absolute left-0 bottom-[-2px] w-full h-0.5 bg-gradient-to-r from-blue-400 to-blue-700 
            transform scale-x-0 group-hover:scale-x-70 transition-transform duration-500"></span>
          </li>

          <li className='group relative'>
            <a 
              href='#'
              className="text-gray-600 hover:text-gray-800 transition-all duration-700"
            >
              อะไหล่ไฟฟ้า
            </a>
            <span className="absolute left-0 bottom-[-2px] w-full h-0.5 bg-gradient-to-r from-blue-400 to-blue-700 
            transform scale-x-0 group-hover:scale-x-70 transition-transform duration-500"></span>
          </li>

          <li className='group relative'>
            <a 
              href='#'
              className="text-gray-600 hover:text-gray-800 transition-all duration-700"
            >
              เครื่องสวมใส่
            </a>
            <span className="absolute left-0 bottom-[-2px] w-full h-0.5 bg-gradient-to-r from-blue-400 to-blue-700 
            transform scale-x-0 group-hover:scale-x-70 transition-transform duration-500"></span>
          </li>

          <li className='group relative'>
            <a 
              href='#'
              className="text-gray-600 hover:text-gray-800 transition-all duration-700"
            >
              อุปกรณ์อื่นๆ
            </a>
            <span className="absolute left-0 bottom-[-2px] w-full h-0.5 bg-gradient-to-r from-blue-400 to-blue-700 
            transform scale-x-0 group-hover:scale-x-70 transition-transform duration-500"></span>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default EcommerceTopbar;