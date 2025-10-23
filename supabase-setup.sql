-- Create table for club form submissions
CREATE TABLE IF NOT EXISTS "Klubber" (
  id SERIAL PRIMARY KEY,
  "Klub navn" TEXT NOT NULL,
  "Kontakt person" TEXT NOT NULL,
  "Email" TEXT NOT NULL,
  "Telefon" TEXT,
  "Besked" TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create table for business form submissions
CREATE TABLE IF NOT EXISTS "Virksomhed" (
  id SERIAL PRIMARY KEY,
  "Firma navn" TEXT NOT NULL,
  "Kontakt person" TEXT NOT NULL,
  "Email" TEXT NOT NULL,
  "Telefon" TEXT,
  "Besked" TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE "Klubber" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "Virksomhed" ENABLE ROW LEVEL SECURITY;

-- Create policies to allow public inserts (form submissions)
CREATE POLICY "Allow public inserts on Klubber" ON "Klubber"
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public inserts on Virksomhed" ON "Virksomhed"
  FOR INSERT WITH CHECK (true);

-- Create policies to allow public select (for testing)
CREATE POLICY "Allow public select on Klubber" ON "Klubber"
  FOR SELECT USING (true);

CREATE POLICY "Allow public select on Virksomhed" ON "Virksomhed"
  FOR SELECT USING (true);
