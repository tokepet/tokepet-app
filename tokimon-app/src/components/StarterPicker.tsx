import { PetView } from "./PetView";
import { PETS } from "../domain/petCatalog";
import { SHAPE_PX, WINDOW_H, WINDOW_W, type Point } from "../motion/randomTarget";

type Props = {
  onPick: (petId: string, startAt: Point) => void;
};

const SLOT_COUNT = 3;
const SLOT_W = WINDOW_W / SLOT_COUNT;
const SHAPE_Y = (WINDOW_H - SHAPE_PX) / 2;

export function StarterPicker({ onPick }: Props) {
  return (
    <>
      {Array.from({ length: SLOT_COUNT }).map((_, i) => {
        const pet = PETS[i];
        const x = i * SLOT_W + (SLOT_W - SHAPE_PX) / 2;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: x,
              top: SHAPE_Y,
              width: SHAPE_PX,
              height: SHAPE_PX,
              zIndex: 1,
            }}
          >
            {pet ? (
              <PetView
                pet={pet}
                size={SHAPE_PX}
                onClick={() => onPick(pet.id, { x, y: SHAPE_Y })}
              />
            ) : (
              <ComingSoonSlot />
            )}
          </div>
        );
      })}
    </>
  );
}

function ComingSoonSlot() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        border: "1px dashed rgba(255,255,255,0.35)",
        borderRadius: 8,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "rgba(255,255,255,0.55)",
        fontSize: 10,
        fontFamily: "system-ui, sans-serif",
        textAlign: "center",
        lineHeight: 1.2,
      }}
    >
      Coming<br />Soon
    </div>
  );
}
