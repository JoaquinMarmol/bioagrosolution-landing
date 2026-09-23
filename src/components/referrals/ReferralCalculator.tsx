'use client';

import { useMemo, useState } from 'react';
import { Calculator, Info } from 'lucide-react';
import { referralsConfig } from '@/lib/referrals';
import { cn } from '@/lib/cn';

type Copy = {
  title: string;
  hectares: string;
  price: string;
  sale: string;
  commission: string;
  simulation: string;
  invalid: string;
};

const money = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

export function ReferralCalculator({ copy }: { copy: Copy }) {
  const [hectares, setHectares] = useState('1000');
  const [price, setPrice] = useState(String(referralsConfig.referencePricePerHectare));

  const values = useMemo(() => {
    const parsedHectares = Number(hectares);
    const parsedPrice = Number(price);
    const valid =
      Number.isFinite(parsedHectares) &&
      Number.isFinite(parsedPrice) &&
      parsedHectares > 0 &&
      parsedPrice > 0;
    const sale = valid ? parsedHectares * parsedPrice : 0;
    return { valid, sale, commission: sale * referralsConfig.commissionRate };
  }, [hectares, price]);

  return (
    <div className="rounded-3xl bg-white p-5 shadow-card ring-1 ring-ink/10 sm:p-7">
      <div className="flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-2xl bg-lime/15 text-forest-deep">
          <Calculator className="h-5 w-5" aria-hidden />
        </span>
        <h3 className="text-xl font-bold text-navy">{copy.title}</h3>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-semibold text-ink">
          {copy.hectares}
          <input
            type="number"
            min="1"
            step="1"
            inputMode="numeric"
            value={hectares}
            onChange={(event) => setHectares(event.target.value)}
            className="mt-2 h-12 w-full rounded-xl border border-ink/15 bg-cream px-4 text-base font-medium text-ink transition focus:border-forest"
          />
        </label>
        <label className="text-sm font-semibold text-ink">
          {copy.price}
          <input
            type="number"
            min="1"
            step="1"
            inputMode="decimal"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            className="mt-2 h-12 w-full rounded-xl border border-ink/15 bg-cream px-4 text-base font-medium text-ink transition focus:border-forest"
          />
        </label>
      </div>

      <div className="mt-4 flex flex-wrap gap-2" aria-label={copy.hectares}>
        {referralsConfig.quickHectares.map((value) => (
          <button
            key={value}
            type="button"
            onClick={() => setHectares(String(value))}
            className={cn(
              'rounded-full px-4 py-2 text-sm font-semibold ring-1 transition',
              hectares === String(value)
                ? 'bg-forest text-white ring-forest'
                : 'bg-white text-forest-deep ring-forest/20 hover:bg-forest/5',
            )}
          >
            {new Intl.NumberFormat('es-AR').format(value)} ha
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2" aria-live="polite">
        <div className="rounded-2xl bg-cream p-4 ring-1 ring-ink/5">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mute">{copy.sale}</p>
          <p className="mt-1 font-display text-2xl font-bold text-navy">
            {values.valid ? money.format(values.sale) : '—'}
          </p>
        </div>
        <div className="rounded-2xl bg-forest-deep p-4 text-white shadow-soft">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-lime-400">
            {copy.commission}
          </p>
          <p className="mt-1 font-display text-3xl font-bold text-white">
            {values.valid ? money.format(values.commission) : '—'}
          </p>
        </div>
      </div>

      <p className={cn('mt-4 flex gap-2 text-xs leading-relaxed', values.valid ? 'text-mute' : 'text-red-700')}>
        <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
        {values.valid ? copy.simulation : copy.invalid}
      </p>
    </div>
  );
}
