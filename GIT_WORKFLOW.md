# Git Workflow - Sådan opdaterer du hjemmesiden

## 🔄 Når du laver ændringer:

### 1. Lav dine ændringer i kode
Rediger de filer du vil ændre

### 2. Commit ændringerne
```bash
git add .
git commit -m "Beskrivelse af hvad du ændrede"
```

### 3. Push til GitHub
```bash
git push
```

### 4. Vent 1-2 minutter
Vercel bygger og deployer automatisk! 🚀

## 💡 Tips:

- **Tjek status:** `git status` (se hvilke filer der er ændret)
- **Se log:** `git log` (se tidligere commits)
- **Se live deployment:** Gå til vercel.com → dit projekt → se build progress

## ⚠️ Vigtigt:

- Lav altid `git add .` og `git commit` før `git push`
- Skriv beskrivende commit messages
- Tjek localhost:8080 før du pusher (for at sikre det virker)

## 📱 Se din live hjemmeside:

Efter deployment kan alle tilgå hjemmesiden på dit Vercel link!

