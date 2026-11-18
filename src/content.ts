/** Every visible string of the landing page in both languages; components pick the current one with `t()`. */
export type Lang = 'en' | 'ur';
export type Bi = { en: string; ur: string };

export const SUPPORT_EMAIL = 'muhammadqasim0802@gmail.com';

export const ROUTES: { from: string; to: string; km: number }[] = [
  { from: 'Lahore', to: 'Jhang', km: 230 },
  { from: 'Lahore', to: 'Islamabad', km: 375 },
  { from: 'Lahore', to: 'Faisalabad', km: 140 },
  { from: 'Karachi', to: 'Hyderabad', km: 165 },
  { from: 'Multan', to: 'Bahawalpur', km: 95 },
  { from: 'Islamabad', to: 'Peshawar', km: 183 },
];

export const CITIES = ['Lahore', 'Karachi', 'Islamabad', 'Rawalpindi', 'Faisalabad', 'Multan', 'Jhang', 'Gujranwala', 'Sialkot', 'Peshawar', 'Quetta', 'Hyderabad', 'Sukkur', 'Bahawalpur', 'Sargodha', 'Toba Tek Singh', 'Gojra', 'Abbottabad', 'Murree', 'Mardan', 'Dera Ghazi Khan', 'Rahim Yar Khan', 'Gilgit', 'Muzaffarabad'];

export const NAV: { href: string; label: Bi }[] = [
  { href: '#features', label: { en: 'Features', ur: 'خصوصیات' } },
  { href: '#how', label: { en: 'How it works', ur: 'طریقہ' } },
  { href: '#pricing', label: { en: 'Pricing', ur: 'کرایہ' } },
  { href: '#safety', label: { en: 'Safety', ur: 'حفاظت' } },
  { href: '#drivers', label: { en: 'Drivers', ur: 'ڈرائیورز' } },
  { href: '#faq', label: { en: 'FAQ', ur: 'سوالات' } },
];

export const T = {
  getApp: { en: 'Get the app', ur: 'ایپ حاصل کریں' },
  eyebrowHero: { en: 'Intercity ride sharing in Pakistan', ur: 'پاکستان میں انٹرسٹی رائیڈ شیئرنگ' },
  h1a: { en: 'Travel together,', ur: 'مل کر سفر کریں،' },
  h1b: { en: 'the easy way.', ur: 'آسانی کے ساتھ۔' },
  heroLead: {
    en: 'Book a seat with verified drivers between 112 cities. Transparent per-kilometre fares, ladies-only rides, and a live trip link for your family. No more WhatsApp groups.',
    ur: '112 شہروں کے درمیان تصدیق شدہ ڈرائیوروں کے ساتھ سیٹ بک کریں۔ فی کلومیٹر شفاف کرایہ، صرف خواتین کے سفر، اور گھر والوں کے لیے لائیو ٹرپ لنک۔ واٹس ایپ گروپس کی ضرورت نہیں۔',
  },
  getAndroid: { en: 'Get the Android app', ur: 'اینڈرائیڈ ایپ حاصل کریں' },
  seeHow: { en: 'See how it works', ur: 'یہ کیسے کام کرتا ہے' },
  chipVerified: { en: 'Verified drivers', ur: 'تصدیق شدہ ڈرائیور' },
  chipLadies: { en: 'Ladies-only rides', ur: 'صرف خواتین کے سفر' },
  chipLive: { en: 'Live tracking', ur: 'لائیو ٹریکنگ' },
  chipLang: { en: 'Urdu and English', ur: 'اردو اور انگریزی' },
  badgeSeat: { en: 'Seat confirmed', ur: 'سیٹ کنفرم' },
  badgeSeatSub: { en: 'Contact details unlocked', ur: 'رابطہ نمبر کھل گئے' },
  badgeNear: { en: 'Driver is near', ur: 'ڈرائیور قریب ہے' },
  badgeNearSub: { en: '2 km from your pickup', ur: 'پک اپ سے 2 کلومیٹر' },
  badgeSafe: { en: 'Reached safely', ur: 'بحفاظت پہنچ گئی' },
  badgeSafeSub: { en: 'Family notified', ur: 'گھر والوں کو اطلاع مل گئی' },
  statCities: { en: 'cities', ur: 'شہر' },
  statRate: { en: "Rs per seat-km, driver's choice", ur: 'روپے فی سیٹ-کلومیٹر، ڈرائیور چنتا ہے' },
  statFee: { en: 'service fee, nothing hidden', ur: 'سروس فیس، اس سے زیادہ کچھ نہیں' },
  statLang: { en: 'languages, Urdu and English', ur: 'زبانیں: اردو اور انگریزی' },
  eyebrowFeatures: { en: 'What you get', ur: 'آپ کو کیا ملتا ہے' },
  h2Features: { en: 'Built for long rides across Pakistan', ur: 'پاکستان کے لمبے سفر کے لیے بنائی گئی ایپ' },
  leadFeatures: { en: 'Everything you need to share a 200 km ride with someone you have never met, without guesswork.', ur: 'ہر چیز جو آپ کو ایک اجنبی کے ساتھ 200 کلومیٹر سفر کرنے کے لیے چاہیے، بغیر کسی اندازے کے۔' },
  eyebrowHow: { en: 'How it works', ur: 'طریقہ' },
  h2How: { en: 'Three steps, that is all', ur: 'تین قدم، بس' },
  tabTraveler: { en: "I'm a traveler", ur: 'میں مسافر ہوں' },
  tabDriver: { en: "I'm a driver", ur: 'میں ڈرائیور ہوں' },
  eyebrowPricing: { en: 'Pricing', ur: 'کرایہ' },
  h2Pricing: { en: 'Nothing hidden. Work it out yourself.', ur: 'کوئی چھپی ہوئی چیز نہیں۔ خود حساب لگائیں۔' },
  leadPricing: { en: "Price = driver's rate × road kilometres. The traveler adds a 10% service fee. A lower offer goes to the driver and applies to your seat only.", ur: 'قیمت = ڈرائیور کا ریٹ × سڑک کا فاصلہ۔ مسافر اس پر 10% سروس فیس دیتا ہے۔ کم قیمت کی پیشکش ڈرائیور کو جاتی ہے اور صرف آپ کی سیٹ پر لاگو ہوتی ہے۔' },
  chooseRoute: { en: 'Choose a route', ur: 'راستہ چنیں' },
  ratePerKm: { en: "Driver's rate per km", ur: 'ڈرائیور کا ریٹ فی کلومیٹر' },
  lowerOffer: { en: 'Lower offer, optional', ur: 'کم قیمت کی پیشکش (اختیاری)' },
  offerNote: { en: 'An offer must be at least half the listed price. The driver accepts or declines it; other travelers still pay the listed price.', ur: 'پیشکش درج قیمت کے کم از کم نصف ہونی چاہیے۔ ڈرائیور اسے قبول یا مسترد کر سکتا ہے؛ دوسرے مسافر درج قیمت ہی دیتے ہیں۔' },
  roadDistance: { en: 'Road distance', ur: 'سڑک کا فاصلہ' },
  driverReceives: { en: 'Driver receives', ur: 'ڈرائیور کو ملتا ہے' },
  serviceFee: { en: 'Service fee (10%)', ur: 'سروس فیس (10%)' },
  travelerPays: { en: 'Traveler pays, per seat', ur: 'مسافر ادا کرتا ہے، فی سیٹ' },
  eyebrowSafety: { en: 'Safety', ur: 'حفاظت' },
  h2Safety: { en: 'Made so your family can relax', ur: 'اپنے گھر والوں کو ساتھ رکھیں' },
  leadSafety: { en: 'We built the things Pakistani families ask about before letting someone travel alone.', ur: 'ہم نے وہ چیزیں بنائی ہیں جو پاکستانی خاندان کسی کو اکیلے سفر پر بھیجتے وقت پوچھتے ہیں۔' },
  eyebrowDrivers: { en: 'For drivers', ur: 'ڈرائیوروں کے لیے' },
  h2Drivers: { en: 'Fill your empty seats, share the fuel cost', ur: 'خالی سیٹیں بھریں، پیٹرول کا خرچ شیئر کریں' },
  leadDrivers: { en: 'You are driving anyway. Three empty seats can cover the cost of a long trip.', ur: 'آپ پہلے ہی جا رہے ہیں۔ تین خالی سیٹیں ایک لمبے سفر کا خرچ پورا کر سکتی ہیں۔' },
  example: { en: 'Example', ur: 'مثال' },
  exampleTitle: { en: 'Lahore to Islamabad, 3 passengers', ur: 'لاہور سے اسلام آباد، 3 مسافر' },
  exampleSub: { en: '375 km × Rs 10 × 3 seats', ur: '375 کلومیٹر × 10 روپے × 3 سیٹیں' },
  exampleNote: { en: 'More than the fuel and tolls one way, in a single trip.', ur: 'ایک طرف کے پیٹرول اور ٹول سے زیادہ، ایک ہی سفر میں۔' },
  rowSeats: { en: '3 seats × Rs 3,750', ur: '3 سیٹیں × 3,750 روپے' },
  rowFuel: { en: 'Fuel, approx. (13 km per litre)', ur: 'پیٹرول، تقریباً (13 کلومیٹر فی لیٹر)' },
  rowToll: { en: 'Motorway toll, approx.', ur: 'موٹروے ٹول، تقریباً' },
  rowKeep: { en: 'You keep', ur: 'آپ کے پاس بچتا ہے' },
  eyebrowFaq: { en: 'Questions', ur: 'سوالات' },
  h2Faq: { en: 'Frequently asked', ur: 'اکثر پوچھے جانے والے سوالات' },
  h2Cta: { en: 'Try BlaCar today', ur: 'آج ہی بلا کار آزمائیں' },
  leadCta: { en: 'The Android beta is open. The Google Play listing is on its way; until then email us and we send you the app.', ur: 'اینڈرائیڈ بیٹا جاری ہے۔ گوگل پلے لسٹنگ جلد آ رہی ہے؛ اس وقت تک ہمیں ای میل کریں اور ہم آپ کو ایپ بھیج دیں گے۔' },
  requestApp: { en: 'Request the app', ur: 'ایپ مانگیں' },
  comingSoon: { en: 'Coming soon on', ur: 'جلد آ رہا ہے' },
  android8: { en: 'Android 8+', ur: 'اینڈرائیڈ 8+' },
  free: { en: 'Free', ur: 'مفت' },
  rights: { en: 'All rights reserved.', ur: 'جملہ حقوق محفوظ ہیں۔' },
  privacy: { en: 'Privacy Policy', ur: 'پرائیویسی پالیسی' },
  terms: { en: 'Terms of Service', ur: 'شرائط' },
  contact: { en: 'Contact', ur: 'رابطہ' },
} satisfies Record<string, Bi>;

export type Key = keyof typeof T;

export interface Feature { icon: string; amber?: boolean; title: Bi; text: Bi }
export const FEATURES: Feature[] = [
  { icon: 'shield', title: { en: 'Verified drivers', ur: 'تصدیق شدہ ڈرائیور' }, text: { en: 'Every driver scans their CNIC, licence and a live selfie with the camera, never a gallery upload, and is approved by our team before posting a ride.', ur: 'ہر ڈرائیور شناختی کارڈ، لائسنس اور سیلفی کیمرے سے براہِ راست اسکین کرتا ہے (گیلری سے اپ لوڈ نہیں) اور ہماری ٹیم منظوری دیتی ہے۔' } },
  { icon: 'cash', amber: true, title: { en: 'Fair, transparent fares', ur: 'شفاف کرایہ' }, text: { en: 'Drivers pick a rate of Rs 8 to 14 per km. The price comes from the real road distance of the route, and what you see is what you pay.', ur: 'ڈرائیور 8 سے 14 روپے فی کلومیٹر کا ریٹ چنتا ہے۔ قیمت اصل سڑک کے فاصلے سے بنتی ہے، اور آپ کو جو دکھے وہی ادا کریں۔' } },
  { icon: 'person', title: { en: 'Ladies-only rides', ur: 'صرف خواتین کے سفر' }, text: { en: 'Women drivers can post rides reserved for women passengers. The rule is enforced by the server, not by request.', ur: 'خواتین ڈرائیور ایسے سفر پوسٹ کر سکتی ہیں جن میں صرف خواتین مسافر ہوں۔ یہ اصول سرور پر نافذ ہے، درخواست پر نہیں۔' } },
  { icon: 'home', amber: true, title: { en: 'Family Circle', ur: 'فیملی سرکل' }, text: { en: 'The moment a trip starts, your trusted contact gets a live link. They see when you are near and when you arrive, nothing more.', ur: 'سفر شروع ہوتے ہی آپ کے بھروسے والے شخص کو لائیو لنک ملتا ہے۔ وہ دیکھتے ہیں کہ آپ قریب ہیں اور کب پہنچے، اس سے زیادہ کچھ نہیں۔' } },
  { icon: 'chat', title: { en: 'Private chat', ur: 'نجی چیٹ' }, text: { en: 'One private thread per booking, open once the request is accepted. Phone numbers are shared only after the driver says yes.', ur: 'ہر بکنگ کی ایک الگ چیٹ، قبولیت کے بعد کھلتی ہے۔ فون نمبر صرف تب شیئر ہوتے ہیں جب ڈرائیور درخواست قبول کرے۔' } },
  { icon: 'pin', amber: true, title: { en: 'Book part of a route', ur: 'راستے کا حصہ بک کریں' }, text: { en: 'Driver going Lahore to Jhang via Faisalabad? Book just your leg and pay only for that distance.', ur: 'لاہور سے جھنگ جانے والی گاڑی فیصل آباد سے بھی گزرتی ہے؟ صرف اپنا حصہ بک کریں اور صرف اس فاصلے کا کرایہ دیں۔' } },
];

export interface Step { title: Bi; text: Bi }
export const STEPS: Record<'traveler' | 'driver', Step[]> = {
  traveler: [
    { title: { en: 'Search', ur: 'تلاش کریں' }, text: { en: "Pick your cities and date. See each ride's price, car, driver rating and free seats.", ur: 'شہر اور تاریخ چنیں۔ ہر سفر کی قیمت، گاڑی، ڈرائیور کا ریٹنگ اور خالی سیٹیں دیکھیں۔' } },
    { title: { en: 'Request a seat', ur: 'سیٹ کی درخواست کریں' }, text: { en: 'Send a request at the listed price, or propose a lower fare. When the driver accepts, your seat is confirmed and contact details unlock.', ur: 'درج قیمت پر درخواست بھیجیں، یا کم قیمت کی پیشکش کریں۔ ڈرائیور قبول کرتا ہے تو سیٹ کنفرم اور نمبر کھل جاتے ہیں۔' } },
    { title: { en: 'Ride, with family watching', ur: 'سفر کریں، گھر والوں کو ساتھ رکھیں' }, text: { en: 'Share the live link, confirm your arrival with one tap, and rate the driver.', ur: 'لائیو لنک شیئر کریں، پہنچنے پر ایک ٹیپ سے بتائیں، اور ڈرائیور کو ریٹ کریں۔' } },
  ],
  driver: [
    { title: { en: 'Verify once', ur: 'ایک بار تصدیق کروائیں' }, text: { en: 'Scan your CNIC, licence and a live selfie, add your car. Once approved you can post.', ur: 'شناختی کارڈ، لائسنس اور سیلفی لائیو اسکین کریں، گاڑی کی تفصیل دیں۔ منظوری کے بعد آپ پوسٹ کر سکتے ہیں۔' } },
    { title: { en: 'Post a trip in 30 seconds', ur: '30 سیکنڈ میں سفر پوسٹ کریں' }, text: { en: 'Pick the route, stops, time and your rate per km. The app measures the road distance and shows the price.', ur: 'راستہ، اسٹاپ، وقت اور فی کلومیٹر ریٹ چنیں۔ ایپ سڑک کا فاصلہ ناپ کر قیمت بتاتی ہے۔' } },
    { title: { en: 'Accept requests and earn', ur: 'درخواستیں قبول کریں اور کمائیں' }, text: { en: 'Say yes or no to each request. You receive the amount you set; the service fee is paid by the traveler.', ur: 'ہر درخواست پر ہاں یا نہ کہیں۔ آپ کو آپ کی مقرر کردہ رقم ملتی ہے؛ سروس فیس مسافر دیتا ہے۔' } },
  ],
};

export interface SafetyItem { icon: string; amber?: boolean; title: Bi; text: Bi }
export const SAFETY: SafetyItem[] = [
  { icon: 'shield', title: { en: 'Live identity checks', ur: 'شناخت کی لائیو تصدیق' }, text: { en: 'Documents and face captured live, never an old photo.', ur: 'دستاویزات اور چہرہ کیمرے سے براہِ راست، کوئی پرانی تصویر نہیں۔' } },
  { icon: 'pinSolid', amber: true, title: { en: 'Live tracking and family link', ur: 'لائیو ٹریکنگ اور فیملی لنک' }, text: { en: 'The car on a map, no app needed, only for the people you send the link to.', ur: 'گاڑی نقشے پر، بغیر ایپ کے بھی، صرف ان لوگوں کے لیے جنہیں آپ لنک دیں۔' } },
  { icon: 'phone', title: { en: 'SOS to a trusted contact', ur: 'ایس او ایس بٹن' }, text: { en: 'One tap sends your live location to the person you chose.', ur: 'ایک ٹیپ سے آپ کی لائیو لوکیشن آپ کے چنے ہوئے شخص کو جاتی ہے۔' } },
  { icon: 'star', amber: true, title: { en: 'Reviews and blocking', ur: 'جائزے اور بلاکنگ' }, text: { en: 'Both sides rate every trip; reported accounts are reviewed by our team.', ur: 'ہر سفر کے بعد دونوں طرف ریٹنگ؛ رپورٹ ہونے والے اکاؤنٹ ہماری ٹیم دیکھتی ہے۔' } },
];

export const DRIVER_CARDS: Feature[] = [
  { icon: 'arrow', title: { en: 'You set the rate', ur: 'آپ ریٹ طے کرتے ہیں' }, text: { en: 'Rs 8 to 14 per km. Change the route and the price follows.', ur: '8 سے 14 روپے فی کلومیٹر۔ راستہ بدلیں تو قیمت خود بدل جاتی ہے۔' } },
  { icon: 'shieldSolid', title: { en: 'You decide who rides', ur: 'آپ فیصلہ کرتے ہیں' }, text: { en: "Accept or decline every request after seeing the traveler's profile and rating.", ur: 'ہر درخواست قبول یا مسترد کریں۔ مسافر کا پروفائل اور ریٹنگ پہلے دیکھیں۔' } },
  { icon: 'list', title: { en: 'Add stops on the way', ur: 'اسٹاپ شامل کریں' }, text: { en: 'Tick the cities you pass and sell each leg separately.', ur: 'فیصل آباد، گوجرہ، ٹوبہ: راستے کے شہر ٹک کریں اور ہر حصے کی الگ سیٹ بیچیں۔' } },
  { icon: 'clock', title: { en: 'No monthly fee', ur: 'کوئی ماہانہ فیس نہیں' }, text: { en: 'The service fee is paid by the traveler. You receive the full amount you set.', ur: 'سروس فیس مسافر دیتا ہے۔ آپ کو آپ کی مقرر کردہ پوری رقم ملتی ہے۔' } },
];

export const FAQ: { q: Bi; a: Bi }[] = [
  { q: { en: 'Is it free to use?', ur: 'کیا یہ مفت ہے؟' }, a: { en: 'The app is free. A traveler pays a 10% service fee per seat, shown inside the price before booking. Drivers pay nothing.', ur: 'ایپ مفت ہے۔ مسافر ہر سیٹ پر 10% سروس فیس دیتا ہے جو قیمت میں پہلے سے شامل دکھائی جاتی ہے۔ ڈرائیور کچھ نہیں دیتے۔' } },
  { q: { en: 'How do I pay the fare?', ur: 'کرایہ کیسے ادا ہوتا ہے؟' }, a: { en: 'For now the fare is settled on the trip. In-app payment is coming and will be announced in the app.', ur: 'فی الحال کرایہ سفر پر دیا جاتا ہے۔ ان ایپ ادائیگی جلد آ رہی ہے اور ایپ میں اعلان کیا جائے گا۔' } },
  { q: { en: 'Can the driver see my number?', ur: 'کیا ڈرائیور میرا نمبر دیکھ سکتا ہے؟' }, a: { en: 'Only after accepting your request. Before that no number, no plate, nothing is shared either way.', ur: 'صرف تب جب وہ آپ کی درخواست قبول کرے۔ اس سے پہلے کوئی نمبر، کوئی پلیٹ، کچھ شیئر نہیں ہوتا۔' } },
  { q: { en: 'Can I ask for a lower price?', ur: 'کیا میں کم قیمت مانگ سکتا ہوں؟' }, a: { en: 'Yes, down to half the listed price. The offer is for your seat only; the driver accepts or declines.', ur: 'ہاں، درج قیمت کے کم از کم نصف تک۔ پیشکش صرف آپ کی سیٹ کے لیے ہے؛ ڈرائیور قبول یا مسترد کرتا ہے۔' } },
  { q: { en: 'Which cities?', ur: 'کون سے شہر؟' }, a: { en: '112 cities across Punjab, Sindh, KP, Balochistan, Gilgit-Baltistan and Azad Kashmir. Drivers add smaller towns on the way as stops.', ur: 'پنجاب، سندھ، خیبر پختونخوا، بلوچستان، گلگت بلتستان اور آزاد کشمیر کے 112 شہر۔ ڈرائیور راستے کے چھوٹے شہر بطور اسٹاپ شامل کر سکتے ہیں۔' } },
  { q: { en: 'Is it in Urdu?', ur: 'کیا یہ اردو میں ہے؟' }, a: { en: 'The whole app is in Urdu and English, with a proper right-to-left layout and Nastaliq type.', ur: 'پوری ایپ اردو اور انگریزی میں ہے، صحیح دائیں سے بائیں لے آؤٹ اور نستعلیق فونٹ کے ساتھ۔' } },
];
