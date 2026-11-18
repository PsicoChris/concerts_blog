# Concert Pulse 🎸

A lightweight, high-performance Jamstack concert review blog powered by **Astro**. Built for zero maintenance: no logins, no backend servers, and no databases.

---

## ⚡ How to Publish a New Concert Review

Publishing takes three steps without touching any code or templates:

1. **Add your photo**:
   Drop your concert photo into the `img/` folder (e.g. `img/arctic-monkeys.jpg`).

2. **Add the review to `posts.json`**:
   Add a new entry to the array in `posts.json`:
   ```json
   {
     "slug": "arctic-monkeys-madison-square-garden",
     "title": "Arctic Monkeys Live at MSG",
     "category": "review",
     "badge": "Tour Review",
     "venue": "Madison Square Garden, NYC",
     "date": "October 14, 2026",
     "image": "/img/arctic-monkeys.jpg",
     "description": "A razor-sharp setlist spanning two decades of indie anthems.",
     "content": [
       "From the opening riff to the four-song encore, the energy never dipped.",
       "Alex Turner led the crowd through electrifying renditions of classic hits."
     ]
   }
   ```

3. **Commit & Push to GitHub**:
   ```bash
   git add .
   git commit -m "Add Arctic Monkeys concert review"
   git push
   ```
   GitHub Actions will automatically build the site and deploy the updated static pages in ~15 seconds!

---

## 💻 Local Development

To run or preview the blog on your machine:

```bash
# Start local dev server (available at http://localhost:4321)
npm run dev

# Test the static production build
npm run build

# Preview the production build locally
npm run preview
```

---

## 🚀 GitHub Pages Deployment Setup

1. In your GitHub repository, navigate to **Settings** > **Pages**.
2. Under **Build and deployment** > **Source**, select **GitHub Actions**.
3. Push to `main`. The included workflow (`.github/workflows/deploy.yml`) will build and deploy the blog automatically on every push.
