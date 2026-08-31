import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { cn } from '@/lib/cn';

const BA = {
  color: '/bioagro-color.png',
  onDark: '/bioagro-on-dark.png',
  w: 2397,
  h: 1032,
} as const;

/**
 * Marca: BioAgroSolutions.
 * variant="onDark" para fondos oscuros (hero transparente / footer).
 */
export function Brand({
  variant = 'color',
  className,
  priority = false,
}: {
  variant?: 'color' | 'onDark';
  className?: string;
  priority?: boolean;
}) {
  const ba = variant === 'onDark' ? BA.onDark : BA.color;

  return (
    <div className={cn('flex items-center', className)}>
      <Link
        href="/"
        aria-label="BioAgroSolutions — Inicio"
        className="inline-flex h-full items-center"
      >
        <Image
          src={ba}
          alt="BioAgroSolutions"
          width={BA.w}
          height={BA.h}
          priority={priority}
          className="h-full w-auto"
        />
      </Link>
    </div>
  );
}
