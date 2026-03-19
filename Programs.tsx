import { ArrowRight, CheckCircle } from 'lucide-react';

const Programs = () => {
  const whatsappLink = 'https://api.whatsapp.com/send/?phone=77052974040&text&type=phone_number&app_absent=0&utm_source=ig';

  // Hero Section
  const HeroSection = () => (
    <section className="hero-gradient pt-12 pb-12 md:pt-24 md:pb-20 lg:pt-32 lg:pb-24">
      <div className="container-max">
        <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            Программы обучения в Altyn Uya
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 px-2">
            От подготовки к школе до предметных направлений и поддержки школьников на разных этапах обучения
          </p>
        </div>
      </div>
    </section>
  );

  // Programs Grid
  const ProgramsGrid = () => {
    const programs = [
      {
        title: 'Подготовка к школе',
        icon: '📚',
        forWho: 'Дети 4–6 лет',
        description: 'Мягкий и уверенный старт перед школой',
        results: [
          'Развитие внимания и памяти',
          'Базовые навыки письма и счёта',
          'Адаптация к учебному ритму',
          'Уверенность перед первым классом',
        ],
      },
      {
        title: '0 класс',
        icon: '🎒',
        forWho: 'Дети 6–7 лет',
        description: 'Подготовка к школе с полным погружением',
        results: [
          'Чтение и письмо на уровне школы',
          'Математические основы',
          'Социальная адаптация',
          'Готовность к 1 классу',
        ],
      },
      {
        title: 'Продлёнка',
        icon: '🏫',
        forWho: 'Школьники 1–4 классов',
        description: 'Поддержка ребёнка после школы',
        results: [
          'Помощь с домашними заданиями',
          'Разбор сложных тем',
          'Полезная занятость',
          'Спокойствие для родителей',
        ],
      },
      {
        title: 'Английский язык',
        icon: '🌍',
        forWho: 'Дети и школьники всех возрастов',
        description: 'Понимание, практика и уверенность в речи',
        results: [
          'Развитие навыков аудирования',
          'Практика разговорной речи',
          'Постепенный рост уровня',
          'Без перегруза и стресса',
        ],
      },
      {
        title: 'Математика',
        icon: '🔢',
        forWho: 'Школьники 1–11 классов',
        description: 'Системное объяснение и устранение пробелов',
        results: [
          'Понимание основных концепций',
          'Устранение пробелов в знаниях',
          'Развитие логического мышления',
          'Уверенность в предмете',
        ],
      },
      {
        title: 'Подготовка к НИШ/БИЛ/КТЛ',
        icon: '🚀',
        forWho: 'Школьники 4–11 классов',
        description: 'Целенаправленная подготовка для высокого уровня',
        results: [
          'Углубленное изучение предметов',
          'Подготовка к вступительным экзаменам',
          'Развитие критического мышления',
          'Успешное поступление',
        ],
      },
    ];

    return (
      <section className="section-padding bg-white">
        <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-2xl overflow-hidden card-hover stagger-item">
                <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 text-center">
                  <div className="text-5xl mb-4">{program.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900">{program.title}</h3>
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-primary-600 mb-2">ДЛЯ КОГО</p>
                    <p className="text-gray-700">{program.forWho}</p>
                  </div>

                  <p className="text-gray-600 mb-6 italic">{program.description}</p>

                  <div className="mb-6">
                    <p className="text-sm font-semibold text-gray-900 mb-3">ОЖИДАЕМЫЙ РЕЗУЛЬТАТ</p>
                    <ul className="space-y-2">
                      {program.results.map((result, ridx) => (
                        <li key={ridx} className="flex items-start gap-2">
                          <CheckCircle className="text-primary-600 flex-shrink-0 mt-0.5" size={16} />
                          <span className="text-sm text-gray-600">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full btn-primary text-center"
                  >
                    Записаться в WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Help Choose Section
  const HelpChooseSection = () => (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-soft text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Не знаете, что выбрать?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Напишите нам в WhatsApp — мы подскажем программу по возрасту, уровню и цели ребёнка. Консультация совершенно бесплатна.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            Получить консультацию
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );

  // Additional Programs Section
  const AdditionalSection = () => (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Дополнительные направления
          </h2>
          <p className="text-lg text-gray-600">
            Помощь с обучением и поддержка на каждом этапе
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: 'Помощь с домашними заданиями',
              desc: 'Если ребёнку сложно справляться со школьной программой, мы поможем разобраться в сложных темах и выполнить домашнее задание.',
              icon: '✏️',
            },
            {
              title: 'Индивидуальные занятия',
              desc: 'Персональный подход к каждому ребёнку с учётом его особенностей и темпа обучения.',
              icon: '👤',
            },
            {
              title: 'Групповые занятия',
              desc: 'Развитие социальных навыков, командной работы и здоровой конкуренции в группе.',
              icon: '👥',
            },
            {
              title: 'Диагностика уровня',
              desc: 'Бесплатная оценка текущего уровня ребёнка для правильного подбора программы.',
              icon: '📊',
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 stagger-item">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // CTA Section
  const CtaSection = () => (
    <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700">
      <div className="container-max text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Начните обучение уже сегодня
        </h2>
        <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
          Выберите программу, которая подходит вашему ребёнку, и напишите нам в WhatsApp.
        </p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 bg-white text-primary-600 rounded-lg font-bold hover:bg-gray-50 transition-colors text-lg"
        >
          Записаться в WhatsApp
        </a>
      </div>
    </section>
  );

  return (
    <div className="page-enter">
      <HeroSection />
      <ProgramsGrid />
      <HelpChooseSection />
      <AdditionalSection />
      <CtaSection />
    </div>
  );
};

export default Programs;
