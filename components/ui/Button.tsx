type ButtonProps = {
  label: string;
  href: string;
};

export default function Button({ label, href }: ButtonProps) {
  return (
    <a
      href={href}
      className="
        px-5 py-2
        text-xs tracking-[0.15em] uppercase
        border border-gold text-gold
        hover:bg-gold hover:text-green
        transition-all duration-300
      "
    >
      {label}
    </a>
  );
}
