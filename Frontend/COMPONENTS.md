# 📚 Components & Pages Documentation

## Components Overview

### Reusable Components (`src/components/`)

#### 1. **Button.jsx**
- Animated button with hover effects
- Variants: `primary`, `secondary`, `outline`
- Sizes: `sm`, `md`, `lg`
- Features: Scale animation on hover/tap
```jsx
<Button variant="primary" size="lg">
  View Projects
</Button>
```

#### 2. **Card.jsx**
- Glassmorphic card with blur effect
- Optional hover animation (lift up)
- Border and glow effects
```jsx
<Card hover={true}>
  <h3>Card Content</h3>
</Card>
```

#### 3. **Badge.jsx**
- Tech stack indicator badges
- Variants: `default`, `secondary`, `success`
- Scale on hover
```jsx
<Badge variant="default">React</Badge>
```

#### 4. **SectionTitle.jsx**
- Consistent section headers
- Gradient text styling
- Animated underline
- Optional subtitle
```jsx
<SectionTitle 
  title="My Work"
  subtitle="Featured Projects"
  alignment="center"
/>
```

#### 5. **SkillBar.jsx**
- Animated progress bar for skills
- Displays percentage
- Optional icon
- Staggered animation on scroll
```jsx
<SkillBar 
  name="React"
  percentage={95}
  icon={CodeIcon}
/>
```

#### 6. **StatCard.jsx**
- Display statistics with icons
- Large number and label
- Optional trend indicator
- Hover animation
```jsx
<StatCard 
  label="Projects"
  value="25+"
  icon={ProjectIcon}
  trend={{ positive: true, value: '5 new' }}
/>
```

---

## Layout Components (`src/layout/`)

### 1. **Navbar.jsx**
- Fixed navigation bar at top
- Responsive hamburger menu on mobile
- Active link highlighting
- Social and menu links
- Features:
  - Logo with gradient effect
  - Desktop nav links
  - Mobile menu toggle
  - Smooth transitions

### 2. **Sidebar.jsx**
- Fixed left sidebar for inner pages
- Collapsible with icon-only mode
- Keyboard-friendly navigation
- Animated transitions
- Features:
  - Navigation items with icons
  - Active link indicator
  - Tooltips on hover
  - Mobile drawer overlay
  - Smooth collapse/expand animation

---

## Page Components (`src/pages/`)

### 1. **Home.jsx** (Landing Page)
**No Sidebar** - Full width layout

**Sections:**
- Hero Section
  - Animated background gradient
  - Name and role heading
  - Description and CTA buttons
  - Social media links
  - Scroll indicator
  
- Stats Section
  - Projects completed
  - GitHub repositories
  - LeetCode problems
  - Years of experience
  
- Featured Work
  - Top 2 project cards
  - Tech stack badges
  - View project buttons
  
- Skills Preview
  - Key technologies grid
  - All skills preview
  
- CTA Section
  - Call-to-action card
  - Contact button

### 2. **About.jsx** (With Sidebar)
**With Left Sidebar**

**Sections:**
- Introduction Card
  - Detailed bio
  - Profile image placeholder
  
- Quick Facts
  - Location
  - Email
  - Experience
  - Current status
  
- Journey Timeline
  - Timeline visualization
  - 4 major milestones
  - Icons and dates
  - Highlighted content

### 3. **Projects.jsx** (With Sidebar)
**With Left Sidebar & Filter Buttons**

**Features:**
- Filter buttons (All, React, Node, Full Stack)
- Responsive grid layout
- Project cards with:
  - Image placeholder
  - Title and description
  - Tech stack badges
  - Live and Code buttons
- 6 demo projects

### 4. **Skills.jsx** (With Sidebar)
**With Left Sidebar & Categories**

**Features:**
- 4 skill categories:
  - Frontend (React, TypeScript, Tailwind, etc.)
  - Backend (Node.js, Express, GraphQL, etc.)
  - Database (MongoDB, PostgreSQL, Redis, etc.)
  - Tools & DevOps (Git, Docker, AWS, etc.)
- Animated progress bars
- Tech stack summary section

### 5. **Education.jsx** (With Sidebar)
**With Left Sidebar & Timeline**

**Features:**
- Education timeline
  - B.Tech (2016-2020)
  - Higher Secondary (2014-2016)
- Details for each education:
  - Year/Duration
  - Degree and Institution
  - GPA/Percentage
  - Highlights list
  
- Certifications section
  - Certification grid
  - Issue and expiry dates
  - Credential IDs

### 6. **Certificates.jsx** (With Sidebar)
**With Left Sidebar & Grid**

**Features:**
- 8 sample certificates displayed in grid
- Certificate card with:
  - Certificate icon/preview
  - Title and issuer
  - Issue date and expiry
  - Credential ID
  - Skills tags
  - View and Download buttons
  
- Stats section showing:
  - Total certificates
  - Active certifications
  - Total learning hours

### 7. **Contact.jsx** (With Sidebar)
**With Left Sidebar & Form**

**Features:**
- Contact information sidebar:
  - Email with link
  - Phone with link
  - Location
  - Social media icons
  
- Contact form with fields:
  - Name
  - Email
  - Subject
  - Message
  - Submit button with validation
  
- Success message animation
- Alternative contact options

---

## Layout Structure

### Home Page Layout
```
┌─────────────────────────────┐
│         Navbar              │
├─────────────────────────────┤
│     (Full Width Content)    │
│         Home Page           │
│   (Hero, Stats, Projects)   │
│                             │
│            ...              │
└─────────────────────────────┘
```

### Inner Pages Layout
```
┌─────────────────────────────┐
│         Navbar              │
├──────┬──────────────────────┤
│      │                      │
│Side  │   (Main Content)    │
│bar   │   With Sidebar      │
│      │   Pages:            │
│      │   - About           │
│      │   - Projects        │
│      │   - Skills, etc.    │
│      │                     │
│      │        ...          │
└──────┴──────────────────────┘
```

---

## Color Usage

### Primary Colors
- `#0A192F` - Background (Dark Blue)
- `#D4AF37` - Accent (Gold)
- `#C0C0C0` - Secondary (Silver)

### Component Color Mapping
- **Buttons**: Gradient (Accent → Secondary)
- **Hover Effects**: Gold glow
- **Text**: Gray gradients to white
- **Borders**: Accent with low opacity

---

## Animation Details

### Global Animations
- **fade-in**: 0.6s opacity transition
- **slide-up**: 0.6s slide from bottom
- **float**: 3s continuous float effect
- **glow-pulse**: 2s glowing pulse

### Framer Motion Animations
- **whileHover**: Scale transforms on cards
- **whileTap**: Button tap animations
- **initial/animate**: Page transitions
- **staggerChildren**: Staggered item animations
- **layoutId**: Smooth transitions

---

## Responsive Breakpoints

```
Mobile:  < 768px   (sm)
Tablet:  768px     (md)
Desktop: 1024px    (lg)
```

### Mobile Features
- Stack all layouts vertically
- Hamburger menu for navigation
- Full-width cards and content
- Single column grids

### Desktop Features
- Left sidebar (80px or 280px)
- Multi-column grids
- Wide spacing and padding
- Optimized for large screens

---

## State Management

### Home Page
- No state (static content)

### Projects Page
- `activeFilter` - Currently selected filter
- Filtered projects display

### Contact Page
- `formData` - Form field values
- `isSubmitted` - Success message state

---

## Routing Structure

```
/               → Home (no sidebar)
/about          → About (with sidebar)
/projects       → Projects (with sidebar)
/skills         → Skills (with sidebar)
/education      → Education (with sidebar)
/certificates   → Certificates (with sidebar)
/contact        → Contact (with sidebar)
```

---

## Best Practices Used

✅ **Component Composition**: Reusable, modular components
✅ **Mobile First**: Responsive design starts with mobile
✅ **Performance**: Optimized animations and lazy loading
✅ **Accessibility**: Semantic HTML, proper ARIA labels
✅ **Clean Code**: Organized folder structure, meaningful names
✅ **Animations**: Smooth, subtle, not overwhelming
✅ **Colors**: Consistent palette with good contrast
✅ **Typography**: Clear hierarchy with fonts

---

## Future Enhancement Ideas

- 📝 Blog section with search
- 🌙 Dark/Light theme toggle
- 🎮 Interactive project showcase
- 📊 Analytics dashboard
- 🔍 SEO optimization
- 🌐 Multi-language support
- 📧 Email form backend integration
- 💾 Blog content from CMS

