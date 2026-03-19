import { MessageCircle, MapPin, Instagram, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const Contacts = () => {
  const whatsappLink = 'https://api.whatsapp.com/send/?phone=77052974040&text&type=phone_number&app_absent=0&utm_source=ig';
  const mapLink = 'https://go.2gis.com/8JO7Q';
  const instagramLink = 'https://www.instagram.com/altynuya_oskemen?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==';

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // Hero Section
  const HeroSection = () => (
    <section className="hero-gradient pt-12 pb-12 md:pt-24 md:pb-20 lg:pt-32 lg:pb-24">
      <div className="container-max">
        <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            Контакты и часто задаваемые вопросы
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 px-2">
            Всё, что вам нужно знать об Altyn Uya
          </p>
        </div>
      </div>
    </section>
  );

  // Contacts Section
  const ContactsSection = () => (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 mb-12">
          {/* Contact Card 1 */}
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl sm:rounded-2xl p-4 sm:p-8 text-center stagger-item">
            <MessageCircle className="w-10 sm:w-12 h-10 sm:h-12 text-primary-600 mx-auto mb-3 sm:mb-4" />
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 sm:mb-4">WhatsApp</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
              Самый быстрый способ связи. Ответим на все вопросы и поможем с записью.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              Написать в WhatsApp
            </a>
          </div>

          {/* Contact Card 2 */}
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl sm:rounded-2xl p-4 sm:p-8 text-center stagger-item">
            <MapPin className="w-10 sm:w-12 h-10 sm:h-12 text-primary-600 mx-auto mb-3 sm:mb-4" />
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Местоположение</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
              Усть-Каменогорск, Казахстан. Несколько филиалов по городу.
            </p>
            <a
              href={mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              Открыть на 2GIS
            </a>
          </div>

          {/* Contact Card 3 */}
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl sm:rounded-2xl p-4 sm:p-8 text-center stagger-item">
            <Instagram className="w-10 sm:w-12 h-10 sm:h-12 text-primary-600 mx-auto mb-3 sm:mb-4" />
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Instagram</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
              Следите за новостями, результатами и жизнью нашего центра.
            </p>
            <a
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              Перейти в Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );

  // How to Register Section
  const HowToRegisterSection = () => (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Как записаться
          </h2>
          <p className="text-lg text-gray-600">
            Четыре простых шага
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              step: '1',
              title: 'Напишите в WhatsApp',
              desc: 'Откройте чат и напишите нам первое сообщение',
            },
            {
              step: '2',
              title: 'Расскажите о ребёнке',
              desc: 'Укажите возраст и интересующее направление',
            },
            {
              step: '3',
              title: 'Получите консультацию',
              desc: 'Мы подскажем подходящую программу и филиал',
            },
            {
              step: '4',
              title: 'Начните обучение',
              desc: 'Согласуйте время первого занятия',
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 shadow-soft text-center stagger-item">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                {item.step}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // FAQ Section
  const FaqSection = () => {
    const faqs = [
      {
        q: 'Что такое Altyn Uya?',
        a: 'Altyn Uya — это образовательный центр для детей и школьников в Усть-Каменогорске, где сочетаются академический подход, тёплая атмосфера и удобный формат для родителей.',
      },
      {
        q: 'Для каких возрастов и классов подходят занятия?',
        a: 'У нас есть направления для подготовки к школе, 0 класса, продлёнки и школьников разных возрастов — от младших классов до 11 класса.',
      },
      {
        q: 'Какие направления у вас есть?',
        a: 'Подготовка к школе, 0 класс, продлёнка, английский язык, математика, программы для школьников и подготовка к НИШ/БИЛ/КТЛ.',
      },
      {
        q: 'Есть ли продлёнка?',
        a: 'Да, продлёнка — одно из ключевых направлений центра. Это комплексная поддержка ребёнка после школы с помощью в домашних заданиях.',
      },
      {
        q: 'Есть ли подготовка к школе?',
        a: 'Да, у нас есть программы подготовки к школе и 0 класс для детей 4–7 лет.',
      },
      {
        q: 'Преподаёте ли английский язык?',
        a: 'Да, английский — одно из основных направлений Altyn Uya. Занятия проводятся для детей всех возрастов.',
      },
      {
        q: 'Есть ли занятия по математике?',
        a: 'Да, есть занятия по математике для школьников 1–11 классов с разными уровнями подготовки.',
      },
      {
        q: 'Готовите ли к НИШ/БИЛ/КТЛ?',
        a: 'Да, в центре есть специальные направления для подготовки к поступлению в НИШ, БИЛ и КТЛ.',
      },
      {
        q: 'Можно ли сначала пройти диагностику?',
        a: 'Да, диагностика — это первый шаг. Вы можете записаться на бесплатную диагностику через WhatsApp.',
      },
      {
        q: 'Как записаться?',
        a: 'Самый быстрый способ — написать нам в WhatsApp. Мы подскажем подходящее направление и ближайший филиал.',
      },
      {
        q: 'Где посмотреть филиал?',
        a: 'Вы можете открыть нашу локацию в 2GIS прямо с сайта и выбрать удобный филиал.',
      },
      {
        q: 'Как быстро вы отвечаете?',
        a: 'Напишите в WhatsApp — это основной и самый удобный способ связи. Обычно отвечаем в течение нескольких минут.',
      },
      {
        q: 'Помогаете ли вы с учебной нагрузкой после школы?',
        a: 'Да, многие родители выбирают нас именно как поддержку ребёнка после школьных занятий. Продлёнка включает помощь с домашними заданиями.',
      },
      {
        q: 'Можно ли подобрать программу индивидуально?',
        a: 'Да, мы поможем сориентироваться по возрасту, уровню и цели ребёнка. Каждый случай рассматривается индивидуально.',
      },
      {
        q: 'У вас только один филиал?',
        a: 'Нет, Altyn Uya — это сеть центров, поэтому можно подобрать более удобную локацию в зависимости от вашего района.',
      },
    ];

    return (
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Часто задаваемые вопросы
            </h2>
            <p className="text-lg text-gray-600">
              Ответы на самые популярные вопросы родителей
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors text-left"
                >
                  <span className="font-semibold text-gray-900">{faq.q}</span>
                  <ChevronDown
                    size={20}
                    className={`text-primary-600 transition-transform duration-300 ${
                      expandedFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedFaq === idx && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8 text-center">
            <p className="text-gray-700 mb-6">
              Не нашли ответ на свой вопрос?
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              Напишите нам в WhatsApp
            </a>
          </div>
        </div>
      </section>
    );
  };

  // Final CTA
  const FinalCtaSection = () => (
    <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700">
      <div className="container-max text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Готовы начать?
        </h2>
        <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
          Напишите нам в WhatsApp, и мы поможем вам выбрать идеальную программу для вашего ребёнка.
        </p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 bg-white text-primary-600 rounded-lg font-bold hover:bg-gray-50 transition-colors text-lg"
        >
          Написать в WhatsApp
        </a>
      </div>
    </section>
  );

  return (
    <div className="page-enter">
      <HeroSection />
      <ContactsSection />
      <HowToRegisterSection />
      <FaqSection />
      <FinalCtaSection />
    </div>
  );
};

export default Contacts;
