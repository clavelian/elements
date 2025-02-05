import ResponsiveModals from "@/components/responsiveModal";

export default function Home() {
  return (
    <div className="grid grid-flow-col-dense  items-center justify-items-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <ResponsiveModals />
      <ResponsiveModals />
      <ResponsiveModals />
      <ResponsiveModals />
      <ResponsiveModals />
      <ResponsiveModals />
      <ResponsiveModals />
    </div>
  );
}
