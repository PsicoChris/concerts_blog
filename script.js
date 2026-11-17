const html = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const postList = document.getElementById('postList');
const featuredGrid = document.getElementById('featuredGrid');
const categoryFilter = document.getElementById('categoryFilter');
const detailSection = document.getElementById('postDetail');
const detailTitle = document.getElementById('detailTitle');
const detailBadge = document.getElementById('detailBadge');
const detailCategory = document.getElementById('detailCategory');
const detailVenue = document.getElementById('detailVenue');
const detailDate = document.getElementById('detailDate');
const detailImage = document.getElementById('detailImage');
const detailContent = document.getElementById('detailContent');
const detailBack = document.getElementById('detailBack');
const pageSections = Array.from(document.querySelectorAll('main > section:not(.section-detail)'));

const fallbackPosts = [
  {
    id: ''post-1'',
    category: ''festival'',
    title: ''How to plan the perfect summer festival weekend'',
    description: ''Stage mapping, food runs, and crowd strategy for your best festival weekend yet.'',
    date: ''June 4, 2026'',
    badge: ''Festival Guide'',
    venue: ''Sunrise Field Fest'',
    image: ''https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80'',
    content: [
      {
        type: ''paragraph'',
        text: ''Summer festivals are a marathon, not a sprint. Start by identifying the headline stages, the late-night secret sets, and the chill food zones so you can move smoothly through the day.'',
      },
      {
        type: ''heading'',
        text: ''Build your festival rhythm'',
      },
      {
        type: ''paragraph'',
        text: ''Plan two or three must-see acts for each day, then leave room for discovery. The best festival weekends are the ones where you wander between stages and find new favorites without burning out.'',
      },
      {
        type: ''paragraph'',
        text: ''Stay hydrated, charge your phone early, and pick a meeting spot for your group. When the headliner hits, you''''ll thank yourself for staying calm, comfortable, and connected.'',
      },
    ],
  },
  {
    id: ''post-3'',
    category: ''guide'',
    title: ''Top 8 venues for unforgettable indie concerts'',
    description: ''An insider''''s list of intimate venues, rooftop stages, and late-night indie showcases.'',
    date: ''May 11, 2026'',
    badge: ''Venue Guide'',
    venue: ''City Soundrooms'',
    image: ''https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=1200&q=80'',
    content: [
      {
        type: ''paragraph'',
        text: ''Indie shows shine in spaces where the audience feels close enough to touch the stage. These eight venues combine great acoustics with the kind of energy that makes a concert feel personal.'',
      },
      {
        type: ''paragraph'',
        text: ''From hidden basements to refurbished warehouses, each location on our list offers a unique character. Pack light, arrive early, and be ready to move with the crowd.'',
      },
      {
        type: ''heading'',
        text: ''What to look for in a memorable venue'',
      },
      {
        type: ''paragraph'',
        text: ''Pay attention to sound quality, sightlines, and the bar/food layout. A great venue gives you room to breathe while still keeping the show tight and immersive.'',
      },
    ],
  },
  {
    id: ''post-6'',
    category: ''festival'',
    title: ''Sunset Beats: a preview of the new open-air summer series'',
    description: ''A first look at the lineup, food market, and late-night stages planned for the new riverside festival.'',
    date: ''June 12, 2026'',
    badge: ''Festival Preview'',
    venue: ''Sunset Cove'',
    image: ''https://images.unsplash.com/photo-1518972559570-44bdd7b41924?auto=format&fit=crop&w=1200&q=80'',
    content: [
      {
        type: ''paragraph'',
        text: ''Sunset Beats is shaping up to be the biggest open-air series of the season. Expect rising acts, a neon art walk, and a lineup that stretches from indie anthems to dancefloor bangers.'',
      },
      {
        type: ''heading'',
        text: ''What to pack for an open-air summer night'',
      },
      {
        type: ''paragraph'',
        text: ''Bring a lightweight jacket for the breeze, cash for food stalls, and a portable battery pack. The venue is easy to navigate, but the best experience comes with a little planning.'',
      },
    ],
  },
  {
    id: ''post-8'',
    category: ''guide'',
    title: ''How to capture concert photos without missing the moment'',
    description: ''A practical guide for fans who want strong live shots while staying present in the show.'',
    date: ''June 2, 2026'',
    badge: ''Photo Guide'',
    venue: ''Various venues'',
    image: ''https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80'',
    content: [
      {
        type: ''paragraph'',
        text: ''A great concert photo captures the mood, not just the moves. Learn how to balance camera settings, stage lighting, and your own presence so you leave with memories instead of missed moments.'',
      },
      {
        type: ''heading'',
        text: ''Keep it simple and respectful'',
      },
      {
        type: ''paragraph'',
        text: ''Use a fast lens, avoid flash, and keep your phone at chest level. The best shots come when you stay engaged with the show and let the camera support the experience rather than replace it.'',
      },
    ],
  },
];

let posts = [];

const statusBanner = document.getElementById('statusBanner');

function showStatus(message) {
  statusBanner.textContent = message;
  statusBanner.classList.remove('hidden');
}

function hideStatus() {
  statusBanner.classList.add('hidden');
}

async function loadPosts() {
  try {
    const response = await fetch('posts.json');
    if (!response.ok) {
      throw new Error('Unable to load posts.json');
    }
    const data = await response.json();
    hideStatus();
    return data;
  } catch (error) {
    console.warn('Could not load posts.json, falling back to embedded posts. If you are opening the file locally, use a simple local server or deploy to GitHub Pages for full support.');
    showStatus('Posts could not be loaded from posts.json locally. Showing fallback test posts instead. Use a local server or deploy to GitHub Pages to load the full post file.');
    return fallbackPosts;
  }
}

function createPostCard(post) {
  const card = document.createElement('article');
  card.className = 'post-card';
  card.id = post.id;

  const thumb = document.createElement('div');
  thumb.className = 'post-thumb';
  thumb.style.backgroundImage = `url(''${post.image}'')`;

  const header = document.createElement('header');
  const title = document.createElement('h3');
  title.textContent = post.title;

  const meta = document.createElement('div');
  meta.className = 'post-meta';

  const badge = document.createElement('span');
  badge.className = 'post-badge';
  badge.textContent = post.badge;

  const date = document.createElement('span');
  date.className = 'post-date';
  date.textContent = post.date;

  meta.appendChild(badge);
  meta.appendChild(date);
  header.appendChild(title);
  header.appendChild(meta);

  const summary = document.createElement('p');
  summary.className = 'post-summary';
  summary.textContent = post.description;

  const link = document.createElement('a');
  link.className = 'read-link';
  link.href = `#${post.id}`;
  link.textContent = 'Read more';

  card.appendChild(thumb);
  card.appendChild(header);
  card.appendChild(summary);
  card.appendChild(link);

  return card;
}

function createFeaturedCard(post) {
  const card = document.createElement('article');
  card.className = 'featured-card';
  card.id = `featured-${post.id}`;

  const link = document.createElement('a');
  link.href = `#${post.id}`;

  const image = document.createElement('div');
  image.className = 'featured-image';
  image.style.backgroundImage = `url(''${post.image}'')`;

  const overlay = document.createElement('div');
  overlay.className = 'featured-overlay';

  const badge = document.createElement('span');
  badge.className = 'featured-badge';
  badge.textContent = post.badge;

  const title = document.createElement('h3');
  title.className = 'featured-title';
  title.textContent = post.title;

  overlay.appendChild(badge);
  overlay.appendChild(title);
  link.appendChild(image);
  link.appendChild(overlay);
  card.appendChild(link);

  return card;
}

function renderFeatured() {
  featuredGrid.innerHTML = '';
  const featured = posts.slice(0, 3);
  featured.forEach(post => {
    featuredGrid.appendChild(createFeaturedCard(post));
  });
}

function renderPosts(filter = ''all'') {
  postList.innerHTML = '';
  let filtered = posts;

  if (filter !== ''all'') {
    filtered = posts.filter(post => post.category === filter);
  }

  filtered.forEach(post => {
    postList.appendChild(createPostCard(post));
  });
}

function renderDetail(post) {
  detailTitle.textContent = post.title;
  detailBadge.textContent = post.badge;
  detailVenue.textContent = post.venue;
  detailDate.textContent = post.date;
  detailImage.style.backgroundImage = `url(''${post.image}'')`;

  detailContent.innerHTML = '''';
  post.content.forEach(block => {
    if (block.type === ''heading'') {
      const heading = document.createElement('h3');
      heading.textContent = block.text;
      detailContent.appendChild(heading);
    } else if (block.type === ''paragraph'') {
      const paragraph = document.createElement('p');
      paragraph.textContent = block.text;
      detailContent.appendChild(paragraph);
    }
  });
}

function handleHash() {
  const hash = window.location.hash.slice(1);

  if (hash === ''featured'' || hash === ''') {
    detailSection.classList.add(''hidden'');
    pageSections.forEach(section => section.classList.remove(''hidden''));
    return;
  }

  const post = posts.find(p => p.id === hash);
  if (post) {
    renderDetail(post);
    detailSection.classList.remove(''hidden'');
    pageSections.forEach(section => section.classList.add(''hidden''));
  }
}

function initializeTheme() {
  const savedTheme = localStorage.getItem(''theme'') || ''dark'';
  html.setAttribute(''data-theme'', savedTheme);
  updateThemeIcon(savedTheme);
}

function updateThemeIcon(theme) {
  themeToggle.textContent = theme === ''dark'' ? ''☀️'' : ''🌙'';
}

function initialize() {
  initializeTheme();

  loadPosts().then(data => {
    posts = data;
    renderFeatured();
    renderPosts();
    handleHash();
  });
}

themeToggle.addEventListener(''click'', () => {
  const currentTheme = html.getAttribute(''data-theme'');
  const newTheme = currentTheme === ''dark'' ? ''light'' : ''dark'';
  html.setAttribute(''data-theme'', newTheme);
  localStorage.setItem(''theme'', newTheme);
  updateThemeIcon(newTheme);
});

categoryFilter.addEventListener(''change'', (e) => {
  renderPosts(e.target.value);
});

detailBack.addEventListener(''click'', () => {
  window.location.hash = ''featured'';
});

window.addEventListener(''hashchange'', handleHash);

document.addEventListener(''DOMContentLoaded'', initialize);
