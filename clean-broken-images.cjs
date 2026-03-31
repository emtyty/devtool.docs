const fs = require('fs');
const path = require('path');

const badTools = [
  'cron-builder',
  'data-formatter',
  'jwt-decoder',
  'markdown-preview',
  'network-waterfall-analyzer',
  'stack-trace-formatter'
];

const docsDir = path.join(__dirname, 'src', 'content', 'docs', 'tools');
const publicDir = path.join(__dirname, 'public', 'tools');

for (const tool of badTools) {
  // 1. Delete the corrupted WebP file if it exists
  const webpPath = path.join(publicDir, `${tool}.webp`);
  if (fs.existsSync(webpPath)) {
    fs.unlinkSync(webpPath);
    console.log(`Deleted ${tool}.webp`);
  }

  // 2. Remove the markdown image reference from the MDX file
  const mdxPath = path.join(docsDir, `${tool}.mdx`);
  if (fs.existsSync(mdxPath)) {
    let content = fs.readFileSync(mdxPath, 'utf8');
    
    // The tag looks like: ![...](/tools/tool-name.webp)
    // We can use a regex to match the full line and remove it
    const regex = new RegExp(`^\\!\\[.*?\\]\\(\\/tools\\/${tool}\\.webp\\)\\s*$`, 'gm');
    
    if (regex.test(content)) {
      content = content.replace(regex, '');
      fs.writeFileSync(mdxPath, content, 'utf8');
      console.log(`Cleaned link from ${tool}.mdx`);
    }
  }
}
