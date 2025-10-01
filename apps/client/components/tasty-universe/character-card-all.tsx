import Image from "next/image";

// Define a type for the character props for better TypeScript safety
type Character = {
  name: string;
  title: string;
  species: string;
  tabsColor: string[];
  cardColor: string;
  primaryColor: string;
  secondaryColor: string;
  tertiaryColor: string;
  pictureBgColor: string;
  imageHolder: string;
  image: string;
};

// We pass the whole character object as a prop
export default function CharacterCardAll({
  character,
}: {
  character: Character;
}) {
  return (
    <div
      className="rounded-2xl sm:rounded-3xl p-3 sm:p-4 transform hover:scale-[1.05] transition-all duration-200 cursor-pointer relative overflow-hidden"
      // Use Tailwind's arbitrary value support to set the dynamic background color
      style={{ backgroundColor: character.cardColor }}
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-20 bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/assets/tasty-universe/card-pattern.svg)",
          backgroundSize: "cover",
        }}
      />

      {/* Top Color Tabs */}
      <div className="flex w-1/2 mb-4 relative z-10">
        {character.tabsColor.map((color, tabIndex) => (
          <div
            key={tabIndex}
            className="h-2 sm:h-3 flex-1 first:rounded-tl-lg last:rounded-tr-lg"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>

      <div className="flex w-full items-stretch relative z-10">
        {/* Left Content */}
        <div
          className="w-1/2 space-y-2"
          style={{ color: character.tertiaryColor }}
        >
          {/* Reusable Info Block component */}
          <InfoBlock
            label="Nama"
            value={character.name}
            bgColor={character.primaryColor}
            textColor={character.secondaryColor}
          />
          <InfoBlock
            label="Tempat Tumbuh"
            value={character.title}
            bgColor={character.primaryColor}
            textColor={character.secondaryColor}
          />
          <InfoBlock
            label="Spesies"
            value={character.species}
            bgColor={character.primaryColor}
            textColor={character.secondaryColor}
          />
        </div>

        {/* Character Image */}
        <div className="w-1/2 ml-4 relative flex justify-center items-center">
          <div
            className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 relative bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${character.imageHolder})` }}
          >
            <div
              className="absolute inset-2 flex items-center justify-center"
              style={{ backgroundColor: character.pictureBgColor }}
            >
              <Image
                src={character.image}
                alt={`${character.name} character`}
                width={120}
                height={120}
                className="w-20 h-20 sm:w-150 sm:h-150 object-contain drop-shadow-xl/50"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// A small helper component to reduce repetition
const InfoBlock = ({
  label,
  value,
  bgColor,
  textColor,
}: {
  label: string;
  value: string;
  bgColor: string;
  textColor: string;
}) => (
  <div className="space-y-1">
    <p className="text-[8pt] font-medium">{label}</p>
    <div
      className="inline-block font-bold text-[8pt] sm:text-xs lg:text-sm xl:text-lg uppercase px-0.5 sm:px-1 font-bricolage-grotesque-condensed leading-tight"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {value}
    </div>
  </div>
);
