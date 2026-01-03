import { NextResponse } from 'next/server';
import { blogService } from '@/lib/blog-service';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const locale = searchParams.get('locale') || 'fr';

  try {
    const articles = await blogService.getAllArticles(locale);
    return NextResponse.json(articles);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch articles' }, { status: 500 });
  }
}
