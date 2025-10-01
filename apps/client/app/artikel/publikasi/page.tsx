// components/landing-page/publikasi.tsx

import Container from "@/components/layout/container";
import SectionBadge from "@/components/ui/section-badge";
import ArtikelCard from "@/components/artikel/artikel-card";
import { publikasiData } from "@/lib/publikasi-data";

import StarDecorations from "@/components/ui/star-decorations";

export default function Publikasi() {
  return (
    <Container>
      <section className="w-full h-auto">
        {/* <StarDecorations count={1} seed={10} randomRotate={true} />
        <StarDecorations count={3} seed={50} randomRotate={true} />
        <StarDecorations count={1} seed={384284923} randomRotate={true} /> */}
        <div className="mx-auto">
          {/* Header Section */}
          {/* ADJUSTED: Header is now always left-aligned */}
          <div className="flex flex-col items-start gap-2 mb-8 relative">
            <SectionBadge
              label="ARTIKEL TASTY"
              className="text-xs md:text-2xl px-1 py-0.5 md:px-2 mb-1"
            />
            <div className="font-bricolage-grotesque-condensed text-[#003CE9] font-extrabold text-2xl md:text-5xl bg-[#B5FE28] px-2 md:px-4 py-0.5 md:py-2">
              PUBLIKASI
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {publikasiData.map((publikasi) => (
              <ArtikelCard key={publikasi.id} publikasi={publikasi} />
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
}
