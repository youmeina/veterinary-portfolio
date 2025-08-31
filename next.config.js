/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repo = 'veterinary-portfolio'; // ✅ 必须与仓库名完全一致

module.exports = {
  output: 'export',              // 用静态导出以部署到 GitHub Pages
  trailingSlash: true,           // 目录结尾加 /，避免 404
  images: { unoptimized: true }, // 关闭内置图片优化，便于 Pages
  ...(isProd && {
    basePath: `/${repo}`,        // 生产环境挂载到子路径 /veterinary-portfolio
    assetPrefix: `/${repo}/`,    // 静态资源前缀
  }),
};
