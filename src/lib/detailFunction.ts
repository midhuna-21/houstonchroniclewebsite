import { articles,Article } from '@/data/detailData';

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((item) => item.slug === slug);
}