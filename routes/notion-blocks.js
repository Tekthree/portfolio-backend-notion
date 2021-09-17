"use strict";

require("dotenv").config();
const { Client } = require("@notionhq/client");

const BLOCKID = process.env.NOTION_BLOCK_ID;
const TOKEN = process.env.NOTION_TOKEN;

// Init client
const notion = new Client({
  auth: TOKEN,
});

module.exports = async function getBlockChildren() {
  (async () => {
    const blockId = BLOCKID;
    const response = await notion.blocks.children.list({
      block_id: blockId,
      page_size: 50,
    });
    console.log(response);
  })();
};
