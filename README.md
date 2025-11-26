# CrazyTadka - Coming Soon Page

A modern, responsive coming soon landing page for crazytadka.com, ready for deployment on Vercel.

## Features

- 🎨 Modern gradient design with animated background
- 📱 Fully responsive (mobile, tablet, desktop)
- ✉️ Email notification signup form
- 🔗 Social media links
- ⚡ Fast and lightweight
- 🚀 Vercel deployment ready

## Tech Stack

- HTML5
- CSS3 (with animations)
- Vanilla JavaScript
- Google Fonts (Poppins)

## Project Structure

```
coming-soon/
├── index.html        # Main HTML file
├── styles.css        # Stylesheet with animations
├── vercel.json       # Vercel deployment configuration
└── README.md         # This file
```

## Local Development

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd coming-soon
   ```

2. Open `index.html` in your browser:
   ```bash
   open index.html
   ```
   
   Or use a local server:
   ```bash
   python -m http.server 8000
   # Visit http://localhost:8000
   ```

## Deploy to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow the prompts to link your project and deploy.

### Option 2: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Vercel will auto-detect settings and deploy

### Option 3: Deploy Button

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/coming-soon)

## Customization

### Update Site Content

Edit `index.html` to change:
- Site name and branding
- Tagline and description
- Social media links

### Modify Colors

Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --accent-color: #ec4899;
    --text-color: #ffffff;
    --text-secondary: #e2e8f0;
    --background: #0f172a;
    --background-secondary: #1e293b;
}
```

### Email Form Integration

The current email form uses client-side validation. To actually collect emails, integrate with:
- [Mailchimp](https://mailchimp.com)
- [ConvertKit](https://convertkit.com)
- [EmailOctopus](https://emailoctopus.com)
- A serverless function (Vercel Functions)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this for your own projects!

## Credits

Created for CrazyTadka © 2025
