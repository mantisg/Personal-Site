export default function AboutMe() {
	const codeYears = new Date().getFullYear() - 2017
	return (
		<>
			<h2>Joshua Bliven</h2>
			<p>
				Hello and welcome. <br/><br/>
				My name, as you may have gathered, is Joshua.<br/>
				I have been learning code for {codeYears} years. <br/>
				I've studied Java, Python, Javascript, ASP.NET, and SQL.
				My main focus has been front-end development using React within Javascript, 
				however, more recently I've begun using Flask, .NET, and Node Express to create API's 
				and develop back-end structures as well.
				I am familiar with PyGame and React-Three-Fiber(a React library for accessing Three.js within React) 
				for 3D animation and game development,
				as well. <br/><br/> In high school, I took a C++ class which kickstarted my interest 
				in programming. I ended up going to college for art after that, but I eventually made 
				my way back to writing code. I enrolled in community college taking two Java courses. 
				When I realized college wasn't a viable option anymore, I turned to self-teaching. 
				That's where the fun started. <br/><br/>
				I began learning Python at first, intrigued by the lack of special characters in the 
				syntax. Coming from Java and C++, two very syntax-heavy languages, Python seemed like 
				it wouldn't even work at first. I made a few small games and picked up the basics. 
				During my exploration, a friend of mine suggested Javascript and more specifically, React. 
				
			</p>
		</>
	)
}