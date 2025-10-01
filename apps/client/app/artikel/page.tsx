// app/artikel/page.tsx

import Container from "@/components/layout/container";
import FullContainer from "@/components/layout/full-container";

import Publikasi from "@/components/artikel/publikasi";
import ResepTasty from "@/components/artikel/resep-tasty";

import StarDecorations from "@/components/ui/star-decorations";

export default function ArtikelPage() {
  return (
    <section className="relative w-full h-auto">
      {/* <StarDecorations count={1} seed={8} randomRotate={true} />
      <StarDecorations count={1} seed={11128} randomRotate={true} />
      <StarDecorations count={1} seed={1111128} randomRotate={true} />
      <StarDecorations count={1} seed={425342} randomRotate={true} /> */}
      <Container>
        <Publikasi />
      </Container>
      <FullContainer>
        <ResepTasty />
      </FullContainer>
    </section>
  );
}
