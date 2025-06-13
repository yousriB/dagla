
import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { tunisianGovernorates } from '../data/governorates';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { toast } from 'sonner';

interface OrderForm {
  fullName: string;
  phone: string;
  governorate: string;
  city: string;
  address: string;
}

const Order = () => {
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();
  const [formData, setFormData] = useState<OrderForm>({
    fullName: '',
    phone: '',
    governorate: '',
    city: '',
    address: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (cartItems.length === 0) {
      toast.error('السلة فارغة، يرجى إضافة منتجات أولاً');
      return;
    }

    if (!formData.fullName || !formData.phone || !formData.governorate || !formData.address) {
      toast.error('يرجى ملء جميع الحقول المطلوبة');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate order submission
    setTimeout(() => {
      setOrderSubmitted(true);
      clearCart();
      setIsSubmitting(false);
      toast.success('تم تأكيد طلبكم بنجاح!');
    }, 2000);
  };

  if (orderSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center" dir="rtl">
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8 text-center">
          <div className="text-6xl mb-6">✅</div>
          <h1 className="text-2xl font-bold text-green-600 mb-4">
            تم تأكيد طلبكم بنجاح!
          </h1>
          <p className="text-gray-600 mb-6 leading-relaxed">
            شكراً لكم على ثقتكم بنا. سنتواصل معكم قريباً لتأكيد تفاصيل التوصيل.
          </p>
          <div className="space-y-3">
            <p className="text-sm text-gray-500">
              <strong>رقم الطلب:</strong> #{Date.now()}
            </p>
            <p className="text-sm text-gray-500">
              سيتم التواصل معكم خلال 24 ساعة
            </p>
          </div>
          <Button asChild className="mt-6 bg-amber-600 hover:bg-amber-700">
            <a href="/">العودة إلى الرئيسية</a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8" dir="rtl">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            إتمام الطلب
          </h1>
          <p className="text-gray-600">
            راجع طلبك واملأ بياناتك لإتمام الطلب
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Cart Items */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <ShoppingBag className="h-5 w-5 ml-2" />
              طلبك ({cartItems.length} منتج)
            </h2>

            {cartItems.length === 0 ? (
              <div className="text-center py-8">
                <div className="text-4xl mb-4">🛒</div>
                <p className="text-gray-600 mb-4">السلة فارغة</p>
                <Button asChild className="bg-amber-600 hover:bg-amber-700">
                  <a href="/products">تصفح المنتجات</a>
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.product.id} className="flex items-center space-x-4 space-x-reverse p-4 border rounded-lg">
                    <img
                      src={item.product.image}
                      alt={item.product.nameAr}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">{item.product.nameAr}</h3>
                      <p className="text-amber-600 font-semibold">
                        {item.product.price} د.ت/{item.product.unitAr}
                      </p>
                    </div>

                    <div className="flex items-center space-x-2 space-x-reverse">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="p-1 rounded border hover:bg-gray-50"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="px-3 py-1 bg-gray-100 rounded text-center min-w-[40px]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="p-1 rounded border hover:bg-gray-50"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))}

                <div className="border-t pt-4 mt-6">
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span>المجموع الكلي:</span>
                    <span className="text-amber-700">{getTotalPrice().toFixed(2)} د.ت</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    التوصيل مجاني + الدفع عند التسليم
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Order Form */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              بيانات التوصيل
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  الاسم الكامل *
                </label>
                <Input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="أدخل اسمك الكامل"
                  className="text-right"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  رقم الهاتف *
                </label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="مثال: 20123456"
                  className="text-right"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  الولاية *
                </label>
                <select
                  name="governorate"
                  value={formData.governorate}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-right"
                  required
                >
                  <option value="">اختر الولاية</option>
                  {tunisianGovernorates.map((gov) => (
                    <option key={gov.value} value={gov.value}>
                      {gov.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  المدينة
                </label>
                <Input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="أدخل اسم المدينة"
                  className="text-right"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  العنوان الكامل *
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="أدخل عنوانك الكامل مع تفاصيل إضافية للتوصيل"
                  rows={3}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-right resize-none"
                  required
                />
              </div>

              <div className="bg-amber-50 p-4 rounded-lg">
                <h3 className="font-semibold text-amber-800 mb-2">شروط الطلب:</h3>
                <ul className="text-sm text-amber-700 space-y-1">
                  <li>• الدفع عند التسليم فقط</li>
                  <li>• التوصيل خلال 24-48 ساعة</li>
                  <li>• التوصيل مجاني لجميع أنحاء تونس</li>
                  <li>• يمكنكم إرجاع المنتج في حالة عدم الرضا</li>
                </ul>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting || cartItems.length === 0}
                className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 text-lg rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'جاري الإرسال...' : 'تأكيد الطلب'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
