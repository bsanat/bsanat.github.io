'use strict';

const projects = {
  medpredict: {
    title: 'MedPredict',
    kicker: 'HEALTHTECH / FRONTEND',
    description: 'Frontend дипломного учебного проекта для работы с медицинскими показателями. Мой вклад — интерфейс, пользовательские сценарии и клиентская логика на React и TypeScript.',
    facts: ['Интерфейс на русском, казахском и английском языках.', 'Формы с валидацией, типизированный API-адаптер и экспорт PDF.', 'UX/UI и макеты Figma. Скриншот показывает интерфейс учебного прототипа.'],
    tags: ['React', 'TypeScript', 'Vite', 'Figma'],
    links: [{ label: 'Макет в Figma', url: 'https://www.figma.com/design/zOkk0fppNrBrjWDblCDwyF/Untitled?node-id=0-1' }, { label: 'GitHub', url: 'https://github.com/bsanat/MedPredict' }]
  },
  jobhub: {
    title: 'JobHub',
    kicker: 'CAREER PLATFORM / WEB',
    description: 'Платформа для поиска работы и сотрудников в Казахстане. Объединяет вакансии, компании и личные кабинеты соискателя и работодателя.',
    facts: ['Поиск вакансий и компаний на русском и казахском языках.', 'Сохранённые вакансии, отклики и PDF-резюме.', 'Frontend на React и TypeScript; backend на Go и Gin, база данных PostgreSQL.'],
    tags: ['React', 'TypeScript', 'Go', 'PostgreSQL', 'Figma'],
    links: [{ label: 'Открыть сайт', url: 'https://jobhub-lovat.vercel.app/' }, { label: 'Макет в Figma', url: 'https://www.figma.com/design/aCXI2bPMUi8CpeHZF8oBh9/Untitled' }, { label: 'GitHub', url: 'https://github.com/bsanat/JobHub' }]
  },
  mura: {
    title: 'Мұра',
    kicker: 'ЦИФРОВАЯ БИБЛИОТЕКА / ЛИЧНЫЙ ПРОЕКТ',
    description: 'Интерактивная книжная полка для знакомства с казахской литературой. Обложки, каталог, поиск и биографии авторов в одном пространстве.',
    facts: ['Интерактивная 3D-полка и навигация по книгам.', 'Поиск и фильтры по жанрам и периодам.', 'Статический сайт на HTML, CSS и JavaScript.'],
    tags: ['JavaScript', 'HTML', 'CSS', 'GitHub Pages'],
    links: [{ label: 'Открыть сайт', url: 'https://bogenbayevsanat.me/KitapSoresi' }, { label: 'GitHub', url: 'https://github.com/bsanat/KitapSoresi' }]
  }
};

const technologyIcons = {
  React: 'react', TypeScript: 'typescript', Vite: 'vite', Figma: 'figma',
  Go: 'go', PostgreSQL: 'postgresql', JavaScript: 'javascript', HTML: 'html5', CSS: 'css', 'GitHub Pages': 'github'
};

const certificates = {
  ccna: { title: 'CCNA: Introduction to Networks', date: '3 ноября 2026', image: 'assets/certificates/cisco-ccna.png', original: 'assets/certificates/cisco-ccna.pdf' },
  aws: { title: 'AWS Academy — Cloud Foundations', date: '10 октября 2026 · 20 часов', image: 'assets/certificates/aws-cloud-foundations.png', original: 'assets/certificates/aws-cloud-foundations.png' },
  essentials: { title: 'Cisco — IT Essentials', date: '11 февраля 2026', image: 'assets/certificates/cisco-it-essentials.png', original: 'assets/certificates/cisco-it-essentials.png' }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { projects, certificates, technologyIcons };
} else {
  const projectDialog = document.querySelector('#project-dialog');
  const certificateDialog = document.querySelector('#certificate-dialog');
  const navigationDialog = document.querySelector('#navigation-dialog');
  const icon = (name = 'arrow-up-right', brand = false) => {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.classList.add('icon');
    if (brand) svg.classList.add('brand-icon');
    svg.setAttribute('aria-hidden', 'true');
    const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    use.setAttribute('href', `assets/icons/${brand ? 'brands' : 'lucide'}.svg#${name}`);
    svg.append(use);
    return svg;
  };

  document.querySelectorAll('[data-project]').forEach(button => {
    button.addEventListener('click', () => {
      const project = projects[button.dataset.project];
      if (!project) return;
      document.querySelector('#dialog-title').textContent = project.title;
      document.querySelector('#dialog-kicker').textContent = project.kicker;
      document.querySelector('#dialog-description').textContent = project.description;
      const facts = project.facts.map(fact => {
        const li = document.createElement('li');
        li.textContent = fact;
        return li;
      });
      document.querySelector('#dialog-facts').replaceChildren(...facts);
      const tags = project.tags.map(tag => {
        const span = document.createElement('span');
        span.textContent = tag;
        if (technologyIcons[tag]) span.prepend(icon(technologyIcons[tag], true));
        return span;
      });
      document.querySelector('#dialog-tags').replaceChildren(...tags);
      const links = project.links.map(({ label, url }) => {
        const a = document.createElement('a');
        a.textContent = label;
        a.setAttribute('aria-label', label);
        a.href = url;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        if (url.includes('github.com/')) a.prepend(icon('github', true));
        else if (url.includes('figma.com/')) a.prepend(icon('figma', true));
        else a.append(icon());
        return a;
      });
      document.querySelector('#dialog-links').replaceChildren(...links);
      projectDialog.showModal();
    });
  });

  document.querySelectorAll('[data-certificate]').forEach(button => {
    button.addEventListener('click', () => {
      const certificate = certificates[button.dataset.certificate];
      if (!certificate) return;
      document.querySelector('#certificate-title').textContent = certificate.title;
      document.querySelector('#certificate-date').textContent = certificate.date;
      const image = document.querySelector('#certificate-image');
      image.src = certificate.image;
      image.alt = `Сертификат Саната Богенбаева — ${certificate.title}`;
      document.querySelector('#certificate-original').href = certificate.original;
      certificateDialog.showModal();
    });
  });

  document.querySelector('.menu-toggle').addEventListener('click', () => navigationDialog.showModal());
  document.querySelectorAll('dialog').forEach(dialog => {
    dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => {
      if (event.target !== dialog) return;
      const bounds = dialog.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
    });
  });
  navigationDialog.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', () => navigationDialog.close());
  });

  const clock = document.querySelector('#astana-time');
  const formatter = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Almaty', hour: '2-digit', minute: '2-digit', hour12: false });
  function updateClock() {
    const now = new Date();
    clock.dateTime = now.toISOString();
    clock.textContent = `${formatter.format(now)} · UTC+5`;
  }
  updateClock();
  setInterval(updateClock, 60_000);
}
