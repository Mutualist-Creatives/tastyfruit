// src/components/ui/container.tsx
interface ContainerProps {
  children: React.ReactNode;
}

export default function FullContainer({ children }: ContainerProps) {
  return (
    <div className="flex flex-col w-full h-auto mx-auto max-w-full md:max-w-7xl xl:max-w-full 2xl:max-w-[1440px] font-nunito py-12 justify-center items-center">
      {children}
    </div>
  );
}
