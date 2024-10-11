const initialData = [
  {
      "title": "Global Markets Rally as Economic Data Surprises",
      "author": "Alice Smith",
      "date": "2024-05-23",
      "content": "Global markets rallied today as economic data from major economies surpassed expectations, leading to increased investor confidence.",
      "category": "Business",
      "genre": "Economy"
  },
  {
      "title": "Breakthrough in Cancer Research Announced",
      "author": "Dr. John Davis",
      "date": "2024-05-22",
      "content": "Scientists have announced a major breakthrough in cancer research that could lead to more effective treatments and potential cures.",
      "category": "Health",
      "genre": "Medical Research"
  },
  {
      "title": "Tech Giant Unveils New AI-Powered Device",
      "author": "Maria Garcia",
      "date": "2024-05-21",
      "content": "A leading tech company has unveiled its latest AI-powered device, promising to revolutionize how we interact with technology.",
      "category": "Technology",
      "genre": "Artificial Intelligence"
  },
  {
      "title": "Historic Climate Agreement Reached at Summit",
      "author": "James Lee",
      "date": "2024-05-20",
      "content": "World leaders have reached a historic agreement at the climate summit, committing to significant reductions in carbon emissions.",
      "category": "Environment",
      "genre": "Climate Change"
  },
  {
      "title": "Local Community Rallies to Support Flood Victims",
      "author": "Sarah Johnson",
      "date": "2024-05-19",
      "content": "A local community has come together to support victims of recent floods, providing aid and resources to those affected.",
      "category": "Local News",
      "genre": "Human Interest"
  },
  {
      "title": "Major Cyberattack Hits Financial Institutions",
      "author": "David Kim",
      "date": "2024-05-18",
      "content": "Several major financial institutions have been hit by a cyberattack, causing widespread disruption and prompting an investigation.",
      "category": "Security",
      "genre": "Cybersecurity"
  },
  {
      "title": "New Study Reveals Health Benefits of Plant-Based Diet",
      "author": "Dr. Emily Brown",
      "date": "2024-05-17",
      "content": "A new study has revealed significant health benefits associated with a plant-based diet, including reduced risk of chronic diseases.",
      "category": "Health",
      "genre": "Nutrition"
  },
  {
      "title": "Sports Team Wins Championship After Decade",
      "author": "Michael Wilson",
      "date": "2024-05-16",
      "content": "A popular sports team has won the national championship for the first time in a decade, sparking celebrations among fans.",
      "category": "Sports",
      "genre": "Achievement"
  },
  {
      "title": "Innovative Startup Disrupts Traditional Industry",
      "author": "Jessica Martinez",
      "date": "2024-05-15",
      "content": "An innovative startup is disrupting a traditional industry with its groundbreaking technology and business model.",
      "category": "Business",
      "genre": "Innovation"
  },
  {
      "title": "Art Exhibition Showcases Emerging Talent",
      "author": "Olivia Evans",
      "date": "2024-05-14",
      "content": "A new art exhibition is showcasing the work of emerging artists, providing them with a platform to gain recognition.",
      "category": "Culture",
      "genre": "Arts"
  },
  {
      "title": "Government Announces New Education Reforms",
      "author": "Lucas Brown",
      "date": "2024-05-13",
      "content": "The government has announced a series of new education reforms aimed at improving the quality of education and access for all students.",
      "category": "Politics",
      "genre": "Policy"
  },
  {
      "title": "Breakthrough in Renewable Energy Technology",
      "author": "Sophia Taylor",
      "date": "2024-05-12",
      "content": "Researchers have made a breakthrough in renewable energy technology, which could lead to more efficient and sustainable energy solutions.",
      "category": "Technology",
      "genre": "Renewable Energy"
  },
  {
      "title": "Cultural Festival Celebrates Diversity",
      "author": "Daniel Thompson",
      "date": "2024-05-11",
      "content": "A cultural festival celebrating diversity and inclusion has drawn large crowds and highlighted the richness of different cultures.",
      "category": "Culture",
      "genre": "Festival"
  },
  {
      "title": "Major Drug Bust Leads to Multiple Arrests",
      "author": "Liam Robinson",
      "date": "2024-05-10",
      "content": "Law enforcement agencies have conducted a major drug bust, leading to the arrest of several individuals and the seizure of illegal substances.",
      "category": "Crime",
      "genre": "Law Enforcement"
  },
  {
      "title": "Scientific Discovery Sheds Light on Ancient Civilization",
      "author": "Chloe Lewis",
      "date": "2024-05-09",
      "content": "A new scientific discovery has shed light on an ancient civilization, providing insights into their way of life and culture.",
      "category": "Science",
      "genre": "Archaeology"
  },
  {
      "title": "Economic Report Predicts Slow Growth Ahead",
      "author": "Ethan Clark",
      "date": "2024-05-08",
      "content": "A recent economic report predicts slow growth in the coming months, citing various global and domestic factors.",
      "category": "Business",
      "genre": "Economic Analysis"
  },
  {
      "title": "New Legislation Aims to Combat Climate Change",
      "author": "Ava White",
      "date": "2024-05-07",
      "content": "New legislation aimed at combating climate change has been introduced, proposing stricter regulations and incentives for green energy.",
      "category": "Politics",
      "genre": "Environmental Policy"
  },
  {
      "title": "Historic Building Restored to Former Glory",
      "author": "Henry Harris",
      "date": "2024-05-06",
      "content": "A historic building has been meticulously restored to its former glory, preserving its architectural significance and history.",
      "category": "Local News",
      "genre": "History"
  },
  {
      "title": "Tech Conference Highlights Latest Innovations",
      "author": "Isabella King",
      "date": "2024-05-05",
      "content": "A major tech conference has highlighted the latest innovations in the industry, showcasing groundbreaking products and ideas.",
      "category": "Technology",
      "genre": "Conference"
  },
  {
      "title": "Sports Legend Announces Retirement",
      "author": "Mason Scott",
      "date": "2024-05-04",
      "content": "A sports legend has announced their retirement, ending a remarkable career that has inspired many.",
      "category": "Sports",
      "genre": "Career"
  },
  {
      "title": "Community Garden Project Brings Neighbors Together",
      "author": "Harper Ramirez",
      "date": "2024-05-03",
      "content": "A community garden project has brought neighbors together, fostering a sense of community and promoting sustainability.",
      "category": "Local News",
      "genre": "Community"
  },
  {
      "title": "New Book Explores Historical Mystery",
      "author": "Jack Mitchell",
      "date": "2024-05-02",
      "content": "A new book explores a historical mystery, providing a fresh perspective and uncovering new evidence.",
      "category": "Culture",
      "genre": "Literature"
  },
  {
      "title": "Wildlife Conservation Efforts Show Positive Results",
      "author": "Aria Cooper",
      "date": "2024-05-01",
      "content": "Efforts to conserve wildlife are showing positive results, with several species seeing population increases.",
      "category": "Environment",
      "genre": "Conservation"
  },
  {
      "title": "New Music Album Tops Charts Worldwide",
      "author": "Elijah Perez",
      "date": "2024-04-30",
      "content": "A new music album has topped the charts worldwide, receiving critical acclaim and commercial success.",
      "category": "Entertainment",
      "genre": "Music"
  },
  {
      "title": "Innovative Medical Device Approved by FDA",
      "author": "Ella Stewart",
      "date": "2024-04-29",
      "content": "An innovative medical device has been approved by the FDA, offering new treatment options for patients.",
      "category": "Health",
      "genre": "Medical Technology"
  },
  {
      "title": "Startup Launches Revolutionary App",
      "author": "Benjamin Ross",
      "date": "2024-04-28",
      "content": "A startup has launched a revolutionary app that aims to change how we interact with digital content.",
      "category": "Technology",
      "genre": "Software"
  },
  {
      "title": "Historic Election Sees Record Voter Turnout",
      "author": "Grace Cook",
      "date": "2024-04-27",
      "content": "A historic election has seen record voter turnout, reflecting the high level of public engagement and interest.",
      "category": "Politics",
      "genre": "Elections"
  },
  {
      "title": "Major Breakthrough in Quantum Computing",
      "author": "Isaac Morgan",
      "date": "2024-04-26",
      "content": "Researchers have achieved a major breakthrough in quantum computing, which could revolutionize technology and science.",
      "category": "Science",
      "genre": "Quantum Computing"
  },
  {
      "title": "Local Business Wins Prestigious Award",
      "author": "Victoria Foster",
      "date": "2024-04-25",
      "content": "A local business has won a prestigious award, recognizing its innovation, quality, and contribution to the community.",
      "category": "Local News",
      "genre": "Business Achievement"
  },
  {
      "title": "Scientists Develop New Sustainable Material",
      "author": "Liam Edwards",
      "date": "2024-04-24",
      "content": "Scientists have developed a new sustainable material that could have significant implications for manufacturing and environmental protection.",
      "category": "Science",
      "genre": "Materials Science"
  }
]

module.exports = initialData