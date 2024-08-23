import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
    console.log("패스!!!", path)
  try {
    const imagesDirectory = path.join(process.cwd(), 'public/images');
    console.log('이미지 디렉토리:', imagesDirectory); // 디버깅용

    const filenames = fs.readdirSync(imagesDirectory);

    const images = filenames.map((filename) => ({
      name: filename,
      path: `/images/${filename}`,
    }));

    return NextResponse.json(images);
  } catch (error) {
    console.error('Error reading images directory:', error);
    return NextResponse.json({ error: 'Failed to read images directory' }, { status: 500 });
  }
}
