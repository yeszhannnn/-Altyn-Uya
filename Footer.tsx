import { MessageCircle, MapPin, Instagram } from 'lucide-react';

const Footer = () => {
  const whatsappLink = 'https://api.whatsapp.com/send/?phone=77052974040&text&type=phone_number&app_absent=0&utm_source=ig';
  const instagramLink = 'https://www.instagram.com/altynuya_oskemen?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==';
  const mapLink = 'https://go.2gis.com/8JO7Q';

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="Altyn Uya Logo" className="w-12 h-12 object-contain" />
              <h3 className="text-lg font-bold text-gray-900">Altyn Uya</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Образовательный центр для детей и школьников в Усть-Каменогорске
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-600 hover:text-primary-600 text-sm transition-colors">
                  Главная
                </a>
              </li>
              <li>
                <a href="/programs" className="text-gray-600 hover:text-primary-600 text-sm transition-colors">
                  Программы
                </a>
              </li>
              <li>
                <a href="/contacts" className="text-gray-600 hover:text-primary-600 text-sm transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 hover:text-primary-600 text-sm transition-colors"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 hover:text-primary-600 text-sm transition-colors"
                >
                  <MapPin size={16} />
                  2GIS
                </a>
              </li>
              <li>
                <a
                  href={instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 hover:text-primary-600 text-sm transition-colors"
                >
                  <Instagram size={16} />
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Местоположение</h4>
            <p className="text-gray-600 text-sm mb-4">
              Усть-Каменогорск, Казахстан
            </p>
            <a
              href={mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block btn-secondary text-sm"
            >
              Открыть на карте
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © 2024 Altyn Uya. Все права защищены.
            </p>
            <div className="flex gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 transition-colors"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 transition-colors"
              >
                <MapPin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
