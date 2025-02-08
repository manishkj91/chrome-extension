const quotes = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    text: "Everything you've ever wanted is on the other side of fear.",
    author: "George Addair"
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
  },
  {
    text: "All our dreams can come true if we have the courage to pursue them.",
    author: "Walt Disney"
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius"
  },
  {
    text: "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau"
  },
  {
    text: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt"
  },
  {
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    text: "Don't let yesterday take up too much of today.",
    author: "Will Rogers"
  },
  {
    text: "It's not whether you get knocked down, it's whether you get up.",
    author: "Vince Lombardi"
  },
  {
    text: "If you are working on something that you really care about, you don't have to be pushed. The vision pulls you.",
    author: "Steve Jobs"
  },
  {
    text: "People who are crazy enough to think they can change the world, are the ones who do.",
    author: "Rob Siltanen"
  },
  {
    text: "Failure will never overtake me if my determination to succeed is strong enough.",
    author: "Og Mandino"
  },
  {
    text: "We may encounter many defeats but we must not be defeated.",
    author: "Maya Angelou"
  },
  {
    text: "Knowing is not enough; we must apply. Wishing is not enough; we must do.",
    author: "Johann Wolfgang von Goethe"
  },
  {
    text: "Whether you think you can or think you can't, you're right.",
    author: "Henry Ford"
  },
  {
    text: "Security is mostly a superstition. Life is either a daring adventure or nothing.",
    author: "Helen Keller"
  },
  {
    text: "The man who has confidence in himself gains the confidence of others.",
    author: "Hasidic Proverb"
  },
  {
    text: "What you lack in talent can be made up with desire, hustle and giving 110% all the time.",
    author: "Don Zimmer"
  },
  {
    text: "Do what you can with all you have, wherever you are.",
    author: "Theodore Roosevelt"
  },
  {
    text: "You are never too old to set another goal or to dream a new dream.",
    author: "C.S. Lewis"
  },
  {
    text: "Small daily improvements are the key to staggering long-term results.",
    author: "Unknown"
  },
  {
    text: "Don't wait. The time will never be just right.",
    author: "Napoleon Hill"
  },
  {
    text: "Everything you want is on the other side of fear.",
    author: "Jack Canfield"
  },
  {
    text: "Life is 10% what happens to you and 90% how you react to it.",
    author: "Charles R. Swindoll"
  },
  {
    text: "Act as if what you do makes a difference. It does.",
    author: "William James"
  },
  {
    text: "Success is walking from failure to failure with no loss of enthusiasm.",
    author: "Winston Churchill"
  },
  {
    text: "Just one small positive thought in the morning can change your whole day.",
    author: "Dalai Lama"
  },
  {
    text: "Opportunities don't happen, you create them.",
    author: "Chris Grosser"
  },
  {
    text: "Love your family, work super hard, live your passion.",
    author: "Gary Vaynerchuk"
  },
  {
    text: "It is never too late to be what you might have been.",
    author: "George Eliot"
  },
  {
    text: "Don't let someone else's opinion of you become your reality.",
    author: "Les Brown"
  },
  {
    text: "If you're offered a seat on a rocket ship, don't ask what seat! Just get on.",
    author: "Sheryl Sandberg"
  },
  {
    text: "I have learned over the years that when one's mind is made up, this diminishes fear.",
    author: "Rosa Parks"
  },
  {
    text: "If you look at what you have in life, you'll always have more.",
    author: "Oprah Winfrey"
  },
  {
    text: "Too many of us are not living our dreams because we are living our fears.",
    author: "Les Brown"
  },
  {
    text: "The only way to achieve the impossible is to believe it is possible.",
    author: "Charles Kingsleigh"
  },
  {
    text: "Whatever you are, be a good one.",
    author: "Abraham Lincoln"
  },
  {
    text: "Make each day your masterpiece.",
    author: "John Wooden"
  },
  {
    text: "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama"
  },
  {
    text: "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb"
  },
  {
    text: "Only the paranoid survive.",
    author: "Andy Grove"
  },
  {
    text: "It's hard to beat a person who never gives up.",
    author: "Babe Ruth"
  },
  {
    text: "Write it. Shoot it. Publish it. Crochet it, sauté it, whatever. MAKE.",
    author: "Joss Whedon"
  },
  {
    text: "If something is important enough, even if the odds are stacked against you, you should still do it.",
    author: "Elon Musk"
  },
  {
    text: "Hold the vision, trust the process.",
    author: "Unknown"
  },
  {
    text: "Don't be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller"
  },
  {
    text: "People often say that motivation doesn't last. Well, neither does bathing – that's why we recommend it daily.",
    author: "Zig Ziglar"
  },
  {
    text: "Work hard in silence, let your success be your noise.",
    author: "Frank Ocean"
  },
  {
    text: "Hard work beats talent when talent doesn't work hard.",
    author: "Tim Notke"
  },
  {
    text: "The only place where success comes before work is in the dictionary.",
    author: "Vidal Sassoon"
  },
  {
    text: "If you want to make an easy job seem mighty hard, just keep putting off doing it.",
    author: "Olin Miller"
  },
  {
    text: "The future depends on what you do today.",
    author: "Mahatma Gandhi"
  },
  {
    text: "No one is perfect - that's why pencils have erasers.",
    author: "Wolfgang Riebe"
  },
  {
    text: "You don't have to be great to start, but you have to start to be great.",
    author: "Zig Ziglar"
  },
  {
    text: "Do, or do not. There is no try.",
    author: "Yoda"
  },
  {
    text: "It always seems impossible until it's done.",
    author: "Nelson Mandela"
  },
  {
    text: "Keep your face always toward the sunshine, and shadows will fall behind you.",
    author: "Walt Whitman"
  },
  {
    text: "What defines us is how well we rise after falling.",
    author: "Unknown"
  },
  {
    text: "When nothing goes right, go left.",
    author: "Unknown"
  },
  {
    text: "The best revenge is massive success.",
    author: "Frank Sinatra"
  },
  {
    text: "Failure is the condiment that gives success its flavor.",
    author: "Truman Capote"
  },
  {
    text: "Wake up determined, go to bed satisfied.",
    author: "Dwayne 'The Rock' Johnson"
  },
  {
    text: "Nobody built like you, you design yourself.",
    author: "Jay-Z"
  },
  {
    text: "The harder you work for something, the greater you'll feel when you achieve it.",
    author: "Unknown"
  },
  {
    text: "Dreams don't work unless you do.",
    author: "John C. Maxwell"
  },
  {
    text: "Sometimes later becomes never. Do it now.",
    author: "Unknown"
  },
  {
    text: "Be so good they can't ignore you.",
    author: "Steve Martin"
  },
  {
    text: "Don't stop when you're tired. Stop when you're done.",
    author: "Unknown"
  },
  {
    text: "Do something today that your future self will thank you for.",
    author: "Unknown"
  },
  {
    text: "Little things make big days.",
    author: "Unknown"
  },
  {
    text: "It's going to be hard, but hard does not mean impossible.",
    author: "Unknown"
  },
  {
    text: "Don't wait for opportunity. Create it.",
    author: "Unknown"
  },
  {
    text: "Sometimes we're tested not to show our weaknesses, but to discover our strengths.",
    author: "Unknown"
  },
  {
    text: "The key to success is to focus on goals, not obstacles.",
    author: "Unknown"
  },
  {
    text: "Don't dream about success. Get out there and work for it.",
    author: "Unknown"
  },
  {
    text: "Focus on the step in front of you, not the whole staircase.",
    author: "Unknown"
  },
  {
    text: "You are stronger than you think.",
    author: "Unknown"
  },
  {
    text: "Push yourself, because no one else is going to do it for you.",
    author: "Unknown"
  },
  {
    text: "The difference between ordinary and extraordinary is that little extra.",
    author: "Jimmy Johnson"
  },
  {
    text: "Success doesn't just find you. You have to go out and get it.",
    author: "Unknown"
  },
  {
    text: "The harder you work, the harder it is to surrender.",
    author: "Vince Lombardi"
  },
  {
    text: "Excellence is not a skill. It's an attitude.",
    author: "Ralph Marston"
  },
  {
    text: "If opportunity doesn't knock, build a door.",
    author: "Milton Berle"
  },
  {
    text: "Don't count the days, make the days count.",
    author: "Muhammad Ali"
  },
  {
    text: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs"
  },
  {
    text: "Go the extra mile. It's never crowded there.",
    author: "Wayne Dyer"
  },
  {
    text: "Keep going. Everything you need will come to you at the perfect time.",
    author: "Unknown"
  },
  {
    text: "The only person you should try to be better than is the person you were yesterday.",
    author: "Unknown"
  },
  {
    text: "Success is liking yourself, liking what you do, and liking how you do it.",
    author: "Maya Angelou"
  },
  {
    text: "What you do today can improve all your tomorrows.",
    author: "Ralph Marston"
  },
  {
    text: "Make it happen now, not tomorrow. Tomorrow is a loser's excuse.",
    author: "Andrew Fashion"
  },
  {
    text: "If you want something you never had, you have to do something you've never done.",
    author: "Thomas Jefferson"
  },
  {
    text: "Doubt kills more dreams than failure ever will.",
    author: "Suzy Kassem"
  },
  {
    text: "Don't limit your challenges. Challenge your limits.",
    author: "Unknown"
  },
  {
    text: "Life has two rules: #1 Never quit #2 Always remember rule #1.",
    author: "Unknown"
  },
  {
    text: "The harder you fall, the higher you bounce.",
    author: "Unknown"
  },
  {
    text: "Champions keep playing until they get it right.",
    author: "Billie Jean King"
  },
  {
    text: "Fall seven times, stand up eight.",
    author: "Japanese Proverb"
  },
  {
    text: "The secret of getting ahead is getting started.",
    author: "Mark Twain"
  },
  {
    text: "Whatever you decide to do, make sure it makes you happy.",
    author: "Paulo Coelho"
  },
  {
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson"
  }
];

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

function updateQuote() {
  const quote = getRandomQuote();
  document.getElementById('quote-text').textContent = `"${quote.text}"`;
  document.getElementById('quote-author').textContent = `- ${quote.author}`;
}

document.addEventListener('DOMContentLoaded', () => {
  updateQuote();
  document.getElementById('new-quote').addEventListener('click', updateQuote);
});
