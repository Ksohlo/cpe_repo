export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
    ...(process.env.NODE_ENV === 'production' ? { 'postcss-preset-env': {} } : {}),
    ...(process.env.NODE_ENV === 'production' ? { 'postcss-flexbugs-fixes': {} } : {}),
    ...(process.env.NODE_ENV === 'production' ? { 'postcss-normalize': {} } : {}),
    ...(process.env.NODE_ENV === 'production' ? { 'postcss-custom-properties': {} } : {}),
    ...(process.env.NODE_ENV === 'production' ? { 'postcss-custom-selectors': {} } : {}),
    ...(process.env.NODE_ENV === 'production' ? { 'postcss-custom-media': {} } : {}),
  },
}
