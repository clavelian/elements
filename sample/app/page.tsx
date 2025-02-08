import { PeriodicTable } from "@/components/periodic-table";

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Periodic Table of Elements</h1>
      <PeriodicTable />
    </main>
  );
}
