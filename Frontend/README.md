# Premium Portfolio Website Frontend

A modern, premium, and fully responsive portfolio website frontend for a Full Stack Developer, built with React, Vite, Tailwind CSS, and Framer Motion.

## Features

✨ **Design System**
- Dark luxury theme with gold accents
- Glassmorphism effects with blur and transparency
- Gradient highlights and smooth shadows
- Premium typography (Poppins + Inter)

📱 **Responsive Design**
- Mobile-first approach
- Fully responsive across all devices
- Tailwind breakpoints for perfect alignment
- Hamburger menu on mobile

🎨 **Pages Included**
- **Home**: Hero section with stats and featured work
- **About**: Detailed intro with journey timeline
- **Projects**: Portfolio with filter functionality
- **Skills**: Categorized skills with progress bars
- **Education**: Timeline layout with certifications
- **Certificates**: Grid layout with credential details
- **Contact**: Contact form with social links

🚀 **Interactions**
- Smooth page transitions
- Framer Motion animations
- Hover effects with glow
- Responsive sidebar navigation

## Tech Stack

- **React 18** - UI Library
- **Vite 5** - Build tool
- **Tailwind CSS 3** - Styling
- **Framer Motion 10** - Animations
- **React Router 6** - Navigation
- **Lucide React** - Icons

## Installation

1. **Clone or navigate to the project**
   ```bash
   cd Frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The app will open at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── components/           # Reusable components
│   ├── Button.jsx
│   ├── Card.jsx
│   ├── Badge.jsx
│   ├── SectionTitle.jsx
│   ├── SkillBar.jsx
│   └── StatCard.jsx
├── pages/               # Page components
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   ├── Skills.jsx
│   ├── Education.jsx
│   ├── Certificates.jsx
│   └── Contact.jsx
├── layout/              # Layout components
│   ├── Navbar.jsx
│   └── Sidebar.jsx
├── App.jsx              # Main app with routing
├── main.jsx             # Entry point
└── index.css            # Global styles
```

## Color Scheme

- **Primary**: #0A192F (Deep Blue)
- **Accent**: #D4AF37 (Gold)
- **Secondary**: #C0C0C0 (Silver)
- **Dark backgrounds**: Various shades of dark blue

## Customization

### Update Personal Information
- Edit content in each page component
- Update social links in Navbar and Contact pages
- Modify project data in Projects page

### Modify Colors
- Update color values in `tailwind.config.js`
- Change CSS variables in `src/index.css`

### Add More Pages
- Create new component in `src/pages/`
- Add route in `App.jsx`
- Add navigation link in `layout/Navbar.jsx` and `layout/Sidebar.jsx`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized animations with Framer Motion
- Lazy component loading with code splitting
- Responsive images and assets
- Tailwind CSS purging for smaller bundle size

## Deployment

The project can be deployed to:
- **Vercel** (Recommended for Vite)
- **Netlify**
- **GitHub Pages**
- **Any static hosting service**

### Deployment Steps (Vercel)
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

## Future Enhancements

- API integration for form submissions
- Dark/Light theme toggle
- Blog section
- Search functionality
- Multi-language support
- SEO optimization

## License

This project is open-source and available under the MIT License.

## Support

For any questions or improvements, feel free to contribute or reach out!

---

**Created with ❤️ for developers**
