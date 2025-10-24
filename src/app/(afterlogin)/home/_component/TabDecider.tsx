"use client";

import { useContext } from "react";
import { TabContext } from "./TabProvider";
import PostRecommends from "../../_components/PostRecommends";
import FollowingPosts from "../../_components/FollowingPosts";

export default function TabDecider() {
  const { tab } = useContext(TabContext);
  if (tab === "reco") {
    return <PostRecommends />;
  }
  return <FollowingPosts />;
}
