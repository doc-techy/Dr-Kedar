# Doctor Appointment System

A modern, responsive doctor appointment booking system built with Next.js 15 and TypeScript.

## Features

- 📅 Online appointment booking
- 📱 Responsive design for all devices
- ⚡ Fast loading with Next.js 15
- 🎨 Beautiful UI with Tailwind CSS
- 🔒 Form validation and error handling
- 📧 Appointment confirmation system

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS
- **API**: Next.js API Routes
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd doctor
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically detect the Next.js framework
4. Click "Deploy"

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/doctor)

### Manual Deployment

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel --prod
```

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── appointments/       # API endpoints
│   │   ├── book-appointment/       # Booking page
│   │   ├── globals.css            # Global styles
│   │   ├── layout.tsx             # Root layout
│   │   └── page.tsx               # Home page
│   └── components/                # Reusable components
├── public/                        # Static assets
├── next.config.ts                 # Next.js configuration
├── tailwind.config.js            # Tailwind CSS configuration
└── vercel.json                   # Vercel deployment configuration
```

## API Endpoints

- `POST /api/appointments` - Create a new appointment
- `GET /api/appointments` - Get all appointments (admin)

## Environment Variables

For production deployment, you may want to add:

- `NEXT_PUBLIC_SITE_URL` - Your site URL
- `EMAIL_SERVICE_API_KEY` - For email notifications (if added)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License. 