import { NextRequest, NextResponse } from 'next/server';
import { findBestMatch } from '@/lib/election-kb';

export async function POST(request: NextRequest) {
  try {
    const { message, eli10Mode } = await request.json();
    if (!message || typeof message !== 'string') {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }
    await new Promise((resolve) => setTimeout(resolve, 500 + Math.random() * 1000));
    const result = findBestMatch(message, eli10Mode || false);
    return NextResponse.json({ response: result.response, suggestions: result.suggestions });
  } catch {
    return NextResponse.json({ error: 'Failed to process message' }, { status: 500 });
  }
}
