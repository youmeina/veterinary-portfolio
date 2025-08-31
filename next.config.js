/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repo = 'youmeina-portfolio'; // 仓库名与 GitHub 完全一致

module.exports = {
  output: 'export',                  // 使用静态导出
  trailingSlash: true,               // 目录形式，避免 404
  images: { unoptimized: true },     // 关闭图片优化以兼容 GH Pages
  ...(isProd && {
    basePath: `/${repo}`,            // 生产环境挂载到子路径
    assetPrefix: `/${repo}/`,        // 静态资源前缀
  }),
};
