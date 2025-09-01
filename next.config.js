// next.config.js

const isCI = process.env.GITHUB_ACTIONS === 'true'; // 线上 GitHub Actions 环境
const repo = 'veterinary-portfolio'; // 必须和仓库名一致

module.exports = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },

  // 让前端代码里也能知道前缀
  env: {
    NEXT_PUBLIC_BASE_PATH: isCI ? `/${repo}` : '',
  },

  ...(isCI && {
    basePath: `/${repo}`,
    assetPrefix: `/${repo}/`,
  }),
};
