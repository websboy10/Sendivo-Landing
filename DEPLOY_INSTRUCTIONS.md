# Deploy Instructions

## Upload til GitHub

Hvis du oprettede et nyt GitHub repository, kør:

```bash
git remote add origin https://github.com/DIT_BRUGERNAVN/sendivo-landing.git
git branch -M main
git push -u origin main
```

Eller hvis du vil bruge det eksisterende Lovable repository, få GitHub URL'en fra Lovable og kør:

```bash
git remote add origin [DIN_GITHUB_URL]
git branch -M main
git push -u origin main
```

## Deploy til Vercel (anbefalet)

1. Gå til [vercel.com](https://vercel.com) og opret gratis konto
2. Klik "Add New Project"
3. Import dit GitHub repository
4. Tilføj Environment Variables:
   - `VITE_SUPABASE_URL` = `https://vcdnujugzdahzvwlhckl.supabase.co`
   - `VITE_SUPABASE_ANON_KEY` = [din anon key fra .env filen]
5. Klik "Deploy"
6. Færdig! Du får et link som: `https://sendivo.vercel.app`

## Eller deploy via Lovable

1. Gå til https://lovable.dev/projects/846e1cbe-0f92-4678-95f1-b7ffd98358e6
2. Klik "Share" → "Publish"
3. Du får et offentligt link

## Supabase RLS Policies

Husk at tilføje disse policies i Supabase hvis du ikke har gjort det:

```sql
-- For "Klubber" tabel
CREATE POLICY "Allow public inserts on Klubber" ON "Klubber"
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public select on Klubber" ON "Klubber"
  FOR SELECT USING (true);

-- For "Virksomhed" tabel  
CREATE POLICY "Allow public inserts on Virksomhed" ON "Virksomhed"
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public select on Virksomhed" ON "Virksomhed"
  FOR SELECT USING (true);
```

