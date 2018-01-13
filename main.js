var cit = document.querySelector('#block__cit');
var button = document.querySelector('#button');

var arr = [
	obj = {
		cit: "I have no other writers for you.",
	},
	obj = {
		cit: "Socialism and democracy are invincible.",
	},
	obj = {
		cit: "Personnel decide everything.",
	},
	obj = {
		cit: "To build, you need to know, you need to master science. And to know, we must learn. To study persistently, patiently. Learn from everyone - and from enemies and friends, especially from enemies. Learn, clenched teeth, not being afraid that enemies will laugh at us, over our ignorance, over our backwardness.",
	},
		obj = {
		cit: "Real freedom exists only where exploitation is abolished, where there is no oppression of some people by others, where there is no unemployment and beggary, where a person does not tremble for losing work, housing, bread tomorrow.",
	},
		obj = {
		cit: "World Zionism will strive with all its might to destroy our Union, so that Russia can never rise again. The strength of the USSR lies in the friendship of peoples. The edge of the struggle will be directed first of all at the break of this friendship, in the detachment of the borderlands from Russia. Here, I must confess, we have not done everything. There is still a large field of work.",
	},
		obj = {
		cit: "Many of the affairs of our Party and people will be distorted and spat on first of all abroad, and in our country too. Zionism, eager for world domination, will cruelly avenge us for our successes and achievements. He still views Russia as a barbaric country, as a raw material appendage. And my name will also be deported, slandered. I will be credited with many atrocities.",
	},
		obj = {
		cit: "It is necessary to achieve such a cultural growth of society that would ensure to all members of society the full development of their physical and mental abilities so that members of society have the opportunity to get an education sufficient to become active people of social development so that they can freely choose a profession, and not be chained for life, because of the existing division of labor into a profession.",
	},
		obj = {
		cit: "I'm not Georgian - I'm Russian of Georgian origin!",
	},
		obj = {
		cit: "Once, Stalin was informed that Marshal Rokossovsky had a mistress and this is the famous beauty actress Valentina Serova. And, they say, what will we do with them now? Stalin took a pipe from his mouth, thought for a while and said:\"What are we, what are we going to ... envy?\"",
	},
		obj = {
		cit: "Atomic bombs are designed to intimidate the nervous.",
	},
		obj = {
		cit: "You can not mix right with duty.",
	},
		obj = {
		cit: "... they regarded our generosity as a weakness.",
	}
];



button.addEventListener('click', function(e) {
	cit.textContent = arr[Math.floor(Math.random() * (12 - 0 + 1)) + 0]["cit"];
});

