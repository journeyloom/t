const PACKAGES = [
  {
    name: "Shimla Manali",
    location: "Himachal Pradesh",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=400&h=300&fit=crop",
    price: 9600,
    originalPrice: 12000,
    discount: 20,
    itinerary: [
      { day: "Day 1", title: "Arrival in Shimla", description: "Welcome to Shimla! Check-in at hotel, evening Mall Road visit, and leisure time." },
      { day: "Day 2", title: "Shimla Sightseeing", description: "Visit Kufri, Jakhoo Temple, Christ Church, and Ridge. Enjoy horse riding and local markets." },
      { day: "Day 3", title: "Shimla to Manali", description: "Scenic drive to Manali via Kullu Valley. Check-in at hotel and relax." },
      { day: "Day 4", title: "Manali Local Tour", description: "Explore Hadimba Temple, Vashisht Hot Springs, Tibetan Monastery, and Old Manali." },
      { day: "Day 5", title: "Solang Valley Excursion", description: "Adventure day at Solang Valley - paragliding, zorbing, cable car ride." },
      { day: "Day 6", title: "Departure", description: "Check-out and departure with wonderful memories." }
    ]
  },
  {
    name: "Kashmir Valley",
    location: "Paradise on Earth",
    image: "https://images.unsplash.com/photo-1609920658906-8223bd289001?w=400&h=300&fit=crop",
    price: 15300,
    originalPrice: 18000,
    discount: 15,
    itinerary: [
      { day: "Day 1", title: "Arrival in Srinagar", description: "Airport pickup, check-in to houseboat, evening Shikara ride on Dal Lake." },
      { day: "Day 2", title: "Srinagar Sightseeing", description: "Visit Mughal Gardens, Shankaracharya Temple, and explore local markets." },
      { day: "Day 3", title: "Gulmarg Day Trip", description: "Excursion to Gulmarg, Gondola ride, skiing (seasonal), and scenic views." },
      { day: "Day 4", title: "Pahalgam Excursion", description: "Visit Betaab Valley, Aru Valley, and Chandanwari. River rafting optional." },
      { day: "Day 5", title: "Sonamarg Day Trip", description: "Journey to Sonamarg, visit Thajiwas Glacier, pony rides." },
      { day: "Day 6", title: "Departure", description: "Last minute shopping and airport transfer." }
    ]
  },
  {
    name: "Ladakh Adventure",
    location: "Land of High Passes",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400&h=300&fit=crop",
    price: 31500,
    originalPrice: 35000,
    discount: 10,
    itinerary: [
      { day: "Day 1", title: "Arrival in Leh", description: "Airport pickup, hotel check-in. Complete rest for acclimatization." },
      { day: "Day 2", title: "Leh Local Sightseeing", description: "Visit Shanti Stupa, Leh Palace, Hall of Fame, and local markets." },
      { day: "Day 3", title: "Leh to Nubra Valley", description: "Cross Khardung La Pass (18,380 ft), visit Diskit Monastery, camel safari in Hunder." },
      { day: "Day 4", title: "Nubra to Pangong Lake", description: "Journey to Pangong via Shyok River, enjoy the changing colors of the lake." },
      { day: "Day 5", title: "Pangong to Leh", description: "Return to Leh via Chang La Pass, visit Hemis Monastery." },
      { day: "Day 6", title: "Departure", description: "Airport transfer with lifetime memories of Ladakh." }
    ]
  },
  {
    name: "Kerala Backwaters",
    location: "God's Own Country",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400&h=300&fit=crop",
    price: 15000,
    originalPrice: 20000,
    discount: 25,
    itinerary: [
      { day: "Day 1", title: "Arrival in Cochin", description: "Airport pickup, visit Fort Kochi, Chinese fishing nets, and spice markets." },
      { day: "Day 2", title: "Cochin to Munnar", description: "Drive to Munnar, visit tea gardens, Cheeyappara waterfalls." },
      { day: "Day 3", title: "Munnar Sightseeing", description: "Eravikulam National Park, Mattupetty Dam, Echo Point, tea plantations." },
      { day: "Day 4", title: "Munnar to Thekkady", description: "Transfer to Thekkady, spice plantation tour, boat ride on Periyar Lake." },
      { day: "Day 5", title: "Thekkady to Alleppey", description: "Houseboat check-in, cruise through backwaters, overnight stay." },
      { day: "Day 6", title: "Departure", description: "Houseboat check-out, transfer to Cochin airport." }
    ]
  },
  {
    name: "Goa Beaches",
    location: "Sun, Sand & Sea",
    image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=400&h=300&fit=crop",
    price: 10500,
    originalPrice: 15000,
    discount: 30,
    itinerary: [
      { day: "Day 1", title: "Arrival in Goa", description: "Airport pickup, hotel check-in, evening at Calangute Beach." },
      { day: "Day 2", title: "North Goa Tour", description: "Visit Baga Beach, Anjuna Beach, Fort Aguada, and beach shacks." },
      { day: "Day 3", title: "Water Sports Day", description: "Parasailing, jet skiing, banana boat rides at Calangute Beach." },
      { day: "Day 4", title: "South Goa Exploration", description: "Palolem Beach, Colva Beach, churches, and Portuguese architecture." },
      { day: "Day 5", title: "Leisure Day", description: "Relax at beach, shopping, spa, optional Dudhsagar Falls trip." },
      { day: "Day 6", title: "Departure", description: "Check-out and airport transfer." }
    ]
  },
  {
    name: "Dubai Luxury",
    location: "United Arab Emirates",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&h=300&fit=crop",
    price: 39600,
    originalPrice: 45000,
    discount: 12,
    itinerary: [
      { day: "Day 1", title: "Arrival in Dubai", description: "Airport pickup, hotel check-in, evening at Dubai Marina and JBR Walk." },
      { day: "Day 2", title: "Modern Dubai Tour", description: "Burj Khalifa (124th floor), Dubai Mall, Dubai Fountain show." },
      { day: "Day 3", title: "Desert Safari", description: "Dune bashing, camel ride, BBQ dinner, traditional entertainment." },
      { day: "Day 4", title: "Abu Dhabi Day Trip", description: "Sheikh Zayed Mosque, Emirates Palace, Heritage Village." },
      { day: "Day 5", title: "Theme Parks & Shopping", description: "IMG Worlds or Dubai Parks, Mall of Emirates, Ski Dubai." },
      { day: "Day 6", title: "Departure", description: "Last minute shopping at Gold Souk, airport transfer." }
    ]
  },
  {
    name: "Maldives Paradise",
    location: "Tropical Heaven",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=300&fit=crop",
    price: 61500,
    originalPrice: 75000,
    discount: 18,
    itinerary: [
      { day: "Day 1", title: "Arrival in Maldives", description: "Speedboat/seaplane transfer to resort, welcome drinks, beach relaxation." },
      { day: "Day 2", title: "Water Villa Experience", description: "Snorkeling, swimming with tropical fish, sunset cruise." },
      { day: "Day 3", title: "Island Hopping", description: "Visit local islands, traditional Maldivian lunch, dolphin watching." },
      { day: "Day 4", title: "Water Activities", description: "Scuba diving, kayaking, paddleboarding, spa treatments." },
      { day: "Day 5", title: "Relaxation Day", description: "Beach lounging, underwater restaurant dining, private sandbank." },
      { day: "Day 6", title: "Departure", description: "Leisurely breakfast, transfer to airport." }
    ]
  },
  {
    name: "Thailand Explorer",
    location: "Bangkok & Phuket",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=400&h=300&fit=crop",
    price: 21840,
    originalPrice: 28000,
    discount: 22,
    itinerary: [
      { day: "Day 1", title: "Arrival in Bangkok", description: "Airport pickup, hotel check-in, evening at Asiatique night market." },
      { day: "Day 2", title: "Bangkok City Tour", description: "Grand Palace, Wat Pho, Wat Arun, Chao Phraya river cruise." },
      { day: "Day 3", title: "Bangkok Shopping", description: "Chatuchak Market, MBK Center, Siam Paragon, street food tour." },
      { day: "Day 4", title: "Bangkok to Phuket", description: "Flight to Phuket, Patong Beach, Bangla Road nightlife." },
      { day: "Day 5", title: "Phi Phi Islands", description: "Full day speedboat tour, Maya Bay, snorkeling, beach activities." },
      { day: "Day 6", title: "Departure", description: "Last minute beach time, shopping, airport transfer." }
    ]
  }
];
