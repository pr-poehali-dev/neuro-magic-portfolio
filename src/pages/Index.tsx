import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';
import ParticlesBackground from '@/components/ui/particles-background';

const Index = () => {
  const { toast } = useToast();
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      const scrolled = window.scrollY;
      const sections = parallaxRef.current.querySelectorAll('.parallax-section');
      
      sections.forEach((section) => {
        const element = section as HTMLElement;
        const speed = parseFloat(element.dataset.speed || '0.5');
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    role: '',
    phone: '',
    email: '',
    messenger: '',
    need: '',
    comment: '',
    consent: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Валерия свяжется с вами в ближайшее время.",
    });
  };

  const services = [
    {
      title: "Нейропродавец под ключ",
      text: "24/7 обрабатывает заявки, отвечает на возражения, ведёт к оплате.",
      links: [
        { label: "Лендинг услуги", href: "https://neuro-seller-landing--preview.poehali.dev/" },
        { label: "Демо-бот в Telegram", href: "https://t.me/Valery_Neuro_Progressorbot" }
      ],
      image: "https://cdn.poehali.dev/files/5672b765-043e-45e7-a2af-04b3c21f1125.png"
    },
    {
      title: "Контент-цех ТЕКСТ",
      text: "Из 1 фразы — оформленная статья в вашей тональности для Дзен/Тенчат.",
      links: [
        { label: "Писатель-бот", href: "https://t.me/PISAKA_progresor_bot" },
        { label: "Контент-набор (20 идей)", href: "https://disk.yandex.ru/i/gSPbzaVkF1jwdA" }
      ],
      image: "https://cdn.poehali.dev/files/114a5d65-b431-4513-bba1-b062c60aa6a1.png"
    },
    {
      title: "Контент-цех ВИДЕО АВАТАР",
      text: "Автоматизация выпуска видео-контента с видео-аватаром.",
      links: [{ label: "Смотреть соцсети", href: "#footer-socials" }],
      image: "https://cdn.poehali.dev/files/b28b06e3-b040-44cf-b467-0eb87f61f787.png"
    },
    {
      title: "No-code MVP",
      text: "Быстрые прототипы без кода: парсинг, анализ договоров.",
      links: [
        { label: "Парсинг телефонов", href: "https://preview--lead-compass-62.lovable.app/" },
        { label: "Анализ договоров", href: "https://124235324325434223521.abacusai.app/" }
      ],
      image: "https://cdn.poehali.dev/files/79beb102-cc92-4c2b-a088-6ac36dc46e02.png"
    },
    {
      title: "Автоматизация для НКО",
      text: "ИИ-архитектура в БФ «Обитель Милосердия».",
      links: [{ label: "Описание", href: "https://disk.yandex.ru/i/4E4QJb4R3Vm_bg" }],
      image: "https://cdn.poehali.dev/files/df46aaf6-f1d4-4d9b-a9cf-b3c416e51a7e.png"
    },
    {
      title: "ИИ-дизайн",
      text: "Видео, презентации, карточки товара.",
      links: [{ label: "Примеры", href: "https://disk.yandex.ru/i/JfZq4V-ci111UQ" }],
      image: "https://cdn.poehali.dev/files/3574c8b9-b7fe-4d99-a7b4-369170bb28a0.png"
    },
    {
      title: "HR-автоматизация",
      text: "Рекрутинг, адаптация, мотивация, обучение, оценка; регламенты-«комиксы».",
      links: [{ label: "Портфолио HR", href: "https://disk.yandex.ru/d/BC-7zYCfW2_Hbg" }],
      image: "https://cdn.poehali.dev/files/d70dfea0-f0c0-42ce-aa79-4b241da425ef.png"
    }
  ];

  const cases = [
    {
      title: "ВНИИХОЛОДМАШ",
      text: "Диагностика → дорожная карта → пилоты с ИИ; прозрачные процессы и выше вовлечённость; система «Предложи и реализуй».",
      logo: "https://cdn.poehali.dev/files/6d23d45e-c9bf-4eab-92cd-9292a2567ff1.png"
    },
    {
      title: "ГРОССМАРТ (Элекскор)",
      text: "Рост сети → грейды, стандарты, резерв; регламенты и обучение обеспечили кадровую готовность.",
      logo: "https://cdn.poehali.dev/files/568057c0-0e81-4f3d-a64b-aadf688a0be4.png"
    },
    {
      title: "NISSA",
      text: "Реинжиниринг оценки/мотивации, карьерные траектории, бонусная модель; рост управляемости и результативности.",
      logo: "https://cdn.poehali.dev/files/f6edbb17-39c2-42ef-9b73-af5758bd2e2c.png"
    },
    {
      title: "ТОПСЕРВИС",
      text: "Корп-обучение и оценка, резерв; рост управляемости и оптовых продаж.",
      logo: "https://cdn.poehali.dev/files/3f975429-b3e8-4896-849e-2bd1f534a765.png"
    }
  ];

  const packages = [
    {
      title: "Нейропродавец под ключ",
      desc: "Сценарии, боты, CRM-интеграции, A/B, KPI, обучение.",
      badge: "10–14 дней пилот"
    },
    {
      title: "Аудит HR+ИИ (10 дней)",
      desc: "Карта as-is/to-be, точки ИИ, план пилотов, quick-wins.",
      badge: "Безопасно для NDA"
    },
    {
      title: "Реинжиниринг HR-процессов",
      desc: "KPI, регламенты-«комиксы», обучение руководителей.",
      badge: "Масштабируемо"
    },
    {
      title: "Корп-воркшоп (1 день)",
      desc: "Демо нейропроцессов, контент-завода, живой пилот.",
      badge: ""
    }
  ];

  const faqs = [
    { q: "Какие сроки пилота?", a: "Обычно 10–14 дней от старта до работающего MVP." },
    { q: "Как обеспечивается безопасность данных?", a: "Работаю по NDA; использую закрытые контуры и доступы заказчика." },
    { q: "С какими CRM/сервисами интегрируюсь?", a: "Bitrix24, amoCRM, Telegram-боты, формы, API; обсуждаем ваш стек." },
    { q: "Кто обучает команду?", a: "Провожу воркшопы/методички; передаю сценарии, регламенты и роли." },
    { q: "Есть поддержка после запуска?", a: "Да: SLA-поддержка/итерации по согласованному плану." }
  ];

  return (
    <div ref={parallaxRef} className="relative min-h-screen bg-dark-bg text-white overflow-x-hidden">
      <ParticlesBackground />
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4 overflow-hidden parallax-section" data-speed="0.3">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 via-neon-pink/10 to-neon-blue/20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(185, 0, 255, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(0, 180, 255, 0.15) 0%, transparent 50%)',
        }}></div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center animate-fade-in">
          <div className="mb-6 inline-block">
            <img 
              src="https://cdn.poehali.dev/files/45a9a4e8-6558-426e-94d5-45e509ebbac0.png" 
              alt="Валерия Кравченко"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full mx-auto object-cover neon-border animate-float"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4 text-white leading-tight">
            Валерия Кравченко
          </h1>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-glow bg-gradient-to-r from-neon-purple via-neon-pink to-neon-blue bg-clip-text text-transparent leading-tight">
            HRBP + ИИ: ускоряю процессы, команды и продажи
          </h2>
          
          <p className="text-lg md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
            25 лет HR-экспертизы × свежие ИИ-инструменты: от диагностики и регламентов до нейропроцессов и ботов, которые продают.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-gradient-to-r from-neon-purple to-neon-pink hover:opacity-90 hover:shadow-[0_0_40px_rgba(185,0,255,0.6)] transition-all duration-300 text-white text-lg px-8 py-6">
              <a href="#form">Запросить созвон</a>
            </Button>
            <Button size="lg" variant="outline" className="neon-border text-white hover:bg-white/5 hover:shadow-[0_0_30px_rgba(0,180,255,0.4)] transition-all duration-300 text-lg px-8 py-6">
              <a href="#demo">Посмотреть демо "Нейропродавец"</a>
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="ghost" className="neon-border hover:bg-white/5 hover:shadow-[0_0_20px_rgba(185,0,255,0.4)] transition-all duration-300" asChild>
              <a href="https://wa.me/79268140307" target="_blank" rel="noopener noreferrer">
                <Icon name="MessageCircle" className="mr-2" />
                WhatsApp
              </a>
            </Button>
            <Button variant="ghost" className="neon-border hover:bg-white/5 hover:shadow-[0_0_20px_rgba(0,180,255,0.4)] transition-all duration-300" asChild>
              <a href="https://t.me/valeryka76" target="_blank" rel="noopener noreferrer">
                <Icon name="Send" className="mr-2" />
                Telegram
              </a>
            </Button>
            <Button variant="ghost" className="neon-border hover:bg-white/5 hover:shadow-[0_0_20px_rgba(255,30,121,0.4)] transition-all duration-300" asChild>
              <a href="mailto:valeryka@yandex.ru">
                <Icon name="Mail" className="mr-2" />
                Email
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-32 px-4 overflow-hidden parallax-section" data-speed="0.15">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-neon-purple to-transparent opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-full h-2 bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-30"></div>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-16 text-glow bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent">
            Что я делаю с ИИ для вашего бизнеса
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <Card key={idx} className="relative overflow-hidden glass-card hover:scale-105 hover:shadow-[0_0_40px_rgba(185,0,255,0.5)] transition-all duration-300 animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 via-transparent to-neon-blue/10 opacity-60"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-dark-bg/40 to-transparent"></div>
                {service.image && (
                  <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="relative p-6">
                  <h3 className="text-2xl font-bold mb-3 text-white">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.text}</p>
                  <div className="flex flex-col gap-2">
                    {service.links.map((link, linkIdx) => (
                      <a
                        key={linkIdx}
                        href={link.href}
                        className="text-neon-blue hover:text-neon-pink transition-colors text-sm flex items-center gap-1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon name="ExternalLink" size={16} />
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-gradient-to-r from-neon-blue to-neon-purple hover:opacity-90 hover:shadow-[0_0_40px_rgba(0,180,255,0.6)] transition-all duration-300 text-white px-8 py-6">
              <a href="#form">Получить подробности решений</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-dark-surface/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, rgba(185, 0, 255, 0.05) 0px, transparent 1px, transparent 2px, rgba(185, 0, 255, 0.05) 3px), repeating-linear-gradient(90deg, rgba(0, 180, 255, 0.05) 0px, transparent 1px, transparent 2px, rgba(0, 180, 255, 0.05) 3px)',
          backgroundSize: '50px 50px'
        }}></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-16 text-glow bg-gradient-to-r from-neon-pink to-neon-purple bg-clip-text text-transparent">
            Кейсы и эффекты
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {cases.map((caseItem, idx) => (
              <Card key={idx} className="relative overflow-hidden glass-card p-8 hover:scale-105 hover:shadow-[0_0_40px_rgba(185,0,255,0.5)] transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/10 via-transparent to-neon-purple/10 opacity-50"></div>
                <div className="relative z-10">
                {caseItem.logo && (
                  <div className="mb-4 h-16 flex items-center">
                    <img src={caseItem.logo} alt={caseItem.title} className="max-h-12 object-contain" />
                  </div>
                )}
                  <h3 className="text-2xl font-bold mb-3 text-white">{caseItem.title}</h3>
                  <p className="text-muted-foreground">{caseItem.text}</p>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="neon-border text-white hover:bg-white/5 hover:shadow-[0_0_30px_rgba(255,30,121,0.4)] transition-all duration-300 px-8 py-6">
              <a href="#form">Запросить подробности кейса</a>
            </Button>
          </div>
        </div>
      </section>

      <section id="demo" className="relative z-10 py-32 px-4 overflow-hidden parallax-section" data-speed="0.1">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(185, 0, 255, 0.2) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(0, 180, 255, 0.2) 0%, transparent 50%)'
        }}></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-8 text-glow bg-gradient-to-r from-neon-blue to-neon-pink bg-clip-text text-transparent">
            НейроПродавец: ваш ангел продаж 24/7
          </h2>
          
          <p className="text-xl text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
            Диагностика → сценарии → бот → интеграции → A/B → масштабирование.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="glass-card p-6 hover:shadow-[0_0_30px_rgba(185,0,255,0.3)] transition-all duration-300">
              <div className="aspect-video bg-dark-bg rounded-lg flex items-center justify-center neon-border">
                <a href="https://vkvideo.ru/video-193144761_456239140" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-neon-purple hover:text-neon-pink transition-colors">
                  <Icon name="Play" size={48} className="animate-glow-pulse" />
                  <span>Смотреть видео 1</span>
                </a>
              </div>
            </Card>
            <Card className="glass-card p-6 hover:shadow-[0_0_30px_rgba(0,180,255,0.3)] transition-all duration-300">
              <div className="aspect-video bg-dark-bg rounded-lg flex items-center justify-center neon-border">
                <a href="https://vkvideo.ru/video-193144761_456239192" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-neon-purple hover:text-neon-pink transition-colors">
                  <Icon name="Play" size={48} className="animate-glow-pulse" />
                  <span>Смотреть видео 2</span>
                </a>
              </div>
            </Card>
          </div>
          
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {["24/7", "Скорость реакции", "Экономия времени команды", "Рост MQL/SQL"].map((chip, idx) => (
              <span key={idx} className="px-4 py-2 glass-card rounded-full text-sm neon-border hover:shadow-[0_0_15px_rgba(185,0,255,0.5)] transition-all duration-300 cursor-default">
                {chip}
              </span>
            ))}
          </div>
          
          <div className="text-center">
            <Button size="lg" className="bg-gradient-to-r from-neon-pink to-neon-purple hover:opacity-90 hover:shadow-[0_0_40px_rgba(255,30,121,0.6)] transition-all duration-300 text-white px-8 py-6">
              <a href="#form">Заказать Нейропродавца</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-dark-surface/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, rgba(185, 0, 255, 0.05) 0px, transparent 1px, transparent 2px, rgba(185, 0, 255, 0.05) 3px), repeating-linear-gradient(90deg, rgba(0, 180, 255, 0.05) 0px, transparent 1px, transparent 2px, rgba(0, 180, 255, 0.05) 3px)',
          backgroundSize: '50px 50px'
        }}></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-8 text-glow bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
            Спикер и медиа
          </h2>
          
          <div className="mb-12">
            <Card className="glass-card p-6 neon-border hover:shadow-[0_0_30px_rgba(185,0,255,0.3)] transition-all duration-300 max-w-md mx-auto">
              <img 
                src="https://cdn.poehali.dev/files/8019197a-ac7e-4282-a997-2c8c27f471e6.png" 
                alt="Валерия Кравченко"
                className="w-full aspect-[3/4] object-cover rounded-lg"
              />
            </Card>
          </div>
          
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-6 text-white">Выступления</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="glass-card p-6 neon-border hover:shadow-[0_0_30px_rgba(255,30,121,0.3)] transition-all duration-300">
                <div className="aspect-video bg-dark-bg rounded-lg flex items-center justify-center mb-4 neon-border">
                  <a href="https://youtu.be/Wy4dw35zI80" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-neon-purple hover:text-neon-pink transition-colors">
                    <Icon name="Play" size={48} className="animate-glow-pulse" />
                    <span className="text-center">Конгресс НСК</span>
                  </a>
                </div>
              </Card>
              <Card className="glass-card p-6 neon-border hover:shadow-[0_0_30px_rgba(255,30,121,0.3)] transition-all duration-300">
                <div className="aspect-video bg-dark-bg rounded-lg flex items-center justify-center mb-4 neon-border">
                  <a href="https://youtu.be/fkrMBNta_W4" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-neon-purple hover:text-neon-pink transition-colors">
                    <Icon name="Play" size={48} className="animate-glow-pulse" />
                    <span className="text-center">День нейросетей в «Терре»</span>
                  </a>
                </div>
              </Card>
            </div>
          </div>
          
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-6 text-white">Компании, с которыми работала</h3>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-70">
              {cases.map((caseItem, idx) => caseItem.logo && (
                <img 
                  key={idx}
                  src={caseItem.logo} 
                  alt={caseItem.title} 
                  className="h-12 object-contain grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 hover:scale-110 cursor-pointer"
                />
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <Button size="lg" className="bg-gradient-to-r from-neon-pink to-neon-purple hover:opacity-90 hover:shadow-[0_0_40px_rgba(185,0,255,0.6)] transition-all duration-300 text-white px-8 py-6">
              <a href="#form">Позвать спикером</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-32 px-4 overflow-hidden parallax-section" data-speed="0.14">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(185, 0, 255, 0.2) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(0, 180, 255, 0.2) 0%, transparent 50%)'
        }}></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-16 text-glow bg-gradient-to-r from-neon-blue to-neon-pink bg-clip-text text-transparent">
            Материалы / Бонусы
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="glass-card p-8 neon-border hover:scale-105 hover:shadow-[0_0_30px_rgba(185,0,255,0.3)] transition-all duration-300">
              <Icon name="Gift" size={48} className="text-neon-purple mb-4 animate-float" />
              <h3 className="text-xl font-bold mb-3 text-white">Контент-набор: 20 идей и промптов</h3>
              <p className="text-muted-foreground mb-4">«возьми → вставь → получи контент»</p>
              <Button variant="outline" className="neon-border text-white hover:bg-white/5 hover:shadow-[0_0_20px_rgba(0,180,255,0.4)] transition-all" asChild>
                <a href="https://disk.yandex.ru/i/gSPbzaVkF1jwdA" target="_blank" rel="noopener noreferrer">
                  <Icon name="Download" className="mr-2" size={16} />
                  Скачать
                </a>
              </Button>
            </Card>
            <Card className="glass-card p-8 neon-border hover:scale-105 hover:shadow-[0_0_30px_rgba(0,180,255,0.3)] transition-all duration-300">
              <Icon name="Sparkles" size={48} className="text-neon-blue mb-4 animate-float" />
              <h3 className="text-xl font-bold mb-3 text-white">ТОП-15 связок для заработка с ИИ</h3>
              <p className="text-muted-foreground mb-4">простые быстрые связки инструмент+задача+результат</p>
              <Button variant="outline" className="neon-border text-white hover:bg-white/5 hover:shadow-[0_0_20px_rgba(255,30,121,0.4)] transition-all" asChild>
                <a href="https://disk.yandex.ru/i/-YV5DYzIncj9cw" target="_blank" rel="noopener noreferrer">
                  <Icon name="Download" className="mr-2" size={16} />
                  Скачать
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-32 px-4 bg-dark-surface/30 parallax-section" data-speed="0.16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-16 text-glow bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent">
            3 шага к предсказуемым результатам
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Диагностика", desc: "Интервью, аудит процессов, точки автоматизации.", icon: "Search" },
              { title: "Пилот 10–14 дней", desc: "MVP/бот/регламент, метрики, обучение команды.", icon: "Rocket" },
              { title: "Масштабирование", desc: "Интеграции, KPI-панель, регламенты, обучение лидов.", icon: "TrendingUp" }
            ].map((step, idx) => (
              <Card key={idx} className="glass-card p-8 text-center hover:scale-105 hover:shadow-[0_0_30px_rgba(185,0,255,0.3)] transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-neon-purple to-neon-pink mb-6">
                  <Icon name={step.icon} size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="neon-border text-white hover:bg-white/5 hover:shadow-[0_0_30px_rgba(255,30,121,0.4)] transition-all duration-300 px-8 py-6">
              <a href="#form">Запросить дорожную карту (HR+ИИ)</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-32 px-4 parallax-section" data-speed="0.12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-16 text-glow bg-gradient-to-r from-neon-pink to-neon-blue bg-clip-text text-transparent">
            Форматы сотрудничества
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {packages.map((pkg, idx) => (
              <Card key={idx} className="relative overflow-hidden glass-card p-8 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,180,255,0.5)] transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-transparent to-neon-purple/10 opacity-50"></div>
                <div className="relative z-10">
                {pkg.badge && (
                  <span className="inline-block px-3 py-1 text-xs rounded-full bg-gradient-to-r from-neon-purple to-neon-pink text-white mb-4 shadow-[0_0_15px_rgba(185,0,255,0.5)]">
                    {pkg.badge}
                  </span>
                )}
                  <h3 className="text-2xl font-bold mb-3 text-white">{pkg.title}</h3>
                  <p className="text-muted-foreground mb-6">{pkg.desc}</p>
                  <Button className="w-full bg-gradient-to-r from-neon-blue to-neon-purple hover:opacity-90 hover:shadow-[0_0_30px_rgba(0,180,255,0.5)] transition-all duration-300" asChild>
                    <a href="#form">Получить предложение</a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-dark-surface/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-16 text-glow bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent">
            Частые вопросы
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="glass-card px-6 rounded-lg neon-border hover:shadow-[0_0_20px_rgba(185,0,255,0.3)] transition-all">
                <AccordionTrigger className="text-lg font-semibold text-white hover:text-neon-pink">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="form" className="relative z-10 py-32 px-4 parallax-section" data-speed="0.08">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-8 text-glow bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
            Запросить созвон
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Card className="glass-card p-6 neon-border">
              <img 
                src="https://cdn.poehali.dev/files/45a9a4e8-6558-426e-94d5-45e509ebbac0.png" 
                alt="Валерия Кравченко"
                className="w-full h-full object-cover rounded-lg"
              />
            </Card>
            
            <Card className="glass-card p-8 neon-border hover:shadow-[0_0_40px_rgba(185,0,255,0.5)] transition-all">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-white">Имя *</Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-dark-bg border-white/10 text-white mt-2 focus:border-neon-purple focus:ring-neon-purple/20"
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="company" className="text-white">Компания</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="bg-dark-bg border-white/10 text-white mt-2 focus:border-neon-purple focus:ring-neon-purple/20"
                  />
                </div>
                <div>
                  <Label htmlFor="role" className="text-white">Роль</Label>
                  <Input
                    id="role"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="bg-dark-bg border-white/10 text-white mt-2 focus:border-neon-purple focus:ring-neon-purple/20"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone" className="text-white">Телефон</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-dark-bg border-white/10 text-white mt-2 focus:border-neon-purple focus:ring-neon-purple/20"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-white">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-dark-bg border-white/10 text-white mt-2 focus:border-neon-purple focus:ring-neon-purple/20"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="messenger" className="text-white">Удобный мессенджер</Label>
                <Select value={formData.messenger} onValueChange={(value) => setFormData({ ...formData, messenger: value })}>
                  <SelectTrigger className="bg-dark-bg border-white/10 text-white mt-2">
                    <SelectValue placeholder="Выберите мессенджер" />
                  </SelectTrigger>
                  <SelectContent className="bg-dark-surface border-white/10">
                    <SelectItem value="whatsapp">WhatsApp</SelectItem>
                    <SelectItem value="telegram">Telegram</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="need" className="text-white">Задача</Label>
                <Select value={formData.need} onValueChange={(value) => setFormData({ ...formData, need: value })}>
                  <SelectTrigger className="bg-dark-bg border-white/10 text-white mt-2">
                    <SelectValue placeholder="Выберите задачу" />
                  </SelectTrigger>
                  <SelectContent className="bg-dark-surface border-white/10">
                    <SelectItem value="neuro">Нейропродавец</SelectItem>
                    <SelectItem value="audit">Аудит HR+ИИ</SelectItem>
                    <SelectItem value="reengineering">Реинжиниринг</SelectItem>
                    <SelectItem value="workshop">Воркшоп</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="comment" className="text-white">Комментарий</Label>
                <Textarea
                  id="comment"
                  value={formData.comment}
                  onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                  className="bg-dark-bg border-white/10 text-white mt-2 min-h-24 focus:border-neon-purple focus:ring-neon-purple/20"
                />
              </div>
              
              <div className="flex items-start gap-3">
                <Checkbox
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={(checked) => setFormData({ ...formData, consent: checked === true })}
                  className="border-white/20 mt-1"
                />
                <Label htmlFor="consent" className="text-sm text-muted-foreground cursor-pointer">
                  Соглашаюсь с политикой конфиденциальности *
                </Label>
              </div>
              
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-neon-purple via-neon-pink to-neon-blue hover:opacity-90 hover:shadow-[0_0_40px_rgba(185,0,255,0.6)] transition-all duration-300 text-white text-lg py-6"
                disabled={!formData.consent}
              >
                Отправить заявку
              </Button>
            </form>
          </Card>
          </div>
        </div>
      </section>

      <footer id="footer-socials" className="relative z-10 py-16 px-4 bg-dark-surface/50 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="ghost" className="neon-border hover:bg-white/5 hover:shadow-[0_0_20px_rgba(185,0,255,0.4)] transition-all duration-300" asChild>
                <a href="https://wa.me/79268140307" target="_blank" rel="noopener noreferrer">
                  <Icon name="MessageCircle" className="mr-2" />
                  WhatsApp
                </a>
              </Button>
              <Button variant="ghost" className="neon-border hover:bg-white/5 hover:shadow-[0_0_20px_rgba(0,180,255,0.4)] transition-all duration-300" asChild>
                <a href="https://t.me/valeryka76" target="_blank" rel="noopener noreferrer">
                  <Icon name="Send" className="mr-2" />
                  Telegram
                </a>
              </Button>
              <Button variant="ghost" className="neon-border hover:bg-white/5 hover:shadow-[0_0_20px_rgba(255,30,121,0.4)] transition-all duration-300" asChild>
                <a href="mailto:valeryka@yandex.ru">
                  <Icon name="Mail" className="mr-2" />
                  Email
                </a>
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="https://t.me/neuro_progressor" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-neon-blue transition-colors">
                Telegram канал
              </a>
              <a href="https://vk.com/neuro_progressor" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-neon-blue transition-colors">
                VK
              </a>
              <a href="https://dzen.ru/neuro_progressor" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-neon-blue transition-colors">
                Дзен
              </a>
              <a href="https://tenchat.ru/4873677" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-neon-blue transition-colors">
                TenChat
              </a>
              <a href="https://rutube.ru/channel/67537775" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-neon-blue transition-colors">
                Rutube
              </a>
              <a href="https://youtube.com/@neuro_progressor" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-neon-blue transition-colors">
                YouTube
              </a>
            </div>
            
            <p className="text-muted-foreground text-center text-sm max-w-md">
              Работаю онлайн и вылетаю в любую точку планеты.
            </p>
            
            <p className="text-muted-foreground text-xs">
              © 2024 Валерия Кравченко. Все права защищены. Работаю как ИП.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;