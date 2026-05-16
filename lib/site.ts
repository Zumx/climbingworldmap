// Single source of per-site variation. The three world-map sites
// (climbing / sailing / fishing) share identical components and only
// differ in this file, the colour tokens in globals.css, and
// public/data/points.geojson.

export interface SiteConfig {
  key: string
  name: string
  shortName: string
  emoji: string
  url: string
  tagline: string
  heroKicker: string
  heroTitleA: string
  heroTitleEm: string
  heroSub: (count: string, countries: string) => string
  metaTitle: string
  metaDescription: string
  mapTitle: string
  mapDescription: string
  itemSingular: string
  itemPlural: string
  dataCredit: string
  dataCreditUrl: string
  /** Leaflet marker / cluster colours (JS strings — CSS vars can't reach Leaflet). */
  marker: { dot: string; ring: string; cluster1: string; cluster2: string; cluster3: string; pulse: string }
}

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'https://climbingworldmap.vercel.app')

export const site: SiteConfig = {
  key: 'climbing',
  name: 'Climbing World Map',
  shortName: 'Climbing World Map',
  emoji: '🧗',
  url: SITE_URL,
  tagline: 'Every climbing spot on Earth, on one map',
  heroKicker: 'The climbing world, mapped',
  heroTitleA: 'Every crag, every wall,',
  heroTitleEm: 'one map.',
  heroSub: (count, countries) =>
    `Browse ${count} climbing spots across ${countries} countries — from granite big walls to roadside boulders and indoor gyms. Pan the globe, search a crag, see what's there at a glance.`,
  metaTitle: 'Climbing World Map — Interactive Map of Climbing Spots Worldwide',
  metaDescription:
    'Explore every climbing spot on Earth on one interactive map. Search crags, boulders and gyms, and discover where the rock is.',
  mapTitle: 'Interactive Climbing Map — Every Climbing Spot Worldwide | Climbing World Map',
  mapDescription:
    'Pan and zoom a world map of climbing spots. Click any crag for its discipline, rock type and website.',
  itemSingular: 'climbing spot',
  itemPlural: 'climbing spots',
  dataCredit: 'OpenStreetMap contributors',
  dataCreditUrl: 'https://www.openstreetmap.org/copyright',
  marker: {
    dot: '#e8742c',
    ring: '#fff4ea',
    cluster1: 'rgba(232,116,44,0.85)',
    cluster2: 'rgba(199,86,28,0.92)',
    cluster3: 'rgba(120,58,28,0.93)',
    pulse: '#e8742c',
  },
}
