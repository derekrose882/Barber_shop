# Palm & Blade Barbershop Demo Site

A modern, beautiful demo website showcasing what a premium barbershop website can look like. Built for Next Door Web Development portfolio.

## Demo Disclaimer

**Palm & Blade is a fictional shop.** This is a demo site designed and built by Next Door Web Development. No real appointments, services, or business operations are associated with this site.

## Quick Start

### Prerequisites
- None! This is a static site with no build step required.

### Running Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/derekrose882/Barber_shop.git
   cd Barber_shop
   ```

2. **Start a local server:**
   - Using Python 3:
     ```bash
     python3 -m http.server 8000
     ```
   - Using VS Code: Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension and click "Go Live"
   - Using Node.js:
     ```bash
     npx serve
     ```

3. **Open in browser:** Visit `http://localhost:8000` (or the port shown in your terminal)

## Folder Structure

```
/
├── index.html              # Home page
├── services.html           # Services & pricing page
├── barbers.html            # Meet the barbers page
├── book.html               # Booking flow page
├── 404.html                # Not found page
├── netlify.toml            # Netlify deployment config
├── robots.txt              # SEO: disallow all
├── README.md               # This file
├── PRD.md                 # Project requirements document
├── css/
│   ├── tokens.css          # Design system tokens
│   ├── base.css            # Global styles & reset
│   ├── components.css      # Shared components
│   └── pages/
│       ├── home.css
│       ├── services.css
│       ├── barbers.css
│       └── book.css
├── js/
│   ├── data.js             # Shared content data
│   ├── main.js             # Shared JavaScript
│   └── pages/
│       ├── home.js
│       ├── services.js
│       ├── barbers.js
│       └── book.js
├── assets/
│   ├── logo.svg            # Site logo
│   ├── favicon.svg         # Browser favicon
│   └── img/
│       ├── CREDITS.md      # Image attribution
│       └── *.webp          # Site images
└── notes/
    ├── claude.md
    ├── replit.md
    └── mistral.md
```

## Image Credits

All images used in this demo are sourced from free stock photo services (Unsplash, Pexels). See `assets/img/CREDITS.md` for complete attribution information.

## Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS variables, Flexbox, Grid
- **Vanilla JavaScript (ES Modules)** - Interactive functionality
- **Google Fonts** - Shrikhand (display) and Instrument Sans (body)
- **No frameworks, no build step, no npm** - Pure static site

## Deployment

This site is configured for Netlify deployment. Simply connect your repository to Netlify and it will deploy automatically.

### Netlify Configuration
- Build command: None (static site)
- Publish directory: `/`
- Custom 404 page: `404.html`
- Cache headers configured in `netlify.toml`

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome for Android)

## Accessibility

- Semantic HTML structure
- Keyboard navigation support
- Focus states on all interactive elements
- Screen reader compatible
- Respects `prefers-reduced-motion`
- Color contrast meets WCAG AA standards

## License

This demo site is proprietary work of Next Door Web Development. Content and design are for demonstration purposes only.
