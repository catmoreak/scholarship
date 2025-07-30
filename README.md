# 🎓 Scholarship Matcher

A modern web application to help Indian students find scholarships that match their eligibility criteria.

## ✨ Features

- **Smart Filtering**: Find scholarships by class, gender, caste, state, and income
- **30+ Scholarships**: Comprehensive database of Indian government and private scholarships
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Easy to Use**: Simple form-based interface for quick scholarship discovery

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/catmoreak/scholarship.git
   cd scholarship-matcher
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

## 🛠 Tech Stack

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React 19** - UI library

## 📖 How to Use

1. Visit the homepage
2. Fill out the scholarship search form with your details:
   - Select your academic class
   - Choose your gender
   - Select caste category (if applicable)
   - Choose your state
   - Enter family income range
3. Click "Find Scholarships" to see matching results
4. Click on scholarship links to visit official application pages

## 🏗 Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── not-found.tsx      # 404 page
├── components/            # React components
│   ├── HeroSection/       # Landing section
│   ├── Navbar/            # Navigation
│   ├── ScholarshipResults/    # Results display
│   └── ScholarshipSearchForm/ # Search form
└── data/
    └── scholarships.ts    # Scholarship database
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request



## 🙏 Acknowledgments

- Thanks to all scholarship providers for making education accessible
- Built for Indian students seeking educational opportunities

---

**Made with ❤️ for students in India**
