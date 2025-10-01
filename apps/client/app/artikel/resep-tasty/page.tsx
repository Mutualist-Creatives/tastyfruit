// app/artikel/resep-tasty/page.tsx

import Container from "@/components/layout/container";
import ArtikelCard from "@/components/artikel/artikel-card";
import { resepTastyData } from "@/lib/resep-tasty-data";

import StarDecorations from "@/components/ui/star-decorations";
import SectionBadge from "@/components/ui/section-badge";

export default function ResepTastyPage() {
  // Renamed for clarity
  return (
    <Container>
      <section className="relative w-full h-auto">
        {/* <StarDecorations count={1} seed={10} randomRotate={true} />
        <StarDecorations count={3} seed={50} randomRotate={true} />
        <StarDecorations count={3} seed={3} randomRotate={true} />
        <StarDecorations count={1} seed={384284923} randomRotate={true} /> */}
        <div className="mx-auto">
          {/* Header Section */}
          {/* ADJUSTED: Header alignment and font size now match the Publikasi page */}
          <div className="flex flex-col items-start gap-2 mb-8 relative">
            <SectionBadge
              label="ARTIKEL TASTY"
              className="text-xs md:text-2xl px-1 py-0.5 md:px-2 mb-1"
            />
            <div className="font-bricolage-grotesque-condensed text-[#003CE9] font-extrabold text-2xl md:text-5xl bg-[#B5FE28] px-2 md:px-4 py-0.5 md:py-2">
              RESEP TASTY
            </div>
          </div>

          {/* Articles Grid */}
          {/* ADJUSTED: Grid layout now matches the Publikasi page */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {resepTastyData.map((resep) => (
              <ArtikelCard key={resep.id} resep={resep} />
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
}
