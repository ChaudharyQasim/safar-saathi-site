const PATHS: Record<string, string> = {
  shield: 'M12 2l8 3v6c0 5-3.4 9.4-8 11-4.6-1.6-8-6-8-11V5l8-3zm-1 13.6l5.3-5.3-1.4-1.4L11 12.8l-1.9-1.9-1.4 1.4L11 15.6z',
  shieldSolid: 'M12 2l8 3v6c0 5-3.4 9.4-8 11-4.6-1.6-8-6-8-11V5l8-3z',
  cash: 'M3 5h18v2H3zm2 4h14l1 9H4l1-9zm4 2v5h2v-5H9zm4 0v5h2v-5h-2z',
  person: 'M12 2a4 4 0 110 8 4 4 0 010-8zm-6 18a6 6 0 1112 0H6z',
  home: 'M4 11l8-7 8 7v9a1 1 0 01-1 1h-5v-6h-4v6H5a1 1 0 01-1-1v-9z',
  chat: 'M4 4h16v12H7l-3 3V4zm3 4v2h10V8H7zm0 4v2h7v-2H7z',
  chatPlain: 'M4 4h16v12H7l-3 3V4z',
  pin: 'M12 2C7.6 2 4 5.6 4 10c0 5.3 8 12 8 12s8-6.7 8-12c0-4.4-3.6-8-8-8zm0 11a3 3 0 110-6 3 3 0 010 6z',
  pinSolid: 'M12 2C7.6 2 4 5.6 4 10c0 5.3 8 12 8 12s8-6.7 8-12c0-4.4-3.6-8-8-8z',
  phone: 'M6.6 10.8a15 15 0 006.6 6.6l2.2-2.2a1 1 0 011-.25c1.1.37 2.3.57 3.6.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.6a1 1 0 01-.25 1l-2.2 2.2z',
  star: 'M12 17.3l6.2 3.7-1.6-7 5.4-4.7-7.2-.6L12 2 9.2 8.7 2 9.3l5.4 4.7-1.6 7z',
  arrow: 'M12 8V4l8 8-8 8v-4H4V8z',
  list: 'M4 4h16v16H4zM8 8h8v2H8zm0 4h8v2H8z',
  clock: 'M12 2a10 10 0 110 20 10 10 0 010-20zm1 5h-2v6l5 3 1-1.7-4-2.3z',
  play: 'M4 3l11 9-11 9V3zm13 7l3 2-3 2v-4z',
  car: 'M5 11l1.5-4.5A2 2 0 018.4 5h7.2a2 2 0 011.9 1.5L19 11v6a1 1 0 01-1 1h-1a1 1 0 01-1-1v-1H8v1a1 1 0 01-1 1H6a1 1 0 01-1-1v-6zm2.5 2a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm9 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z',
};

/** Filled 24x24 glyph from the page's icon set. */
export function Icon({ name, size, fill = 'currentColor' }: { name: string; size?: number; fill?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill={fill} width={size} height={size} aria-hidden="true">
      <path d={PATHS[name] ?? ''} />
    </svg>
  );
}

/** The BlaCar car mark used in the logo and the app badge. */
export function CarMark({ size = 24 }: { size?: number }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" width={size} height={size} aria-hidden="true">
      <path d="M14 38l6-14h24l6 14v10H14z" fill="#14231F" />
      <circle cx="22" cy="46" r="5" fill="#FFB020" />
      <circle cx="42" cy="46" r="5" fill="#FFB020" />
    </svg>
  );
}
