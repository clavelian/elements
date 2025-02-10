import { elements } from "@/data/elements";
import { ElementCard } from "@/components/element-card";

export function PeriodicTable() {
  return (
    <div className="overflow-x-auto">
      <div className="grid grid-cols-18 gap-1 w-max">
        {elements.map((element) => (
          <div
            key={element.atomicNumber}
            style={{
              gridColumn: getGridColumn(element.atomicNumber),
              gridRow: getGridRow(element.atomicNumber),
            }}
          >
            <ElementCard element={element} />
          </div>
        ))}
      </div>
    </div>
  );
}

function getGridColumn(atomicNumber: number): number {
  // This is a simplified version. You'll need to adjust this for a complete periodic table.
  if (atomicNumber <= 2) return atomicNumber;
  if (atomicNumber <= 18) return atomicNumber - 2;
  if (atomicNumber <= 54) return (atomicNumber - 18) % 18 || 18;
  return 1; // Default, you'll need to expand this for a full table
}

function getGridRow(atomicNumber: number): number {
  if (atomicNumber <= 2) return 1;
  if (atomicNumber <= 18) return 2;
  if (atomicNumber <= 36) return 3;
  if (atomicNumber <= 54) return 4;
  return 5; // Default, you'll need to expand this for a full table
}
