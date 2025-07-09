import business from '@/../public/data/business.json';
import health from '@/../public/data/health.json';
import politics from '@/../public/data/politics.json';
import science from '@/../public/data/science.json';
import sports from '@/../public/data/sports.json';
import technology from '@/../public/data/technology.json';

const allArticles = [
  ...business,
  ...health,
  ...politics,
  ...science,
  ...sports,
  ...technology,
];

export function getArticleBySlug(slug: string) {
  return allArticles.find((article) => article.slug === slug);
}

export function getAllSlugs() {
  return allArticles.map((article) => ({ slug: article.slug }));
}
