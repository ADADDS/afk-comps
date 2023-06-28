"use client";
import { globalStore } from "@/stores/globalStore";
import { useState, useEffect } from "react";
import LeftPanel from "../components/LeftPanel/LeftPanel";

const View = () => {
  //URL serialization and deserialization
  const { deserializeState, serializeState } = globalStore((state) => state);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const serializedState = urlParams.get("state");

    if (serializedState) {
      deserializeState(serializedState);
    }
  }, [deserializeState]);

  return (
    <div>
      <LeftPanel />
    </div>
  );
};

export default View;
