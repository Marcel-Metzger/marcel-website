# Dev Portfolio 🚀

Eine moderne, responsive Portfolio-Website für Entwickler, gehostet über GitHub Pages.

## Features

- ✨ Modernes, schlichtes Design mit einzigartigem Look
- 🌙 Dark/Light Theme Toggle
- 📱 Vollständig responsive (Mobile-First)
- ⚡ Schnell & performant (reines HTML/CSS/JS - keine Frameworks)
- 🔒 HTTPS über GitHub Pages
- 🎯 SEO-optimiert
- ♿ Barrierefreiheit beachtet

## Schnellstart

### 1. Repository erstellen

1. Erstelle ein neues Repository auf GitHub mit dem Namen `username.github.io`  
   (ersetze `username` mit deinem GitHub-Benutzernamen)

2. Oder erstelle ein beliebiges Repository und aktiviere GitHub Pages in den Einstellungen

### 2. Dateien hochladen

```bash
# Im Terminal zum Projektordner navigieren
cd /Users/mercimac/Library/Mobile\ Documents/com~apple~CloudDocs/dev-portfolio

# Git initialisieren
git init

# Alle Dateien hinzufügen
git add .

# Ersten Commit erstellen
git commit -m "Initial commit: Portfolio Website"

# Remote Repository hinzufügen (ersetze mit deiner URL)
git remote add origin https://github.com/DEIN-USERNAME/DEIN-REPO.git

# Hochladen
git branch -M main
git push -u origin main
```

### 3. GitHub Pages aktivieren

1. Gehe zu **Settings** → **Pages**
2. Unter "Source" wähle **main** branch
3. Klicke auf **Save**
4. Warte einige Minuten - deine Seite ist dann live!

## Custom Domain (IONOS) einrichten

### DNS-Einstellungen bei IONOS

Füge folgende DNS-Records hinzu:

| Typ | Host | Ziel |
|-----|------|------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | DEIN-USERNAME.github.io |

### CNAME-Datei anpassen

Bearbeite die `CNAME`-Datei und ersetze `www.deinedomain.de` mit deiner Domain:

```
www.deinedomain.de
```

### HTTPS aktivieren

Nach dem Einrichten der Domain:
1. Gehe zu **Settings** → **Pages**
2. Aktiviere **Enforce HTTPS**

> ⚠️ HTTPS kann bis zu 24 Stunden dauern, um aktiv zu werden.

## Personalisierung

### Inhalte anpassen

Öffne `index.html` und ersetze:

- `Dein Name` → Dein echter Name
- `deine@email.de` → Deine E-Mail
- `DEIN-USERNAME` → Dein GitHub Username
- `DEIN-PROFIL` → Dein LinkedIn Profil
- Erfahrungen, Projekte und Skills entsprechend deiner Laufbahn

### Profilbild hinzufügen

1. Speichere dein Bild als `profile.jpg` im Ordner
2. Ersetze in `index.html` den Platzhalter:

```html
<div class="image-placeholder">
    <img src="profile.jpg" alt="Dein Name">
</div>
```

### Farben anpassen

In `style.css` findest du die CSS-Variablen am Anfang:

```css
:root {
    --color-accent: #6366f1;        /* Hauptakzentfarbe */
    --color-accent-secondary: #8b5cf6;  /* Sekundäre Akzentfarbe */
}
```

## Dateistruktur

```
dev-portfolio/
├── index.html      # Hauptseite
├── style.css       # Alle Styles
├── script.js       # Interaktivität
├── CNAME           # Custom Domain Konfiguration
├── .nojekyll       # Deaktiviert Jekyll-Processing
└── README.md       # Diese Datei
```

## Browser-Support

- Chrome (letzte 2 Versionen)
- Firefox (letzte 2 Versionen)
- Safari (letzte 2 Versionen)
- Edge (letzte 2 Versionen)

## Lokale Entwicklung

Du kannst die Seite lokal testen mit:

```bash
# Mit Python 3
python -m http.server 8000

# Oder mit Node.js (npx)
npx serve
```

Dann öffne http://localhost:8000 im Browser.

## Lizenz

Frei zur persönlichen Nutzung. Erstellt mit ❤️

---

**Viel Erfolg mit deinem Portfolio!** 🎉
