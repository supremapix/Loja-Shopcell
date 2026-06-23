import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Trash2, Plus, Minus, ShoppingBag, Send, AlertTriangle, Store, Truck, Wallet, CreditCard, Sparkles } from 'lucide-react';
import { CartItem } from '../types';
import { CONTACT_INFO, CURITIBA_NEIGHBORHOODS, RMC_CITIES } from '../data';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: number, q: number) => void;
  onRemoveItem: (productId: number) => void;
  onClearCart: () => void;
}

export default function Cart({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}: CartProps) {
  const [checkoutStep, setCheckoutStep] = useState<number>(1); // 1 = Review, 2 = Form
  const [clientName, setClientName] = useState('');
  const [deliveryType, setDeliveryType] = useState<'retirada' | 'entrega'>('retirada');
  const [address, setAddress] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [city, setCity] = useState('Curitiba');
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'cartao'>('pix');
  const [formError, setFormError] = useState<string | null>(null);

  // Compute Totals
  const totalAtVista = cartItems.reduce((acc, item) => acc + (item.product.priceAt * item.quantity), 0);

  const handleFinishOrder = () => {
    if (!clientName.trim()) {
      setFormError('Por favor, digite seu nome para o pedido.');
      return;
    }

    if (deliveryType === 'entrega' && (!address.trim() || !neighborhood.trim())) {
      setFormError('Por favor, preencha o endereço de entrega e o bairro.');
      return;
    }

    setFormError(null);

    // Build WhatsApp Message
    let message = `🛒 *NOVO PEDIDO - XIAOMI SHOP CELL CURITIBA*\n`;
    message += `===================================\n\n`;
    message += `👤 *Cliente:* ${clientName}\n`;
    message += `🚚 *Método:* ${deliveryType === 'retirada' ? 'Retirada na Loja Física (Centro)' : 'Entrega Expressa via Motoboy'}\n`;
    
    if (deliveryType === 'entrega') {
      message += `🏠 *Endereço:* ${address}\n`;
      message += `📍 *Bairro:* ${neighborhood} | *Cidade:* ${city}\n`;
    }

    message += `💳 *Pagamento:* ${paymentMethod === 'pix' ? 'Dinheiro / PIX (À Vista com Desconto)' : 'Cartão de Crédito (Parcelado em até 12x)'}\n\n`;
    
    message += `📦 *ITENS DO PEDIDO:*\n`;
    cartItems.forEach((item) => {
      message += `- *${item.quantity}x* ${item.product.name}\n`;
      message += `   Preço: R$ ${item.product.priceAt.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} cada\n`;
      message += `   Opção Cartão: ${item.product.parcelas}\n\n`;
    });

    message += `-----------------------------------\n`;
    message += `💵 *TOTAL ESTIMADO À VISTA:* R$ ${totalAtVista.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}\n`;
    if (paymentMethod === 'cartao') {
      message += `💳 *CONDIÇÃO CARTÃO:* Consultar taxas de parcelamento final no WhatsApp.\n`;
    }
    message += `===================================\n\n`;
    message += `_Pedido gerado de forma automática via site oficial Xiaomi Shop Cell Curitiba_`;

    const encodedText = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=554137989918&text=${encodedText}`;

    window.open(whatsappUrl, '_blank', 'noreferrer');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-50 pointer-events-auto"
          />

          {/* Cart Sidebar Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full sm:max-w-md bg-white border-l border-slate-200 z-50 flex flex-col shadow-2xl h-full"
            id="cart-sidebar"
          >
            {/* Header */}
            <div className="p-5 border-b border-slate-200 flex justify-between items-center bg-slate-50/75">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[#FF6600]" />
                <h2 className="font-display font-bold text-gray-900 text-lg">Meu Carrinho</h2>
                <span className="bg-[#FF6600]/10 text-[#FF6600] px-2 py-0.5 rounded text-xs font-mono font-bold">
                  {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-gray-400 hover:text-gray-800 hover:bg-slate-100 transition-colors cursor-pointer"
                id="close-cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-grow overflow-y-auto p-5 custom-scrollbar">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-12">
                  <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
                    <ShoppingBag className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="font-display font-semibold text-gray-900 mb-1">Seu carrinho está vazio</h3>
                  <p className="text-gray-600 text-xs max-w-xs mb-6">
                    Navegue pelos nossos smartphones de última geração e adicione aparelhos para fazer um orçamento.
                  </p>
                  <button
                    onClick={onClose}
                    className="bg-[#FF6600] hover:bg-[#D45500] text-white text-xs font-bold px-5 py-2.5 rounded-xl uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Explorar Catálogo
                  </button>
                </div>
              ) : checkoutStep === 1 ? (
                /* STEP 1: ITEM REVIEW */
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500 uppercase font-mono">Resumo dos Aparelhos</span>
                    <button
                      onClick={onClearCart}
                      className="text-xs text-gray-500 hover:text-red-500 flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Limpar Tudo</span>
                    </button>
                  </div>

                  <div className="space-y-3">
                    {cartItems.map((item) => (
                      <div
                        key={item.product.id}
                        className="flex gap-3 bg-white border border-slate-200 p-3 rounded-xl relative group shadow-xs"
                      >
                        <div className="w-16 h-16 bg-slate-50 rounded-lg p-2 flex items-center justify-center flex-shrink-0">
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            referrerPolicy="no-referrer"
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>

                        <div className="flex-grow min-w-0">
                          <h4 className="font-display font-bold text-gray-900 text-xs sm:text-sm line-clamp-1">
                            {item.product.name}
                          </h4>
                          <span className="text-[10px] text-gray-400 font-mono block mt-0.5 uppercase tracking-wide">
                            {item.product.brand}
                          </span>
                          <div className="flex items-center justify-between mt-2.5">
                            <span className="text-[#FF6600] font-mono text-xs font-bold">
                              {item.product.priceAt.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                            </span>

                            {/* Quantity Controls */}
                            <div className="flex items-center border border-slate-200 bg-slate-50 rounded-lg overflow-hidden">
                              <button
                                onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                                className="px-2 py-1 text-gray-500 hover:text-gray-900 hover:bg-slate-200 transition-colors cursor-pointer"
                                id={`dec-qty-${item.product.id}`}
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="px-2 text-xs font-mono font-semibold text-gray-800">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                                className="px-2 py-1 text-gray-500 hover:text-gray-900 hover:bg-slate-200 transition-colors cursor-pointer"
                                id={`inc-qty-${item.product.id}`}
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Remove item button */}
                        <button
                          onClick={() => onRemoveItem(item.product.id)}
                          className="absolute top-2 right-2 p-1 rounded-md text-gray-400 hover:text-red-500 hover:bg-slate-100 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                          title="Remover item"
                          id={`remove-${item.product.id}`}
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Trust warning */}
                  <div className="bg-[#FF6600]/5 border border-[#FF6600]/15 rounded-xl p-3 flex gap-2.5 mt-6">
                    <AlertTriangle className="w-4 h-4 text-[#FF6600] flex-shrink-0 mt-0.5" />
                    <p className="text-[11px] text-gray-600 leading-normal">
                      Os aparelhos de Curitiba são abertos e testados na sua frente na loja física ou lacrados na entrega. Todos contam com <strong>6 meses de garantia local</strong>.
                    </p>
                  </div>
                </div>
              ) : (
                /* STEP 2: CHECKOUT FORM */
                <div className="space-y-4">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-gray-500 uppercase font-mono">Dados do Seu Orçamento</span>
                    <button
                      onClick={() => setCheckoutStep(1)}
                      className="text-xs text-[#FF6600] hover:underline cursor-pointer"
                    >
                      ← Voltar para itens
                    </button>
                  </div>

                  {/* Form fields */}
                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs text-gray-600 mb-1 font-semibold">Seu Nome Completo *</label>
                      <input
                        type="text"
                        required
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        placeholder="Ex: Daniela Viviani"
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 focus:border-[#FF6600] focus:ring-1 focus:ring-[#FF6600]/10 focus:outline-none"
                        id="checkout-name-input"
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-gray-600 mb-1.5 font-semibold">Como deseja receber? *</label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => {
                            setDeliveryType('retirada');
                            setFormError(null);
                          }}
                          className={`py-2 px-3 rounded-xl border text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                            deliveryType === 'retirada'
                              ? 'bg-[#FF6600]/10 border-[#FF6600] text-[#FF6600]'
                              : 'bg-slate-50 border-slate-200 text-gray-600 hover:bg-slate-100'
                          }`}
                        >
                          <Store className="w-4 h-4" />
                          <span>Retirar na Loja (Centro)</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setDeliveryType('entrega');
                            setFormError(null);
                          }}
                          className={`py-2 px-3 rounded-xl border text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                            deliveryType === 'entrega'
                              ? 'bg-[#FF6600]/10 border-[#FF6600] text-[#FF6600]'
                              : 'bg-slate-50 border-slate-200 text-gray-600 hover:bg-slate-100'
                          }`}
                        >
                          <Truck className="w-4 h-4" />
                          <span>Receber via Motoboy</span>
                        </button>
                      </div>
                    </div>

                    {deliveryType === 'entrega' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="space-y-3 pt-1 border-t border-slate-200"
                      >
                        <div>
                          <label className="block text-xs text-gray-600 mb-1 font-semibold">Endereço Completo com Número *</label>
                          <input
                            type="text"
                            required
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder="Ex: Rua Conselheiro Laurindo, 809 - Ap 42"
                            className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 focus:border-[#FF6600] focus:ring-1 focus:ring-[#FF6600]/10 focus:outline-none"
                            id="checkout-address-input"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <label className="block text-xs text-gray-600 mb-1 font-semibold">Bairro *</label>
                            <input
                              type="text"
                              required
                              value={neighborhood}
                              onChange={(e) => setNeighborhood(e.target.value)}
                              placeholder="Ex: Rebouças"
                              className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 focus:border-[#FF6600] focus:ring-1 focus:ring-[#FF6600]/10 focus:outline-none"
                              id="checkout-bairro-input"
                              list="curitiba-bairros"
                            />
                            <datalist id="curitiba-bairros">
                              {CURITIBA_NEIGHBORHOODS.map((b) => (
                                <option key={b} value={b} />
                              ))}
                            </datalist>
                          </div>
                          <div>
                            <label className="block text-xs text-gray-600 mb-1 font-semibold">Cidade *</label>
                            <select
                              value={city}
                              onChange={(e) => setCity(e.target.value)}
                              className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 focus:border-[#FF6600] focus:outline-none"
                            >
                              {RMC_CITIES.map((c) => (
                                <option key={c} value={c}>
                                  {c}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    <div>
                      <label className="block text-xs text-gray-600 mb-1.5 font-semibold">Forma de Pagamento Preferida *</label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => {
                            setPaymentMethod('pix');
                            setFormError(null);
                          }}
                          className={`py-2 px-3 rounded-xl border text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                            paymentMethod === 'pix'
                              ? 'bg-[#FF6600]/10 border-[#FF6600] text-[#FF6600]'
                              : 'bg-slate-50 border-slate-200 text-gray-600 hover:bg-slate-100'
                          }`}
                        >
                          <Wallet className="w-4 h-4" />
                          <span>Pix / Dinheiro</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setPaymentMethod('cartao');
                            setFormError(null);
                          }}
                          className={`py-2 px-3 rounded-xl border text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                            paymentMethod === 'cartao'
                              ? 'bg-[#FF6600]/10 border-[#FF6600] text-[#FF6600]'
                              : 'bg-slate-50 border-slate-200 text-gray-600 hover:bg-slate-100'
                          }`}
                        >
                          <CreditCard className="w-4 h-4" />
                          <span>Cartão em até 12x</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer Pricing Summary Area */}
            {cartItems.length > 0 && (
              <div className="p-5 border-t border-slate-200 bg-slate-50 space-y-4">
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <span>Quantidade de Aparelhos</span>
                    <span className="font-mono font-medium text-gray-800">
                      {cartItems.reduce((acc, item) => acc + item.quantity, 0)} un
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold text-gray-900">Subtotal Estimado</span>
                    <span className="text-xl font-display font-black text-[#FF6600]">
                      {totalAtVista.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 justify-end text-[10px] text-gray-400 font-mono uppercase tracking-wide">
                    {paymentMethod === 'pix' && <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />}
                    <span>{paymentMethod === 'pix' ? 'Preço com Desconto Especial À Vista' : 'Taxas de cartão calculadas ao orçar'}</span>
                  </div>
                </div>

                {formError && (
                  <div className="bg-red-50 text-red-600 border border-red-200 rounded-xl p-3 text-xs font-semibold flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 flex-shrink-0" />
                    <span>{formError}</span>
                  </div>
                )}

                {checkoutStep === 1 ? (
                  <button
                    onClick={() => setCheckoutStep(2)}
                    className="w-full bg-[#FF6600] hover:bg-[#D45500] text-white py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    id="cart-go-to-form"
                  >
                    <span>Informar Dados de Orçamento</span>
                  </button>
                ) : (
                  <button
                    onClick={handleFinishOrder}
                    className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    id="cart-submit-whatsapp"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar Orçamento no WhatsApp</span>
                  </button>
                )}
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
