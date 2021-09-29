require("dotenv").config();
const { Client } = require("@notionhq/client");

const DATABASE = process.env.NOTION_DATABASE_ID;
const TOKEN = process.env.NOTION_TOKEN;

// Init client
const notion = new Client({
  auth: TOKEN,
});

module.exports = async function getDataBase() {
  const payload = {
    path: `databases/${DATABASE}/query`,
    method: "POST",
  };
  
  const { results } = await notion.request(payload);

  return results;
};
