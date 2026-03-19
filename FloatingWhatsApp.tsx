import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  const whatsappLink = 'https://api.whatsapp.com/send/?phone=77052974040&text&type=phone_number&app_absent=0&utm_source=ig';

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-float"
      title="Написать в WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default FloatingWhatsApp;
