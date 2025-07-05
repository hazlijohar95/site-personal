
-- Create a profiles table for your personal information
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL DEFAULT 'Hazli Johar',
  tagline TEXT NOT NULL DEFAULT 'Accountant turned founder. Building the future of accounting.',
  location TEXT NOT NULL DEFAULT 'Kuala Lumpur',
  title TEXT NOT NULL DEFAULT 'Entrepreneur, 10+ Years',
  bio TEXT NOT NULL,
  specialties TEXT NOT NULL DEFAULT 'Financial Reporting, Company Restructuring, Design, Entrepreneurship, Bootstrapping, Sales & Marketing.',
  profile_image_url TEXT,
  email TEXT DEFAULT 'work@hazli.wtf',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create a roles table for your current positions
CREATE TABLE public.roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  company TEXT NOT NULL,
  description TEXT NOT NULL,
  is_active BOOLEAN DEFAULT true,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create a media table for your press coverage
CREATE TABLE public.media (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  source TEXT NOT NULL,
  url TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('radio', 'news', 'video')),
  is_featured BOOLEAN DEFAULT true,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create a social_links table for your social media
CREATE TABLE public.social_links (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  label TEXT NOT NULL,
  url TEXT NOT NULL,
  sort_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Insert your current profile data
INSERT INTO public.profiles (bio) VALUES (
  'I''m the Co-Founder and CEO of Cynco, an AI startup building accounting infrastructure. We''ve been recognized at the Digital Adoption Awards by The Malaysian Institute of Accountants and ranked top 3 at PACE Bootcamp by Artem Ventures.

Before Cynco, I ran a chartered accounting firm advising multinational companies and worked as a Fractional CFO across the APAC region. I''ve engaged with 500+ companies from various industries, learning their accounting challenges firsthand.

I consider myself an accountant who learned to code, design, and build products. I love creating things that solve real problems.'
);

-- Insert your current roles
INSERT INTO public.roles (title, company, description, sort_order) VALUES
('Co-Founder & CEO', 'Cynco', 'AI-native accounting infrastructure', 1),
('Entrepreneur in Residence', 'Mranti', 'Startup ecosystem development', 2),
('Partner', 'Accelzone Ventures', 'Angel investor syndicate', 3),
('Founder & Partner', 'Hazli Johar & Co.', 'Global business consulting', 4);

-- Insert your current media items
INSERT INTO public.media (title, source, url, type, sort_order) VALUES
('Cynco Raising $125k to Take on Xero and QuickBooks', 'BFM 89.9', 'https://www.bfm.my/content/podcast/cynco-raising-dollar125k-to-take-on-xero-and-quickbooks', 'radio', 1),
('MyStartup Pre-Accelerator Cohort 5 Winners', 'Business Today', 'https://www.businesstoday.com.my/2025/03/04/mystartup-pre-accelerator-cohort-5-concludes-with-five-winning-startups/', 'news', 2);

-- Insert your social links
INSERT INTO public.social_links (label, url, sort_order) VALUES
('GitHub', 'https://github.com/hazlijohar95', 1),
('Twitter', 'https://x.com/hazlijohar', 2),
('Instagram', 'https://www.instagram.com/hazlijohar/', 3),
('LinkedIn', 'https://www.linkedin.com/in/hazli-johar/', 4);

-- Enable Row Level Security (making all data publicly readable for your personal website)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.media ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.social_links ENABLE ROW LEVEL SECURITY;

-- Create policies to allow public read access (since this is your personal website)
CREATE POLICY "Allow public read access to profiles" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Allow public read access to roles" ON public.roles FOR SELECT USING (true);
CREATE POLICY "Allow public read access to media" ON public.media FOR SELECT USING (true);
CREATE POLICY "Allow public read access to social_links" ON public.social_links FOR SELECT USING (true);

-- Create trigger function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at timestamps
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON public.profiles 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_roles_updated_at BEFORE UPDATE ON public.roles 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_media_updated_at BEFORE UPDATE ON public.media 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
