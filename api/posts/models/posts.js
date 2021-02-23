'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

const axios = require('axios');

module.exports = {
  afterCreate: async (result, data) => {
    await axios.post(
      'https://api.netlify.com/build_hooks/60358f36962c8215b4cd08a4'
    );
  },

  afterUpdate: async (result, params, data) => {
    await axios.post(
      'https://api.netlify.com/build_hooks/60358f36962c8215b4cd08a4'
    );
  },
};
