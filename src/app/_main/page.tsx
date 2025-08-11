import Notion from "@/components/Notion";
import { NotionAPI } from "notion-client";
import "react-notion-x/src/styles.css";

export default async function NotionPage() {
  const notion = new NotionAPI();
  const recoredMap = await notion.getPage("247f7e819c93809db8aded1c1942022d");
  return <Notion recoredMap={recoredMap} />;
}
