import type { Element } from "@/data/elements";
import { Card, CardContent } from "@/components/ui/card";

interface ElementCardProps {
  element: Element;
}

export function ElementCard({ element }: ElementCardProps) {
  return (
    <Card
      className={`w-16 h-16 flex flex-col items-center justify-center text-center ${getCategoryColor(
        element.category
      )}`}
    >
      <CardContent className="p-2">
        <div className="text-xs font-semibold">{element.atomicNumber}</div>
        <div className="text-lg font-bold">{element.symbol}</div>
        <div className="text-xs truncate">{element.name}</div>
      </CardContent>
    </Card>
  );
}

function getCategoryColor(category: string): string {
  switch (category) {
    case "nonmetal":
      return "bg-yellow-100";
    case "noble-gas":
      return "bg-purple-100";
    case "alkali-metal":
      return "bg-red-100";
    case "alkaline-earth-metal":
      return "bg-orange-100";
    case "metalloid":
      return "bg-green-100";
    case "halogen":
      return "bg-blue-100";
    default:
      return "bg-gray-100";
  }
}
