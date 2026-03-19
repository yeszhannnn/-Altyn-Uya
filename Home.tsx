import { ArrowRight, CheckCircle, Users, Sparkles, BookOpen, Award, MessageCircle, MapPin } from 'lucide-react';
import { useState } from 'react';

const Home = () => {
  const whatsappLink = 'https://api.whatsapp.com/send/?phone=77052974040&text&type=phone_number&app_absent=0&utm_source=ig';
  const mapLink = 'https://go.2gis.com/8JO7Q';

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // Hero Section
  const HeroSection = () => (
    <section className="hero-gradient pt-12 pb-16 md:pt-24 md:pb-28 lg:pt-32 lg:pb-32">
      <div className="container-max">
        <div className="max-w-4xl">
          <div className="animate-fade-in-up">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Пространство, где ребёнок учится с интересом, а родители спокойны за результат
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Подготовка к школе, продлёнка, английский, математика и программы для школьников в Altyn Uya — с сильными преподавателями, заботливой атмосферой и удобной записью через WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center flex items-center justify-center gap-2"
              >
                Записаться в WhatsApp
                <ArrowRight size={20} />
              </a>
              <a
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-center"
              >
                Посмотреть филиал в 2GIS
              </a>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 mt-10 sm:mt-16">
          {[
            { icon: '🏆', text: 'Сеть образовательных центров' },
            { icon: '👨‍👩‍👧‍👦', text: 'Для детей 0–11 классов' },
            { icon: '✨', text: 'Бесплатная диагностика' },
            { icon: '⭐', text: 'Высокие оценки родителей' },
          ].map((badge, idx) => (
            <div key={idx} className="bg-white rounded-xl p-4 shadow-soft text-center stagger-item">
              <div className="text-3xl mb-2">{badge.icon}</div>
              <p className="text-sm font-medium text-gray-700">{badge.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Programs Section
  const ProgramsSection = () => (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Наши направления
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 px-2">
            Полный спектр образовательных программ для развития вашего ребёнка
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {[
            { title: 'Подготовка к школе', icon: '📚', desc: 'Мягкий старт перед школой' },
            { title: '0 класс', icon: '🎒', desc: 'Адаптация к учебному ритму' },
            { title: 'Продлёнка', icon: '🏫', desc: 'Помощь с домашними заданиями' },
            { title: 'Английский язык', icon: '🌍', desc: 'Понимание и практика речи' },
            { title: 'Математика', icon: '🔢', desc: 'Системное объяснение предмета' },
            { title: 'Подготовка к НИШ/БИЛ/КТЛ', icon: '🚀', desc: 'Высокий академический уровень' },
          ].map((program, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 card-hover stagger-item">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{program.icon}</div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2">{program.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{program.desc}</p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 font-semibold hover:text-primary-700 flex items-center gap-2"
              >
                Узнать подробнее
                <ArrowRight size={18} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Why Choose Us Section
  const WhyChooseSection = () => (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Почему выбирают Altyn Uya
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 px-2">
            Шесть ключевых преимуществ нашего образовательного центра
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: 'Сильные преподаватели',
              desc: 'Опытные педагоги, которые любят своё дело и умеют находить подход к каждому ребёнку',
              icon: '👨‍🏫',
            },
            {
              title: 'Понятный прогресс ребёнка',
              desc: 'Регулярная обратная связь родителям о развитии и успехах ребёнка',
              icon: '📈',
            },
            {
              title: 'Тёплая атмосфера',
              desc: 'Заботливое отношение к каждому ребёнку, безопасное и комфортное пространство',
              icon: '❤️',
            },
            {
              title: 'Помощь с обучением',
              desc: 'Поддержка с домашними заданиями и разбор сложных тем из школьной программы',
              icon: '🤝',
            },
            {
              title: 'Удобство для родителей',
              desc: 'Несколько филиалов, гибкий график, простая запись через WhatsApp',
              icon: '✨',
            },
            {
              title: 'Современный подход',
              desc: 'Интерактивные методы обучения, использование современных материалов и технологий',
              icon: '💡',
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 shadow-soft stagger-item">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // How It Works Section
  const HowItWorksSection = () => (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Как проходит обучение
          </h2>
          <p className="text-lg text-gray-600">
            Четыре простых шага к началу занятий
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              step: '1',
              title: 'Запись в WhatsApp',
              desc: 'Напишите нам в мессенджер — это быстро и удобно',
            },
            {
              step: '2',
              title: 'Диагностика',
              desc: 'Определим уровень ребёнка и его потребности',
            },
            {
              step: '3',
              title: 'Подбор программы',
              desc: 'Выберем подходящее направление и удобный филиал',
            },
            {
              step: '4',
              title: 'Обучение',
              desc: 'Начнём занятия с регулярной обратной связью',
            },
          ].map((item, idx) => (
            <div key={idx} className="relative">
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 text-center">
                <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
              {idx < 3 && (
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                  <ArrowRight className="text-primary-300" size={24} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Testimonials Section
  const TestimonialsSection = () => (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Отзывы родителей
          </h2>
          <p className="text-lg text-gray-600">
            Что говорят те, кто уже доверил нам своих детей
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: 'Елена М.',
              role: 'Мама Даши, 6 лет',
              text: 'Ребёнку очень нравится ходить на занятия! Видим заметный прогресс в развитии и уверенности. Преподаватели добрые и внимательные.',
              rating: 5,
            },
            {
              name: 'Ирина К.',
              role: 'Мама Артёма, 8 лет',
              text: 'Спасибо за помощь с математикой! Артём теперь решает задачи без страха. Занятия интересные и понятные.',
              rating: 5,
            },
            {
              name: 'Сергей Н.',
              role: 'Папа Софии, 10 лет',
              text: 'Продлёнка — спасение для работающих родителей. София делает уроки, занимается интересным, и мы спокойны за её развитие.',
              rating: 5,
            },
            {
              name: 'Анна В.',
              role: 'Мама Максима, 7 лет',
              text: 'Отличная подготовка к школе! Максим уверенно пошёл в первый класс. Спасибо за внимание к каждому ребёнку.',
              rating: 5,
            },
            {
              name: 'Мария Л.',
              role: 'Мама Вики, 9 лет',
              text: 'Английский язык перестал быть скучным предметом. Вика с удовольствием говорит по-английски и не боится ошибок.',
              rating: 5,
            },
            {
              name: 'Дмитрий П.',
              role: 'Папа Кирилла, 11 лет',
              text: 'Подготовка к НИШ прошла отлично. Кирилл сдал экзамены на высокий балл. Благодарны за профессионализм!',
              rating: 5,
            },
          ].map((testimonial, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 shadow-soft stagger-item">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Branches Section
  const BranchesSection = () => (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Удобство и доступность
          </h2>
          <p className="text-lg text-gray-600">
            Несколько филиалов по городу для вашего удобства
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Почему Altyn Uya удобна</h3>
            <ul className="space-y-4">
              {[
                'Несколько филиалов в разных районах города',
                'Можно подобрать удобную локацию и время',
                'Быстрая связь через WhatsApp',
                'Простая и понятная запись',
                'Гибкий график занятий',
                'Поддержка родителей на каждом этапе',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="text-primary-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Найдите ближайший филиал</h3>
            <p className="text-gray-600 mb-8">
              Откройте нашу локацию на карте и выберите самый удобный для вас филиал Altyn Uya в Усть-Каменогорске.
            </p>
            <a
              href={mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-center"
            >
              Открыть на 2GIS
            </a>
          </div>
        </div>
      </div>
    </section>
  );

  // Final CTA Section
  const FinalCtaSection = () => (
    <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700">
      <div className="container-max text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Подберём программу именно для вашего ребёнка
        </h2>
        <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
          Напишите в WhatsApp — подскажем направление, формат и ближайший удобный филиал.
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
      <ProgramsSection />
      <WhyChooseSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <BranchesSection />
      <FinalCtaSection />
    </div>
  );
};

export default Home;
