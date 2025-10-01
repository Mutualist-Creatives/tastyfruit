// src/components/ui/container.tsx
interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="flex flex-col w-full h-auto mx-auto max-w-full 2xl:max-w-[1440px] px-6 lg:px-20 font-nunito py-12 justify-center items-center">
      {children}
    </div>
  );
}
