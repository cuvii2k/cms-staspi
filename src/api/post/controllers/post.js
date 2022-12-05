"use strict";
/**
 * post controller
 */
const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::post.post", ({ strapi }) => ({
  getCategory: async (ctx) => {
    try {
      const entry = await strapi.db.query("api::post.post").findMany({
        select: ["id", "title", "type"],
      });
      ctx.body = { data: entry };
    } catch (err) {
      ctx.body = err;
    }
  },
}));
