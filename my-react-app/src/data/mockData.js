// Mock user data
export const currentUser = {
  id: 1,
  name: 'Sarah Green',
  username: '@sarahgreen',
  avatar: '/avatars/sarah.jpg',  // Will use MUI Avatar as fallback
  bio: 'Environmental enthusiast | Zero waste advocate | Mother Nature\'s best friend',
  location: 'Portland, OR',
  joinDate: 'January 2023',
  coverPhoto: '/covers/mountain-lake.jpg',
  interests: ['Sustainable Living', 'Renewable Energy', 'Wildlife Conservation', 'Organic Gardening'],
  badges: [
    { id: 1, name: 'Tree Planter', icon: '🌳', description: 'Planted 10 trees' },
    { id: 2, name: 'Beach Cleaner', icon: '🏖️', description: 'Participated in 5 beach cleanups' },
    { id: 3, name: 'Energy Saver', icon: '⚡', description: 'Reduced carbon footprint by 15%' },
    { id: 4, name: 'Recycling Pro', icon: '♻️', description: 'Recycled 100kg of waste' }
  ],
  stats: {
    posts: 87,
    following: 342,
    followers: 513,
    impact: 834  // Environmental impact score
  }
};

// Mock environmental impact data for tracking
export const impactData = {
  carbonSaved: {
    value: 258,
    unit: 'kg',
    change: 5.3,  // Percentage change from previous period
    history: [120, 145, 168, 192, 214, 258]  // Last 6 months
  },
  waterSaved: {
    value: 1450,
    unit: 'liters',
    change: 8.7,
    history: [820, 945, 1038, 1142, 1325, 1450]
  },
  wasteReduced: {
    value: 45,
    unit: 'kg',
    change: 2.1,
    history: [22, 28, 33, 37, 42, 45]
  },
  treesPlanted: {
    value: 12,
    unit: 'trees',
    change: 20,
    history: [3, 5, 5, 8, 10, 12]
  },
  cleanups: {
    value: 8,
    unit: 'events',
    change: 33.3,
    history: [2, 3, 4, 5, 6, 8]
  },
  dailyGoals: [
    { id: 1, name: 'Reusable bottle', completed: true, impact: 0.5 },
    { id: 2, name: 'Public transportation', completed: true, impact: 2.3 },
    { id: 3, name: 'Meatless meal', completed: false, impact: 1.5 },
    { id: 4, name: 'Shower < 5 mins', completed: false, impact: 0.8 },
    { id: 5, name: 'Zero waste shopping', completed: true, impact: 1.2 }
  ]
};

// Mock feed data
export const feedPosts = [
  {
    id: 1,
    user: {
      id: 2,
      name: 'Alex Rivers',
      username: '@alexrivers',
      avatar: '/avatars/alex.jpg'
    },
    content: 'Just finished planting 5 native tree species in my neighborhood park! 🌳 Who wants to join me for the next community planting event this weekend?',
    images: ['/posts/tree-planting1.jpg', '/posts/tree-planting2.jpg'],
    location: 'Cedar Park, Portland',
    timestamp: '2 hours ago',
    likes: 124,
    comments: 18,
    shares: 7,
    tags: ['TreePlanting', 'CommunityAction', 'UrbanGreening']
  },
  {
    id: 2,
    user: {
      id: 3,
      name: 'Emma Waters',
      username: '@emmawaters',
      avatar: '/avatars/emma.jpg'
    },
    content: "My zero waste journey update: I've managed to fit a month's worth of non-recyclable waste into this small jar! It's amazing how much we can reduce with just a few lifestyle changes. #ZeroWasteChallenge",
    images: ['/posts/zero-waste.jpg'],
    location: 'Home',
    timestamp: '5 hours ago',
    likes: 243,
    comments: 42,
    shares: 31,
    tags: ['ZeroWaste', 'SustainableLiving', 'EcoChallenge']
  },
  {
    id: 3,
    user: {
      id: 4,
      name: 'Green City Initiative',
      username: '@greencitypdx',
      avatar: '/avatars/greencity.jpg'
    },
    content: "Exciting news! Our community solar project has been approved! 🌞 We'll be installing solar panels on 50 low-income homes in the east side. This will reduce carbon emissions by an estimated 150 tons annually while helping families save on energy bills. Link in bio to volunteer or donate!",
    images: ['/posts/solar-project.jpg'],
    location: 'East Portland',
    timestamp: '1 day ago',
    likes: 356,
    comments: 28,
    shares: 94,
    tags: ['RenewableEnergy', 'CommunitySolar', 'ClimateAction']
  },
  {
    id: 4,
    user: currentUser,
    content: 'Beach cleanup day was a success! Our team collected over 50kg of plastic waste. Disturbing to see so much plastic, but encouraging to work with such dedicated volunteers. Same time next month? #OceanConservation',
    images: ['/posts/beach-cleanup.jpg'],
    location: 'Cannon Beach, OR',
    timestamp: '2 days ago',
    likes: 287,
    comments: 35,
    shares: 22,
    tags: ['BeachCleanup', 'PlasticPollution', 'OceanConservation']
  }
];

// Mock events data
export const events = [
  {
    id: 1,
    title: 'Community Forest Cleanup',
    description: 'Join us for a day of cleaning up Forest Park. We\'ll provide gloves, bags, and refreshments!',
    date: '2023-06-15T09:00:00',
    location: 'Forest Park, Portland, OR',
    image: '/events/forest-cleanup.jpg',
    organizer: 'Portland Green Initiative',
    attendees: 47,
    category: 'Cleanup',
    isAttending: false
  },
  {
    id: 2,
    title: 'Sustainable Living Workshop',
    description: 'Learn practical tips for reducing waste, conserving energy, and living more sustainably in your daily life.',
    date: '2023-06-22T18:30:00',
    location: 'Community Center, 123 Green St, Portland',
    image: '/events/workshop.jpg',
    organizer: 'EcoLiving Portland',
    attendees: 32,
    category: 'Education',
    isAttending: true
  },
  {
    id: 3,
    title: 'Farmer\'s Market Volunteer Day',
    description: 'Help local farmers sell their organic produce and educate the public about sustainable agriculture.',
    date: '2023-06-10T08:00:00',
    location: 'Portland Farmer\'s Market, Downtown',
    image: '/events/farmers-market.jpg',
    organizer: 'Organic Farms Collective',
    attendees: 18,
    category: 'Volunteer',
    isAttending: false
  },
  {
    id: 4,
    title: 'Solar Panel Installation Workshop',
    description: 'Hands-on workshop to learn about installing and maintaining residential solar panels.',
    date: '2023-07-05T10:00:00',
    location: 'Renewable Energy Center, Portland',
    image: '/events/solar-workshop.jpg',
    organizer: 'Portland Solar Co-op',
    attendees: 25,
    category: 'Workshop',
    isAttending: true
  }
];

// Mock groups/communities data
export const groups = [
  {
    id: 1,
    name: 'Portland Trail Cleaners',
    description: 'Volunteer group dedicated to keeping Portland\'s hiking trails clean and safe.',
    members: 342,
    image: '/groups/trail-cleaners.jpg',
    category: 'Volunteer',
    isJoined: true
  },
  {
    id: 2,
    name: 'Urban Gardeners Collective',
    description: 'Growing food and community in Portland\'s urban spaces. From beginners to experts!',
    members: 528,
    image: '/groups/urban-gardeners.jpg',
    category: 'Gardening',
    isJoined: true
  },
  {
    id: 3,
    name: 'Renewable Energy Advocates',
    description: 'Promoting renewable energy policies and adoption in Oregon.',
    members: 284,
    image: '/groups/renewable-energy.jpg',
    category: 'Advocacy',
    isJoined: false
  },
  {
    id: 4,
    name: 'Zero Waste Portland',
    description: 'Sharing tips and resources for living a zero waste lifestyle in Portland.',
    members: 671,
    image: '/groups/zero-waste.jpg',
    category: 'Lifestyle',
    isJoined: true
  }
];

// Mock suggestions for improved environmental impact
export const suggestions = [
  {
    id: 1,
    title: 'Try Meatless Mondays',
    description: 'Reducing meat consumption once a week can save up to 348 kg of CO2 emissions yearly.',
    difficulty: 'Easy',
    impact: 'Medium',
    icon: '🥗'
  },
  {
    id: 2,
    title: 'Install a Smart Thermostat',
    description: 'Can reduce your energy usage by up to 15% on heating and cooling.',
    difficulty: 'Medium',
    impact: 'High',
    icon: '🌡️'
  },
  {
    id: 3,
    title: 'Collect Rainwater',
    description: 'Use a rain barrel to collect water for your garden and plants.',
    difficulty: 'Easy',
    impact: 'Medium',
    icon: '💧'
  },
  {
    id: 4,
    title: 'Switch to LED Bulbs',
    description: 'Uses up to 75% less energy than incandescent lighting.',
    difficulty: 'Easy',
    impact: 'Medium',
    icon: '💡'
  },
  {
    id: 5,
    title: 'Start Composting',
    description: 'Reduces landfill waste and creates nutrient-rich soil for your garden.',
    difficulty: 'Medium',
    impact: 'High',
    icon: '🍂'
  }
]; 