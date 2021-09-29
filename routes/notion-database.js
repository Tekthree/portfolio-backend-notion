require("dotenv").config();
const { Client } = require("@notionhq/client");

const DATABASE = process.env.NOTION_DATABASE_ID;
const TOKEN = process.env.NOTION_TOKEN;

// Init client
const notion = new Client({
  auth: TOKEN,
});

module.exports = async function getDataBase() {
  const databaseId = DATABASE;
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: { property: "status", select: { equals: "publish" } },
  });
  
  return response;
};
