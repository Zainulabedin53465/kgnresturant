// KGN Mandi House menu data.
// DEMO CONTENT: dish names and prices below are placeholders. Replace with the real menu before launch.
//
// Item shapes:
//   { name: 'Dish', price: 000, desc: 'One short line', tag: 'Spicy' }
//   { name: 'Dish', desc: '...', options: [{ label: 'Half', price: 000 }, { label: 'Full', price: 000 }] }

export const IS_DEMO_MENU = true

export const WHATSAPP_NUMBER = '918777288219' // country code 91 + 8777288219
export const WHATSAPP_GREETING = 'Hello KGN Mandi House, I would like to order:'

const stroke = 'fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"'

export const categories = [
  {
    id: 'mandi',
    label: 'Mandi',
    icon: `<svg viewBox="0 0 24 24" ${stroke} aria-hidden="true"><path d="M3 13h18a9 8 0 0 1-18 0z"/><path d="M8 9c0-1.5 1-1.5 1-3M12 9c0-1.5 1-1.5 1-3M16 9c0-1.5 1-1.5 1-3"/></svg>`,
    items: [
      {
        name: 'Chicken Mandi',
        desc: 'Slow-cooked spiced rice with tender grilled chicken.',
        tag: 'Signature',
        options: [
          { label: 'Half', price: 250 },
          { label: 'Full', price: 450 },
        ],
      },
      {
        name: 'Mutton Mandi',
        desc: 'Fragrant rice with soft, slow-cooked mutton.',
        options: [
          { label: 'Half', price: 350 },
          { label: 'Full', price: 650 },
        ],
      },
      {
        name: 'Fish Mandi',
        desc: 'Mandi rice served with spiced grilled fish.',
        price: 400,
      },
      {
        name: 'Family Mandi Platter',
        desc: 'A big shared platter of rice and grilled chicken for the table.',
        tag: 'Serves 4',
        price: 1200,
      },
    ],
  },
  {
    id: 'chinese',
    label: 'Chinese',
    icon: `<svg viewBox="0 0 24 24" ${stroke} aria-hidden="true"><path d="M4 12h16a8 7 0 0 1-16 0z"/><path d="M13 9l5-7M16 9l5-6"/></svg>`,
    items: [
      { name: 'Chilli Chicken', desc: 'Crispy chicken tossed with peppers in a spicy sauce.', tag: 'Spicy', price: 220 },
      { name: 'Chicken Fried Rice', desc: 'Wok-tossed rice with chicken and vegetables.', price: 180 },
      { name: 'Hakka Noodles', desc: 'Stir-fried noodles with crunchy vegetables.', price: 160 },
      { name: 'Chicken Manchurian', desc: 'Fried chicken balls in a savoury garlic gravy.', price: 230 },
    ],
  },
  {
    id: 'indian',
    label: 'Indian',
    icon: `<svg viewBox="0 0 24 24" ${stroke} aria-hidden="true"><path d="M5 10h14v7a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3z"/><path d="M3 10h18M9 6h6"/></svg>`,
    items: [
      { name: 'Butter Chicken', desc: 'Chicken in a rich, creamy tomato gravy.', price: 280 },
      { name: 'Paneer Butter Masala', desc: 'Soft paneer in a smooth, buttery gravy.', tag: 'Veg', price: 240 },
      { name: 'Dal Tadka', desc: 'Yellow lentils tempered with garlic and cumin.', tag: 'Veg', price: 140 },
      { name: 'Butter Naan', desc: 'Soft tandoor-baked bread brushed with butter.', tag: 'Veg', price: 40 },
    ],
  },
  {
    id: 'other',
    label: 'Other Dishes',
    icon: `<svg viewBox="0 0 24 24" ${stroke} aria-hidden="true"><path d="M7 3v8M5 3v5a2 2 0 0 0 4 0V3M7 11v10M17 3c-2 2-2 6 0 8v10"/></svg>`,
    items: [
      {
        name: 'Grilled Chicken',
        desc: 'Marinated chicken grilled over fire.',
        options: [
          { label: 'Half', price: 280 },
          { label: 'Full', price: 520 },
        ],
      },
      { name: 'Fresh Lime Soda', desc: 'Sweet or salted, served chilled.', tag: 'Drink', price: 60 },
      { name: 'Gulab Jamun', desc: 'Warm milk dumplings in sugar syrup.', tag: 'Dessert', price: 70 },
    ],
  },
]
