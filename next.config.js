const isProd = process.env.NODE_ENV === 'production';
const repo = 'veterinary-portfolio'; // 必须与仓库名一致

module.exports = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  ...(isProd && {
    basePath: `/${repo}`,
    assetPrefix: `/${repo}/`,
  }),
};
