"use client";

import { NotionRenderer } from "react-notion-x";

function Notion({ recoredMap }: { recoredMap: any }) {
  return <NotionRenderer recordMap={recoredMap} fullPage />;
}

export default Notion;
