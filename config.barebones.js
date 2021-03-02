/**
 * Export configuration that is used in gulpfile
 *
 * For scripts and styles, each file will be a separate bundle
 *
 * @param base - Base configuration
 * @param scripts - Array of script files to create bundles from
 */
export default {
  /**
   * Base
   */
  base: {
    src: './src',
    public: './dist',
    res: './res',
  },

  /**
   * Scripts
   *
   * Add path continuing after 'config.src'
   */
  scripts: ['app.js'],

  /**
   * Additional styles
   *
   * For external stylesheets most likely outside of assets folder
   */
  styles: [
    // './example.scss', - in the root barebones folder
  ],
};
