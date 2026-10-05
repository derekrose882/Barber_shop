import { SERVICES, SERVICE_CATEGORIES, FAQ, formatPrice } from '../data.js';

// Category jump links - sticky on mobile
const servicesNav = document.querySelector('[data-services-nav]');
const header = document.querySelector('[data-header]');

function initStickyNav() {
  if (!servicesNav || !header) return;

  const observer = new IntersectionObserver(
    (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        servicesNav.classList.remove('services-nav--sticky');
      } else {
        servicesNav.classList.add('services-nav--sticky');
      }
    },
    {
      rootMargin: `-${header.offsetHeight}px 0px 0px 0px`,
      threshold: 0,
    }
  );

  const sentinel = document.createElement('div');
  sentinel.style.position = 'absolute';
  sentinel.style.top = '0';
  sentinel.style.height = '1px';
  sentinel.style.width = '100%';
  servicesNav.before(sentinel);
  observer.observe(sentinel);
}

// Render service menu
function renderServicesMenu() {
  const container = document.querySelector('[data-services-menu]');
  if (!container) return;

  const html = SERVICE_CATEGORIES.map(
    (category) => `
      <section class="services-menu__category" id="${category.id}">
        <h2>${category.label}</h2>
        <div class="services-menu__items">
          ${SERVICES
            .filter((s) => s.category === category.id)
            .map(
              (service) => `
                <article class="services-menu__item">
                  <div class="services-menu__row">
                    <span class="services-menu__name">${service.name}</span>
                    <span class="services-menu__leader"></span>
                    <span class="services-menu__price">${formatPrice(service.price, service.addon)}</span>
                  </div>
                  <div class="services-menu__meta">
                    <span class="chip services-menu__duration">${service.minutes} min</span>
                    <a class="services-menu__book" href="book.html?service=${service.id}">Book this</a>
                  </div>
                  ${service.description ? `<p class="services-menu__description">${service.description}</p>` : ''}
                </article>
              `
            )
            .join('')}
        </div>
      </section>
    `
  ).join('');

  container.innerHTML = html;
}

// Render FAQ
function renderFAQ() {
  const container = document.querySelector('[data-services-faq]');
  if (!container) return;

  const html = FAQ.map(
    (item) => `
      <details class="accordion services-faq__item">
        <summary class="accordion__summary">
          <span class="accordion__title">${item.q}</span>
          <span class="accordion__icon" aria-hidden="true"></span>
        </summary>
        <div class="accordion__content">
          <p>${item.a}</p>
        </div>
      </details>
    `
  ).join('');

  container.innerHTML = html;
}

// Smooth scroll for category links
function initCategoryLinks() {
  const links = document.querySelectorAll('[data-category]');
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        const headerHeight = document.querySelector('[data-header]')?.offsetHeight || 0;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
      }
    });
  });
}

// Initialize
initStickyNav();
renderServicesMenu();
renderFAQ();
initCategoryLinks();
