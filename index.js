const quotes = [
	{ 
		"quote" : "It's just one of those days.", 
		"source" : "Fred Durst" 
	},
	{
		"quote" : "And in the end, the love you take, is equal to the love you make.", 
		"source" : "Paul McCartney"
	},
	{
		"quote" : "Computer Science is no more about computers than astronomy is about telescopes.", 
		"source" : "Edgar W. Dijkstra"
	},
	{
		"quote" : "So mathematical truth prefers simple truth because the language of truth is itself simple.", 
		"source" : "Tycho Brahe"
	},
	{
		"quote" : "Another roof, another proof.", 
		"source" : "Paul Erdos"
	},
	{
		"quote" : "The theory of numbers has always been regarded as one of the most obviously useless branches of pure mathematics.", 
		"source" : "G.H Hardy"
	},
	{
		"quote" : "Nothing can stop me now.", 
		"source" : "Trent Reznor"
	},
	{
		"quote" : "I know nothing, except the fact of my ignorance.", 
		"source" : "Diogenes"
	},
    {
		"quote" : "To understand is difficult; to act is easy.", 
		"source" : "Sun Yat-Sen"
	},
    {
		"quote" : "Don't fear failure. — Not failure, but low aim, is the crime. In great attempts it is glorious even to fail.",
		"source" : "Bruce Lee"
	},{
		"quote" : "America does not at the moment have a functioning democracy.", 
		"source" : "Jimmy Carter"
	},{
		"quote" : "I am among those who think that science has great beauty.", 
		"source" : "Marie Curie"
	},{
		"quote" : "From then on, when anything went wrong with a computer, we said it had bugs in it.", 
		"source" : "Grace Hopper"
	},{
		"quote" : "Turing believes machines think. Turing lies with men. Therefore machines do not think.", 
		"source" : "Alan Turing"
	},{
		"quote" : "I was heading to a golden land of opportunity. But I ended up in America instead.", 
		"source" : "Heinz Doofenshmirtz"
	},{
		"quote" : "There is only one thing worse than coming home from the lab to a sink full of dirty dishes, and that is not going to the lab at all!" ,
		"source" : "Chien-Shiung Wu"
	},{
		"quote" : "There it is, again, that funny feeling.", 
		"source" : "Bo Burnham"
	},{
		"quote" : "A good idea is something that does not solve just one single problem, but rather can solve multiple problems at once. ",
		"source" : "Shigeru Miyamoto"
	},{
		"quote" : "There are two ways to write error-free programs; only the third one works.", 
		"source" : "Alan Perlis"
	},{
		"quote" : "Mathematics is the queen of the sciences.", 
		"source" : "Carl Friedrich Gauss"
	},{
		"quote" : "TO LOVE is to find pleasure in the happiness of others.", 
		"source" : "Gottfried Leibniz"
	},{
        "quote" : "If you think technology can solve your security problems, then you don't understand the problems and you don't understand the technology.", 
		"source" : "Bruce Schneier"
    },{
        "quote" : "Two years from now, spam will be solved.", 
		"source" : "Bill Gates"
    },{
        "quote" : "Under capitalism, man exploits man. Under communism, it's just the opposite.", 
		"source" : "John Kenneth Galbraith"
    },{
        "quote" : "Give a man fire and he's warm for a day. Set a man on fire and he's warm for the rest of his life.", 
		"source" : "Terry Pratchett"
    }
    
]

function randomQuote() {
  let random = quotes[Math.floor(Math.random() * quotes.length)];
  quotation.innerText = `“${random.quote}”`;
  source.innerText = random.source;
}

randomQuote();
