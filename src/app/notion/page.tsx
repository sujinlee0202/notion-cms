import NotionPopup from "@/components/NotionPopup";
import { NotionAPI } from "notion-client";

export default async function NotionPage() {
  const notion = new NotionAPI();
  const recoredMap = await notion.getPage("247f7e819c93809db8aded1c1942022d");
  return <NotionPopup recordMap={recoredMap} />;
}
