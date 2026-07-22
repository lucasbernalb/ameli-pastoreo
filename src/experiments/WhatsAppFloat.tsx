import { WHATSAPP_ORDER_URL } from '../config';
import whatsappIcon from '../assets/icons/whatsapp.svg';

export const WhatsAppFloat = () => {
  return (
    <a
      href={WHATSAPP_ORDER_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300"
      aria-label="Contactar por WhatsApp"
    >
      <img
        src={whatsappIcon}
        alt="WhatsApp"
        className="w-7 h-7"
        style={{ filter: 'brightness(0) invert(1)' }}
      />
    </a>
  );
};
