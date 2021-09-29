"use strict";

require("dotenv").config();
const { Client } = require("@notionhq/client");

const PAGEID = process.env.NOTION_PAGE_ID;
const TOKEN = process.env.NOTION_TOKEN;

// Init client
const notion = new Client({
  auth: TOKEN,
});

module.exports = async function getMainPage() {
  const pageId = PAGEID;
  const response = await notion.pages.retrieve({ page_id: pageId });
  console.log(response);

  return response;
};
