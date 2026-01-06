# My Portfolio Website

A modern, minimal portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🏠 Home page with About Me section, Skills, and Experience
- 💼 Projects showcase with detailed project cards
- 📝 Blog with Markdown support
- 📧 Contact form with validation
- 🎨 Responsive design with dark mode support
- ⚡ Fast and optimized with Next.js App Router

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: Markdown (gray-matter + marked)

## Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with Navbar & Footer
│   ├── page.tsx           # Home page
│   ├── projects/          # Projects page
│   ├── blog/              # Blog pages
│   └── contact/           # Contact page
├── components/            # Reusable components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── ProjectCard.tsx
├── content/               # Content files
│   ├── projects.ts        # Projects data
│   └── blog/              # Markdown blog posts
├── lib/                   # Utility functions
│   └── blog.ts            # Blog post utilities
└── public/                # Static assets
```

## Customization

### Update Personal Information

1. **Home Page** (`app/page.tsx`):
   - Change your name, title, and bio
   - Update skills and experience

2. **Projects** (`content/projects.ts`):
   - Add your projects with title, description, technologies, and links
   - Update GitHub and live demo URLs

3. **Blog Posts** (`content/blog/`):
   - Add new `.md` files with frontmatter:
   ```markdown
   ---
   title: "Your Post Title"
   date: "2024-01-15"
   excerpt: "Brief description"
   ---
   Your content here...
   ```

4. **Footer** (`components/Footer.tsx`):
   - Update social media links

5. **Contact Page** (`app/contact/page.tsx`):
   - Update email and social links
   - Configure form submission (currently logs to console)

### Styling

The project uses Tailwind CSS with automatic dark mode support. Customize colors in:
- `tailwind.config.ts` - Theme configuration
- `app/globals.css` - Global styles and CSS variables

## Building for Production

```bash
npm run build
npm start
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy automatically

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- AWS Amplify
- Your own server with Node.js

## Adding a Contact Form Backend

The contact form currently logs to console. To make it functional:

### Option 1: Use Formspree
```typescript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});
```

### Option 2: Use Next.js API Routes
Create `app/api/contact/route.ts`:
```typescript
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  // Send email using nodemailer, SendGrid, etc.
  return NextResponse.json({ success: true });
}
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript](https://www.typescriptlang.org/docs)

## License

This project is open source and available under the MIT License.
