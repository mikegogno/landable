# Landed.io - AI-Powered Resume Builder

Land the interview. Every time. AI-powered resume and cover letter personalization platform that gets you past ATS systems and into the hands of hiring managers.

## 🚀 Features

- **AI-Powered Optimization**: Generate ATS-optimized resume bullets and cover letters using GPT-4o
- **Job-Specific Tailoring**: Paste job descriptions for personalized content
- **Multiple Export Formats**: PDF, DOCX, and clipboard export
- **Real-time Preview**: See your resume as you build it
- **Smart Templates**: Professional, ATS-friendly designs
- **Usage Analytics**: Track your application success

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **UI Components**: ShadCN UI + Tailwind CSS
- **Backend**: Supabase (Auth, Database, Storage)
- **AI Integration**: OpenAI GPT-4o
- **Payments**: LemonSqueezy
- **State Management**: Zustand + React Query
- **Export Generation**: jsPDF + html2canvas

## 🏗️ Architecture

### Frontend Structure
```
src/
├── components/
│   ├── ui/                 # ShadCN UI components
│   └── layout/            # Header, Sidebar components
├── lib/
│   ├── supabase.ts        # Database client & types
│   ├── auth.ts            # Authentication hooks
│   ├── ai.ts              # OpenAI integration
│   ├── export.ts          # PDF/DOCX generation
│   └── usage.ts           # Usage tracking
├── pages/
│   ├── Landing.tsx        # Marketing homepage
│   ├── Auth.tsx           # Magic link authentication
│   ├── Dashboard.tsx      # User dashboard
│   ├── ResumeBuilder.tsx  # Resume creation interface
│   ├── CoverLetterGenerator.tsx  # Cover letter AI generator
│   ├── Settings.tsx       # Account management
│   └── Pricing.tsx        # Subscription plans
├── stores/
│   ├── auth.ts            # Authentication state
│   └── resume.ts          # Resume editing state
└── App.tsx                # Main application router
```

### Backend Services
- **Supabase Auth**: Magic link authentication
- **Supabase Database**: User profiles, resumes, cover letters
- **Supabase Storage**: File uploads and exports
- **Edge Functions**: AI API integration and webhooks

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ and pnpm
- Supabase project
- OpenAI API key
- LemonSqueezy account (for payments)

### Installation

1. **Clone and install dependencies**
   ```bash
   cd /workspace/landed-io
   pnpm install
   ```

2. **Environment setup**
   ```bash
   cp .env.example .env.local
   ```
   
   Update the environment variables:
   ```env
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key
   OPENAI_API_KEY=your-openai-key
   LEMON_SQUEEZY_API_KEY=your-lemon-squeezy-key
   ```

3. **Database setup**
   
   Create the following tables in Supabase:
   
   ```sql
   -- Users table (extends auth.users)
   CREATE TABLE users (
     id UUID REFERENCES auth.users NOT NULL PRIMARY KEY,
     email TEXT UNIQUE NOT NULL,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
     updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
     subscription_status TEXT DEFAULT 'free' CHECK (subscription_status IN ('free', 'paid', 'cancelled', 'past_due')),
     subscription_tier TEXT CHECK (subscription_tier IN ('monthly', 'yearly')),
     subscription_end_date TIMESTAMP WITH TIME ZONE,
     ai_credits_used INTEGER DEFAULT 0,
     exports_used INTEGER DEFAULT 0,
     profile_data JSONB
   );

   -- Resumes table
   CREATE TABLE resumes (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     user_id UUID REFERENCES users(id) NOT NULL,
     title TEXT NOT NULL,
     content JSONB NOT NULL,
     template_id TEXT DEFAULT 'default',
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
     updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
     is_active BOOLEAN DEFAULT true
   );

   -- Cover letters table
   CREATE TABLE cover_letters (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     user_id UUID REFERENCES users(id) NOT NULL,
     job_title TEXT NOT NULL,
     company_name TEXT NOT NULL,
     content TEXT NOT NULL,
     tone TEXT DEFAULT 'formal' CHECK (tone IN ('formal', 'casual', 'confident')),
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
     updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );

   -- Usage tracking table
   CREATE TABLE usage_tracking (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     user_id UUID REFERENCES users(id) NOT NULL,
     action_type TEXT NOT NULL CHECK (action_type IN ('ai_generation', 'export', 'resume_create')),
     timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
     metadata JSONB
   );

   -- Enable Row Level Security
   ALTER TABLE users ENABLE ROW LEVEL SECURITY;
   ALTER TABLE resumes ENABLE ROW LEVEL SECURITY;
   ALTER TABLE cover_letters ENABLE ROW LEVEL SECURITY;
   ALTER TABLE usage_tracking ENABLE ROW LEVEL SECURITY;

   -- RLS Policies
   CREATE POLICY "Users can view own data" ON users FOR ALL USING (auth.uid() = id);
   CREATE POLICY "Users can manage own resumes" ON resumes FOR ALL USING (auth.uid() = user_id);
   CREATE POLICY "Users can manage own cover letters" ON cover_letters FOR ALL USING (auth.uid() = user_id);
   CREATE POLICY "Users can view own usage" ON usage_tracking FOR SELECT USING (auth.uid() = user_id);
   ```

4. **Start development server**
   ```bash
   pnpm run dev
   ```

## 📈 Business Model

### Pricing Strategy
- **Free Tier**: 1 export + 2 AI generations
- **Pro Tier**: $12.99/month or $99/year
  - Unlimited AI generations
  - Unlimited exports
  - Premium templates
  - Priority support

### Target Metrics
- Launch MVP in < 21 days
- $1,000 MRR within 60 days
- 15% free-to-paid conversion rate
- >90% CSAT
- Resume generation < 30 seconds

## 🔧 Development Commands

```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Type checking
pnpm run build

# Lint code
pnpm run lint

# Preview production build
pnpm run preview
```

## 🚀 Deployment

### Frontend (Vercel)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Backend (Supabase)
1. Database migrations run automatically
2. Edge Functions deployed via Supabase CLI
3. Row Level Security policies enforced

## 🔒 Security Features

- Magic link authentication (no passwords)
- Row Level Security on all database tables
- CSRF protection on all forms
- Rate limiting on AI API calls
- Webhook signature verification
- Input validation and sanitization

## 📊 Analytics & Monitoring

- User journey tracking (landing → signup → conversion)
- Feature usage analytics
- AI generation performance metrics
- Export success rates
- Conversion funnel analysis

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📜 License

This project is proprietary software. All rights reserved.

## 🆘 Support

- Email: support@landed.io
- Documentation: https://docs.landed.io
- Status Page: https://status.landed.io

---

Built with ❤️ for job seekers everywhere. Land your dream job with Landed.io!