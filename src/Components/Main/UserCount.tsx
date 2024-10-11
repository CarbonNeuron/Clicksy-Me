"use client";

import { Paper, Typography } from "@mui/material";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

export default function UserCount({
  initialUserCount,
}: {
  initialUserCount: number;
}) {
  const [count, setCount] = useState<number>(initialUserCount);
  const supabase = createClient();

  useEffect(() => {
    const userStatus = {
      online_at: new Date().toISOString(),
    };
    const roomOne = supabase.channel("room_1");
    roomOne
      .on("presence", { event: "sync" }, () => {
        const newState = roomOne.presenceState();
        setCount(Object.keys(newState).length);
        console.log("sync", Object.keys(newState).length);
      })
      .on("presence", { event: "join" }, ({ key, newPresences }) => {
        setCount((prev) => prev + 1);
        console.log("join", key, newPresences);
      })
      .on("presence", { event: "leave" }, ({ key, leftPresences }) => {
        setCount((prev) => prev - 1);
        console.log("leave", key, leftPresences);
      })
      .subscribe(async (status) => {
        if (status !== "SUBSCRIBED") {
          return;
        }
        await roomOne.track(userStatus);
      });
    // add return right here!
    return () => {
      roomOne.untrack();
    };
  }, [supabase]);

  return (
    <Paper
      variant={"outlined"}
      sx={{
        p: 2,
        maxWidth: "fit-content",
        display: { xs: "none", sm: "flex" },
      }}
    >
      <Typography>
        <strong>
          {count.toLocaleString("en-US", { maximumFractionDigits: 0 })}
        </strong>{" "}
        user{count == 1 ? "" : "s"} is clicksying me
      </Typography>
    </Paper>
  );
}
