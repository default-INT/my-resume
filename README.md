# My Resume - Personal Portfolio Website

A modern, responsive personal resume website built with Next.js 15, featuring internationalization (i18n) support and a clean, professional design. This project showcases professional experience, skills, projects, and education in an interactive format.

## 🚀 Features

- **Internationalization**: Full support for English and Russian languages
- **Responsive Design**: Mobile-first approach with adaptive layout
- **Static Export**: Optimized for deployment as static files
- **Modern Tech Stack**: Built with Next.js 15, React 19, and TypeScript
- **Professional Layout**: Clean sidebar with main content area
- **Interactive Components**: Animated sections and smooth transitions
- **SEO Optimized**: Comprehensive SEO with localized meta tags, structured data, and keyword targeting

## 🛠️ Tech Stack

### Core Technologies
- **Next.js 15.5.2** - React framework with App Router
- **React 19.1.0** - UI library
- **TypeScript 5** - Type safety and better developer experience
- **Sass 1.92.0** - CSS preprocessing

### Internationalization
- **next-intl 4.3.6** - Complete i18n solution for Next.js
- **Locales**: English (en) and Russian (ru)
- **Default locale**: English

### Development Tools
- **ESLint** - Code linting and formatting
- **@svgr/webpack** - SVG to React component transformation
- **Roboto Font** - Typography from Google Fonts

## 📁 Project Structure

The project follows Feature-Sliced Design (FSD) architecture:

```
src/
├── app/                    # Next.js App Router
│   └── [locale]/          # Internationalized routes
├── config/                # Configuration files
│   └── i18n/             # Internationalization setup
├── entities/             # Business entities (currently empty)
├── features/             # Feature components
│   └── about-me/         # About me related features
├── shared/               # Shared utilities and components
│   ├── assets/           # Static assets (icons, images)
│   ├── styles/           # Global styles and mixins
│   ├── types/            # TypeScript type definitions
│   └── utils/            # Utility functions
├── translations/         # i18n translation files
│   ├── en/              # English translations
│   └── ru/              # Russian translations
└── widgets/              # Page-level components
    ├── about-me/         # Main content widget
    └── sidebar/          # Sidebar widget
```

## 🎨 Key Components

### Sidebar Widget
- **Personal Information**: Name, position, contact details
- **Social Links**: LinkedIn, GitHub, Instagram, Telegram
- **Language Skills**: English, Belarusian, Russian
- **Mobile Responsive**: Collapsible menu for mobile devices

### About Me Widget
- **Experience Timeline**: Professional work history with company logos
- **Project Showcase**: Latest projects with descriptions and status
- **Skills Matrix**: Development and soft skills in organized sections
- **Education**: Academic background and certifications

## 👨‍💻 Professional Profile

### Experience
- **Current**: Senior React Developer at Roolz (July 2024 - Present)
- **Previous**: React/React Native Developer at Vention, iTechArt, MBicycle
- **Total Experience**: 3+ years in frontend development

### Technical Skills
- **Frameworks**: React.js, React Native, Next.js, Node.js
- **Languages**: JavaScript, TypeScript
- **Libraries**: Redux, MobX, Zustand, Express.js, MongoDB
- **Tools**: Webpack, Vite, Jest, Cypress, Docker, Git

### Featured Projects
1. **Roolz** - Logistics platform for cargo matching and shipment management
2. **Aibolit** - Surgery management platform with 3D modeling and AI annotation
3. **GetSwap** - Item exchange application with photo upload and chat
4. **Education Cannot Wait** - Remote learning platform for teachers and students

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd my-resume
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production (static export)
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Run ESLint with auto-fix

## 🌐 Internationalization

The project supports multiple languages using next-intl:

- **Supported Locales**: `en` (English), `ru` (Russian)
- **Default Locale**: English
- **Translation Files**: Located in `src/translations/[locale]/`
- **URL Structure**: `/en/` and `/ru/` routes

### Adding New Languages

1. Add the locale to `src/config/i18n/routing.ts`
2. Create translation files in `src/translations/[locale]/`
3. Update any locale-specific logic in components

## 🔍 SEO Optimization

The website is fully optimized for search engines with:

### Targeted Keywords
- **English**: React developer, React Native developer, Software developer Minsk, Hire software developer Minsk
- **Russian**: React разработчик, React Native разработчик, Разработчик ПО Минск, Нанять разработчика Минск

### SEO Features
- **Localized Meta Tags**: Unique titles, descriptions, and keywords for each language
- **Structured Data**: JSON-LD schema for Person and Organization
- **Open Graph**: Optimized social media sharing
- **Twitter Cards**: Enhanced Twitter sharing
- **Hreflang Tags**: International SEO support
- **Canonical URLs**: Prevent duplicate content issues
- **Sitemap**: Dynamic XML sitemap generation
- **Robots.txt**: Search engine crawling instructions
- **Geo Tags**: Local SEO for Minsk, Belarus location

### SEO Configuration
- **Config File**: `src/config/seo.ts` - Centralized SEO settings
- **Dynamic Metadata**: Locale-specific meta tag generation
- **Search Engine Verification**: Google and Yandex verification support

## 🎯 Deployment

The project is configured for static export:

1. Build the project:
```bash
npm run build
```

2. The static files will be generated in the `build/` directory
3. Deploy the `build/` directory to any static hosting service

### Deployment Options
- **Vercel** - Recommended for Next.js projects
- **Netlify** - Static site hosting
- **GitHub Pages** - Free static hosting
- **AWS S3** - Cloud storage with CDN

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

Key responsive features:
- Collapsible sidebar on mobile
- Adaptive grid layouts
- Touch-friendly navigation
- Optimized typography scaling

## 🔧 Configuration

### Next.js Configuration (`next.config.ts`)
- Static export enabled
- SVG webpack loader configured
- next-intl plugin integration
- Custom build directory (`build/`)

### TypeScript Configuration
- Strict mode enabled
- Path aliases configured (`@/*` → `./src/*`)
- Modern ES2017 target
- Next.js plugin included

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is private and intended for personal use.

## 📞 Contact

**Yauheni Trafimau**
- Email: evgeniy.trofimov.int@gmail.com
- Phone: +375 (29) 817-47-53
- LinkedIn: [yauheni-trafimau-int](https://www.linkedin.com/in/yauheni-trafimau-int/)
- GitHub: [default-INT](https://github.com/default-INT)
- Location: Minsk, Belarus

---

*Built with ❤️ using Next.js and modern web technologies*
