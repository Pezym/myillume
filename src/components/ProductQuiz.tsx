import { useState } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { ArrowRight, Copy, Check, Star, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '@/data/products';

interface ProductQuizProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const questions = [
  {
    question: "What's your biggest oral care concern?",
    options: [
      { label: "Plaque & cavities", emoji: "🦷" },
      { label: "Bad breath", emoji: "💨" },
      { label: "Gum health", emoji: "🩸" },
      { label: "All of the above", emoji: "✨" },
    ],
  },
  {
    question: "How many products are in your current routine?",
    options: [
      { label: "Just a toothbrush", emoji: "🪥" },
      { label: "Toothbrush + floss", emoji: "🧵" },
      { label: "3+ products", emoji: "🧴" },
    ],
  },
  {
    question: "What matters most to you?",
    options: [
      { label: "Simplicity", emoji: "🎯" },
      { label: "Deep clean results", emoji: "💎" },
      { label: "Saving money", emoji: "💰" },
    ],
  },
];

const ProductQuiz = ({ open, onOpenChange }: ProductQuizProps) => {
  const [step, setStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);
  const showResult = step >= questions.length;
  const kitProduct = products.find(p => p.id === '3-in-1-oral-kit');

  const handleSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);
    setTimeout(() => {
      setStep(prev => prev + 1);
      setSelectedOption(null);
    }, 400);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText('NEWSMILE');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClose = (open: boolean) => {
    if (!open) {
      setStep(0);
      setSelectedOption(null);
      setCopied(false);
    }
    onOpenChange(open);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md p-0 gap-0 overflow-hidden rounded-2xl">
        <DialogTitle className="sr-only">Product Quiz</DialogTitle>

        {!showResult ? (
          <div className="p-6 md:p-8">
            {/* Step indicator */}
            <div className="flex items-center gap-2 mb-6">
              {questions.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 flex-1 rounded-full transition-colors ${
                    i <= step ? 'bg-foreground' : 'bg-muted'
                  }`}
                />
              ))}
            </div>
            <p className="font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2">
              Question {step + 1} of {questions.length}
            </p>
            <h3 className="font-display text-xl md:text-2xl mb-6">
              {questions[step].question}
            </h3>
            <div className="space-y-3">
              {questions[step].options.map((option, i) => (
                <button
                  key={i}
                  onClick={() => handleSelect(i)}
                  className={`w-full text-left flex items-center gap-3 border rounded-xl px-4 py-3.5 font-body text-sm transition-all hover:border-foreground ${
                    selectedOption === i
                      ? 'border-foreground bg-foreground/5 scale-[0.98]'
                      : 'border-border'
                  }`}
                >
                  <span className="text-lg">{option.emoji}</span>
                  <span>{option.label}</span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center">
            {/* Result image */}
            {kitProduct && (
              <div className="aspect-[16/9] bg-sand-light/30 overflow-hidden">
                <img
                  src={kitProduct.image}
                  alt={kitProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="p-6 md:p-8">
              <div className="inline-flex items-center gap-1.5 bg-foreground text-background text-[10px] font-body tracking-wider uppercase px-3 py-1 rounded-full mb-4">
                <Sparkles size={12} /> Perfect Match
              </div>
              <h3 className="font-display text-xl md:text-2xl mb-2">
                {kitProduct?.name || '3-in-1 Oral Kit'}
              </h3>
              <p className="font-body text-sm text-muted-foreground mb-1">
                Everything you need in one device.
              </p>
              {kitProduct && (
                <div className="flex items-center justify-center gap-1.5 mb-5">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(kitProduct.rating) ? 'fill-foreground text-foreground' : 'text-muted-foreground/30'}`} />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground font-body">{kitProduct.rating} ({kitProduct.reviewCount})</span>
                </div>
              )}

              {/* Discount code */}
              <div className="bg-muted rounded-xl p-4 mb-5">
                <p className="font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2">
                  Your exclusive 15% off code
                </p>
                <div className="flex items-center justify-center gap-2">
                  <span className="font-display text-2xl tracking-wider">NEWSMILE</span>
                  <button
                    onClick={handleCopy}
                    className="p-1.5 rounded-lg hover:bg-background transition-colors"
                    aria-label="Copy code"
                  >
                    {copied ? <Check size={16} className="text-green-600" /> : <Copy size={16} className="text-muted-foreground" />}
                  </button>
                </div>
                {copied && (
                  <p className="font-body text-xs text-green-600 mt-1">Copied!</p>
                )}
              </div>

              <Link
                to="/product/3-in-1-oral-kit"
                onClick={() => handleClose(false)}
                className="inline-flex items-center justify-center gap-2 bg-foreground text-background font-body text-sm tracking-wider px-7 py-3.5 rounded-full hover:bg-ink-light transition-colors w-full"
              >
                Shop Now <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ProductQuiz;
