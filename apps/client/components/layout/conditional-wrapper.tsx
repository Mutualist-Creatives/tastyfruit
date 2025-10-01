interface ConditionalWrapperProps {
  children: React.ReactNode;
}

export default function ConditionalWrapper({
  children,
}: ConditionalWrapperProps) {
  return <main className="flex-1">{children}</main>;
}
