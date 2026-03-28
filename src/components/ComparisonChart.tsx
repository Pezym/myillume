import { Check, X } from 'lucide-react';

const rows = [
  { feature: '3-in-1 Cleaning', illume: true, oralB: false, phillips: false },
  { feature: 'Plaque Removal', illume: true, oralB: true, phillips: true },
  { feature: 'Gum Sensitivity', illume: true, oralB: false, phillips: true },
  { feature: '60 Day Battery Life', illume: true, oralB: false, phillips: false },
];

const ComparisonChart = () => (
  <section className="py-24">
    <div className="max-w-3xl mx-auto px-6">
      <p className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground text-center mb-3">How We Compare</p>
      <h2 className="font-display text-3xl md:text-4xl text-center mb-14">illumé vs The Competition</h2>
      <div className="border border-border rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="grid grid-cols-4 bg-sand-light/50 border-b border-border">
          <div className="p-4" />
          <div className="p-4 text-center">
            <span className="font-display text-sm">illumé</span>
          </div>
          <div className="p-4 text-center">
            <span className="font-body text-sm text-muted-foreground">Oral B</span>
          </div>
          <div className="p-4 text-center">
            <span className="font-body text-sm text-muted-foreground">Phillips</span>
          </div>
        </div>
        {/* Rows */}
        {rows.map((row, i) => (
          <div key={row.feature} className={`grid grid-cols-4 border-b border-border last:border-b-0 ${i === 0 ? 'bg-primary/5' : ''}`}>
            <div className="p-4 flex items-center">
              <span className="font-body text-sm">{row.feature}</span>
            </div>
            <div className="p-4 flex items-center justify-center">
              {row.illume ? <Check size={18} className="text-green-500" /> : <X size={18} className="text-red-400" />}
            </div>
            <div className="p-4 flex items-center justify-center">
              {row.oralB ? <Check size={18} className="text-green-500" /> : <X size={18} className="text-red-400" />}
            </div>
            <div className="p-4 flex items-center justify-center">
              {row.phillips ? <Check size={18} className="text-green-500" /> : <X size={18} className="text-red-400" />}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ComparisonChart;
