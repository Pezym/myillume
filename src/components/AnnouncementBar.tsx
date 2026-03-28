const AnnouncementBar = () => {
  const messages = [
    'FREE SHIPPING ON ALL ORDERS',
    'USE CODE VDAY15 FOR 15% OFF',
    'AS SEEN ON CBS NEWS',
    '60-DAY SMILE GUARANTEE',
  ];

  const ticker = messages.map(m => `${m} ✦`).join(' ');

  return (
    <div className="bg-primary text-primary-foreground overflow-hidden py-2">
      <div className="animate-ticker whitespace-nowrap flex">
        <span className="font-body text-xs tracking-[0.2em] uppercase mr-8">{ticker}</span>
        <span className="font-body text-xs tracking-[0.2em] uppercase mr-8">{ticker}</span>
      </div>
    </div>
  );
};

export default AnnouncementBar;
