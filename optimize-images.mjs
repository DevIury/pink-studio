import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname } from 'path';

const PUBLIC_DIR = './public';
const ASSETS_DIR = './src/assets';
const QUALITY = 80;

async function optimizeImage(inputPath, outputPath, options = {}) {
  try {
    const ext = extname(inputPath).toLowerCase();
    const metadata = await sharp(inputPath).metadata();
    
    console.log(`Otimizando: ${inputPath} (${metadata.width}x${metadata.height})`);
    
    let pipeline = sharp(inputPath);
    
    // Resize if too large
    if (metadata.width > 1920) {
      pipeline = pipeline.resize(1920, null, { withoutEnlargement: true });
    }
    
    // Convert to WebP
    const webpPath = outputPath.replace(extname(outputPath), '.webp');
    await pipeline
      .webp({ quality: QUALITY, effort: 6 })
      .toFile(webpPath);
    
    // Convert to AVIF
    const avifPath = outputPath.replace(extname(outputPath), '.avif');
    await sharp(inputPath)
      .resize(1920, null, { withoutEnlargement: true })
      .avif({ quality: QUALITY - 10, effort: 6 })
      .toFile(avifPath);
    
    console.log(`  ✓ WebP: ${webpPath}`);
    console.log(`  ✓ AVIF: ${avifPath}`);
    
    return { webp: webpPath, avif: avifPath };
  } catch (error) {
    console.error(`  ✗ Erro: ${error.message}`);
    return null;
  }
}

async function processDirectory(dir) {
  const files = await readdir(dir);
  
  for (const file of files) {
    const filePath = join(dir, file);
    const fileStat = await stat(filePath);
    
    if (fileStat.isDirectory()) {
      await processDirectory(filePath);
    } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
      await optimizeImage(filePath, filePath);
    }
  }
}

async function main() {
  console.log('=== Otimização de Imagens ===\n');
  
  console.log('Processando public/...');
  await processDirectory(PUBLIC_DIR);
  
  console.log('\nProcessando src/assets/...');
  await processDirectory(ASSETS_DIR);
  
  console.log('\n✓ Otimização concluída!');
}

main().catch(console.error);
