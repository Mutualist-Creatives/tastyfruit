import { notFound } from "next/navigation";
import Image from "next/image";
import { produkData, ProdukData, FruitType } from "@/lib/produk-data";
import Ribbon from "@/components/produk/ribbon";
import Link from "next/link";
import NutritionItem from "@/components/produk/nutrition-item";
import HtmlContent from "@/components/ui/html-content";
import SectionBadge from "@/components/ui/section-badge";

export default async function ProdukDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = produkData.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const otherProducts = produkData
    .filter((item) => item.slug !== slug)
    .sort(() => Math.random() - 0.5)
    .slice(0, 2);

  return (
    <div className="relative w-full overflow-x-hidden">
      {product.fruitType.map((fruit, index) => (
        <ProductSection key={fruit.slug} fruit={fruit} index={index} />
      ))}
      <NutritionSection product={product} otherProducts={otherProducts} />
    </div>
  );
}

// ==================== COMPONENT DEFINITIONS ====================

function ProductSection({ fruit, index }: { fruit: FruitType; index: number }) {
  const isOdd = index % 2 === 0;

  return (
    <section className="w-full max-w-full 2xl:max-w-[1440px] mx-auto pt-12 md:pt-0">
      <MobileProductLayout fruit={fruit} isOdd={isOdd} />
      <DesktopProductLayout fruit={fruit} isOdd={isOdd} />
    </section>
  );
}

function MobileProductLayout({
  fruit,
  isOdd,
}: {
  fruit: FruitType;
  isOdd: boolean;
}) {
  const alignRight = !isOdd;

  return (
    <div className="md:hidden px-6 pb-12 flex flex-col gap-2">
      <SectionBadge
        label="PRODUK TASTY"
        className="text-xs md:text-3xl lg:text-2xl px-1 py-0.5 md:px-2 md:py-0.5"
        wrapperClassName={`${alignRight ? "self-end" : "self-start"}`}
      />
      <h1
        className={`font-bricolage-grotesque-condensed text-[#003BE2] font-extrabold text-4xl bg-[#B5FE28] px-2 py-0 md:px-4 md:py-2 w-fit ${
          alignRight ? "self-end" : "self-start"
        }`}
      >
        {fruit.name.toUpperCase()}
      </h1>
      <div className="relative w-full max-w-xs mx-auto my-4">
        <div className="relative w-full h-[320px]">
          <Image
            src={fruit.image}
            alt={fruit.name}
            fill
            sizes="(max-width: 768px) 320px"
            className="object-contain object-center drop-shadow-lg"
          />
        </div>
      </div>
      <HtmlContent
        className="text-[#003BE2] max-w-[75%] md:max-w-[45ch] leading-relaxed text-xs font-nunito text-center mx-auto"
        content={fruit.description}
      />
      <QualityBadges alignment="self-center gap-4" />
    </div>
  );
}

function DesktopProductLayout({
  fruit,
  isOdd,
}: {
  fruit: FruitType;
  isOdd: boolean;
}) {
  return (
    <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center px-6 sm:px-10 lg:px-20 mx-auto py-12">
      {isOdd ? (
        <LeftToRightLayout fruit={fruit} />
      ) : (
        <RightToLeftLayout fruit={fruit} />
      )}
    </div>
  );
}

function LeftToRightLayout({ fruit }: { fruit: FruitType }) {
  return (
    <>
      <ProductContent
        fruit={fruit}
        textAlign="text-center md:text-left"
        flexAlign="items-center md:items-start"
        badgeAlign="gap-3 justify-center md:justify-start"
        heartJustify="pt-4 xl:pt-8 hidden md:block"
      />
      <ProductImage fruit={fruit} />
    </>
  );
}

function RightToLeftLayout({ fruit }: { fruit: FruitType }) {
  return (
    <>
      <div className="order-2 md:order-1">
        <ProductImage fruit={fruit} />
      </div>
      <div className="order-1 md:order-2">
        <ProductContent
          fruit={fruit}
          textAlign="text-center md:text-right"
          flexAlign="items-center md:items-end"
          badgeAlign="gap-3 justify-center md:justify-end"
          heartJustify="pt-4 xl:pt-8 hidden md:block"
        />
      </div>
    </>
  );
}

function ProductContent({
  fruit,
  textAlign,
  flexAlign,
  badgeAlign,
  heartJustify,
}: {
  fruit: FruitType;
  textAlign: string;
  flexAlign: string;
  badgeAlign: string;
  heartJustify: string;
}) {
  return (
    <div className={`space-y-6 ${textAlign} flex flex-col ${flexAlign}`}>
      <SectionBadge
        label="PRODUK TASTY"
        className="text-xs md:text-3xl lg:text-2xl px-1 py-0.5 md:px-2 md:py-0.5 mb-1"
      />
      <h1 className="font-bricolage-grotesque-condensed text-[#003BE2] font-extrabold text-4xl md:text-4xl lg:text-5xl xl:text-6xl bg-[#B5FE28] px-2 py-0 md:px-4 md:py-2 w-fit">
        {fruit.name.toUpperCase()}
      </h1>
      <HtmlContent
        className="text-[#003BE2] max-w-[45ch] md:max-w-[30ch] xl:max-w-[35ch] leading-relaxed text-xs md:text-base lg:text-lg font-nunito"
        content={fruit.description}
      />
      <div className={`flex items-center ${badgeAlign}`}>
        <Image
          src="/assets/badges/highland-farm-blue.svg"
          alt="Dataran Tinggi"
          width={56}
          height={56}
          className="h-12 w-12"
          style={{ objectFit: "contain" }}
        />
        <Image
          src="/assets/badges/pesticide-free-blue.svg"
          alt="Pesticide Free"
          width={56}
          height={56}
          className="h-12 w-12"
          style={{ objectFit: "contain" }}
        />
        <Image
          src="/assets/badges/handpicked-blue.svg"
          alt="Quality Certified"
          width={56}
          height={56}
          className="h-12 w-12"
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className={heartJustify}>
        <Image
          src="/assets/decorations/heart.svg"
          alt="Heart decoration"
          width={80}
          height={80}
          className="w-12 sm:w-16 lg:w-20 h-auto"
        />
      </div>
    </div>
  );
}

function ProductImage({ fruit }: { fruit: FruitType }) {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-full max-w-sm md:max-w-md h-[300px] md:h-[380px] lg:h-[450px]">
        <Image
          src={fruit.image}
          alt={fruit.name}
          fill
          sizes="(max-width: 768px) 300px, (max-width: 1024px) 380px, 450px"
          className="object-contain object-center drop-shadow-lg"
        />
      </div>
    </div>
  );
}

function QualityBadges({ alignment }: { alignment: string }) {
  return (
    <div className={`flex items-center ${alignment} gap-2`}>
      <Image
        src="/assets/badges/highland-farm-blue.svg"
        alt="Dataran Tinggi"
        width={32}
        height={40}
        className="w-8 h-10 object-contain"
      />
      <Image
        src="/assets/badges/pesticide-free-blue.svg"
        alt="Pesticide Free"
        width={32}
        height={40}
        className="w-8 h-10 object-contain"
      />
      <Image
        src="/assets/badges/handpicked-blue.svg"
        alt="Quality Certified"
        width={32}
        height={40}
        className="w-8 h-10 object-contain"
      />
    </div>
  );
}

function NutritionSection({
  product,
  otherProducts,
}: {
  product: ProdukData;
  otherProducts: ProdukData[];
}) {
  return (
    <section
      className="relative mx-auto max-w-full px-6 lg:px-20 pt-16 pb-0"
      style={{ background: `linear-gradient(to bottom, #B5FE2800, #B5FE28)` }}
    >
      <div className="w-full h-auto mx-auto 2xl:max-w-[1440px]">
        <div className="mb-8 md:mb-16">
          <div className="w-full h-auto mb-12 relative">
            <div className="hidden md:block absolute right-10 -top-20 lg:right-10 xl:right-20 lg:-top-20 xl:-top-25 z-20 pointer-events-none">
              <Ribbon fruitName={product.fruit} />
            </div>
            <div className="w-full h-auto md:hidden flex justify-end pointer-events-none z-30">
              <Ribbon fruitName={product.fruit} />
            </div>
          </div>
          <NutritionGrid product={product} />
        </div>
        <OtherProductsSection otherProducts={otherProducts} product={product} />
      </div>
    </section>
  );
}

function NutritionGrid({ product }: { product: ProdukData }) {
  return (
    <div className="grid grid-cols-5 md:grid-cols-6 gap-2">
      <NutritionItem
        label="Energi"
        value={product.nutrition.energy.split(" ")[0]}
        unit={product.nutrition.energy.split(" ")[1]}
      />
      <div className="hidden md:block">
        <NutritionItem
          label="Lemak Total"
          value={product.nutrition.totalFat.split("g")[0]}
          unit="gram"
        />
      </div>
      <div className="block md:hidden">
        <NutritionItem
          label="Lemak"
          value={product.nutrition.totalFat.split("g")[0]}
          unit="gram"
        />
      </div>
      <NutritionItem
        label="Kolesterol"
        value={product.nutrition.cholesterol.split("mg")[0]}
        unit="mg"
      />
      <div className="hidden md:block"></div>
      <div className="hidden md:block"></div>
      <div className="hidden md:block"></div>
      <NutritionItem
        label="Serat"
        value={product.nutrition.fiber.split("g")[0]}
        unit="gram"
      />
      <div className="hidden md:block">
        <NutritionItem
          label="Karbohidrat"
          value={product.nutrition.carbohydrates.split("g")[0]}
          unit="gram"
        />
      </div>
      <div className="block md:hidden">
        <NutritionItem
          label="Karbo"
          value={product.nutrition.carbohydrates.split("g")[0]}
          unit="gram"
        />
      </div>
      <NutritionItem
        label="Protein"
        value={product.nutrition.protein.split("g")[0]}
        unit="gram"
      />
      <NutritionItem
        label="Natrium"
        value={product.nutrition.sodium.split("mg")[0]}
        unit="mg"
      />
      <NutritionItem
        label="Magnesium"
        value={product.nutrition.magnesium.split("mg")[0]}
        unit="mg"
      />
      <NutritionItem
        label="Kalium"
        value={product.nutrition.potassium.split("mg")[0]}
        unit="mg"
      />
    </div>
  );
}

function OtherProductsSection({
  otherProducts,
  product,
}: {
  otherProducts: ProdukData[];
  product: ProdukData;
}) {
  return (
    <>
      <div className="h-[16em] flex flex-row items-stretch sm:hidden overflow-hidden">
        <div className="w-1/2 min-w-0 flex flex-col items-center justify-center gap-4">
          <div className="flex-shrink-0 w-full px-2">
            <Image
              src="/assets/produk/telusuri-produk-lainnya-title.svg"
              alt="Telusuri produk lainnya"
              width={420}
              height={64}
              className="h-auto w-full max-w-[10rem] mx-auto"
            />
          </div>
          <div className="w-full flex flex-row items-center justify-center gap-2 px-2">
            {otherProducts.map((item) => (
              <Link
                key={item.id}
                href={`/produk/${item.slug.toLowerCase()}`}
                className="flex-1 max-w-[6rem]"
              >
                <div className="w-full relative aspect-[4/5] transform-gpu hover:scale-105 transition-transform duration-150">
                  <Image
                    src={item.fruitCardImage}
                    alt={item.fruit}
                    fill
                    sizes="15vw"
                    className="object-contain drop-shadow-md"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="w-1/2 min-w-0 pointer-events-none relative">
          <Image
            src={product.gesture}
            alt={`Mascot ${product.fruit}`}
            fill
            sizes="40vw"
            className="object-contain drop-shadow-md"
          />
        </div>
      </div>

      <div
        className="hidden sm:h-[12em] md:h-[20em] xl:h-[24em] sm:flex flex-row
                   justify-center lg:justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12
                   items-center overflow-hidden"
      >
        <div className="flex-shrink-0">
          <Image
            src="/assets/produk/telusuri-produk-lainnya-title.svg"
            alt="Telusuri produk lainnya"
            width={420}
            height={64}
            className="h-auto w-32 sm:w-40 md:w-44 lg:w-auto lg:h-36"
          />
        </div>
        <div className="flex-1 min-w-0 max-w-xs sm:max-w-sm">
          <div className="flex flex-row items-center justify-center gap-2 sm:gap-3 md:gap-4 h-full">
            {otherProducts.map((item) => (
              <Link
                key={item.id}
                href={`/${item.slug.toLowerCase()}`}
                className="flex-1 min-w-0"
              >
                <div className="w-full max-w-[5rem] sm:max-w-[6rem] md:max-w-[8rem] lg:max-w-[10rem] xl:max-w-[15rem] mx-auto relative aspect-[4/5] transform-gpu hover:scale-105 transition-transform duration-150">
                  <Image
                    src={item.fruitCardImage}
                    alt={item.fruit}
                    fill
                    sizes="15vw"
                    className="object-contain drop-shadow-md"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="self-end pointer-events-none">
          <Image
            src={product.gesture}
            alt={`Mascot ${product.fruit}`}
            width={400}
            height={400}
            className="h-auto w-48 sm:w-56 md:w-72 lg:w-76 xl:w-88 drop-shadow-md translate-y-1/4 sm:translate-y-1/3 md:translate-y-1/4"
          />
        </div>
      </div>
    </>
  );
}
