'use strict';

/**
 * recruit service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::recruit.recruit');
