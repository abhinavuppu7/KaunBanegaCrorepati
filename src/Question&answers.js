var Questions = [
	{
		question: "How many legs do humans have?",
		options: ["2", "3", "4", "5"],
		answer: "2",
	},
	{
		question: "Where is Hyderabad located??",
		options: ["Australia", "China", "USA", "India"],
		answer: "India",
	},
	{
		question: "Which Planet do we live on?",
		options: ["Mars", "Saturn", "Earth", "Jupiter"],
		answer: "Earth",
	},
	{
		question: "Who is the current Prime Minister of India?",
		options: [
			"Narendra Modi",
			"Rahul Gandhi",
			"Mamatha Benerjee",
			"Aravind Kejerwal",
		],
		answer: "Narendra Modi",
	},
	{
		question: "Which IPL has won the most number of trophies?",
		options: ["RCB", "KKR", "MI", "CSK"],
		answer: "MI",
	},
	{
		question: "What is the first color in a rainbow?",
		options: ["Violet", "Blue", "Yellow", "Red"],
		answer: "Red",
	},
	{
		question: "How many zeroes are there in one hundred thousand?",
		options: ["3", "6", "5", "4"],
		answer: "5",
	},
	{
		question: "How many months have 31 days in a year?",
		options: ["4", "5", "6", "7"],
		answer: "7",
	},
	{
		question: "Which is the most widely spoken language in the world?",
		options: ["Hindi", "Russian", "English", "Mandarin"],
		answer: "Mandarin",
	},
	{
		question: "Which is the largest democracy in the world?",
		options: ["South Africa", "United States", "Russia", "India"],
		answer: "India",
	},
	{
		question: "Which is the largest plateau in the world??",
		options: [
			"Tibatean plateau",
			"Colorado Plateau",
			"Altiplano",
			"Laurentian Plateau",
		],
		answer: "Tibatean plateau",
	},
	{
		question: " Which language is used by the computer to process data?",
		options: ["C", "C++", "Java", "Binary"],
		answer: "Binary",
	},
	{
		question: "Which instrument is used for measuring wind speed??",
		options: ["Galvanometer", "Manometer", "Anemometer", "Barometer"],
		answer: "Anemometer",
	},
	{
		question: "Who painted the Mona Lisa?",
		options: ["Leonardo de Caprio", "Leonardo da Vinci", "Mona Lisa", "Picaso"],
		answer: "Leonardo da Vinci",
	},
	{
		question: "How many years are there in a millennium?",
		options: ["1000", "100", "10000", "100000"],
		answer: "1000",
	},
	{
		question: "Which gas is most abundant in the earth’s atmosphere?",
		options: ["Hydrogen", "Carbon dioxide", "Oxygen", "Nitrogen"],
		answer: "Nitrogen",
	},
	{
		question: "Which of following superheroes got his power from spider bite?",
		options: ["Hulk", "Ant-man", "Venom", "Spiderman"],
		answer: "Spiderman",
	},
];
function Getquestions() {
	var result = [];
	var myset = new Set();
	for (var i = 0; i < 12; i++) {
		var c = 0;
		while (c === 0) {
			var x = Math.floor(Math.random() * 17);
			if (myset.has(x) === false) {
				c = 1;
				myset.add(x);
				result.push(Questions[x]);
			}
		}
	}
	return result;
}
export default Getquestions;
