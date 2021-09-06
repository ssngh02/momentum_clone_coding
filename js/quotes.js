const quotes = [
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "- Walt Disney -",
    },
    {
        quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
        author: "- Steve Jobs -",
    },
    {
        quote: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
        author: "- Robert Louis Stevenson -",
    },
    {
        quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
        author: "- Thomas A. Edison -",
    },
    {
        quote: "You will face many defeats in life, but never let yourself be defeated.",
        author: "- Maya Angelou -",
    },
    {
        quote: "Life is never fair, and perhaps it is a good thing for most of us that it is not.",
        author : "- Tony Robbins -",
    },
    {
        quote: "You only live once, but if you do it right, once is enough.",
        author: "- Mae West -",
    },
    {
        quote: "Go confidently in the direction of your dreams! Live the life you've imagined.",
        author : "- Henry David Thoreau -",
    },
    {
        quote: "Success usually comes to those who are too busy to be looking for it.",
        author: "- Henry David Thoreau -",
    },
    {
        quote: "I find that the harder I work, the more luck I seem to have.",
        author: "- Thomas Jefferson -",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todayQuote = quotes[Math.floor(Math.random()* quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;