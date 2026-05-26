import { useState } from "react";
import { StarterPicker } from "../components/StarterPicker";
import { Wanderer } from "../components/Wanderer";
import type { Point } from "../motion/randomTarget";

type AppState =
  | { phase: "selection" }
  | { phase: "wandering"; petId: string; startAt: Point };

export function App() {
  const [state, setState] = useState<AppState>({ phase: "selection" });

  return (
    <>
      <div
        data-tauri-drag-region
        style={{ position: "absolute", inset: 0, zIndex: 0 }}
      />
      {state.phase === "selection" ? (
        <StarterPicker
          onPick={(petId, startAt) =>
            setState({ phase: "wandering", petId, startAt })
          }
        />
      ) : (
        <Wanderer petId={state.petId} startAt={state.startAt} />
      )}
    </>
  );
}
