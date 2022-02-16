import React from "react";
import { Jumbotron } from "./jumbotron.js";
import { NavBar } from "./navbar.js";
import { Card } from "./card.js";
import { Footer } from "./footer.js";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

export const Home = () => {
	return (
		<div>
			<NavBar site="Navbar" home="home" link="link" Services="services" />
			<Jumbotron
				jtitle="A Warm Welcome!"
				jbody="Lorem ipsum dolor sit<Navbar  amet consectetur adipisicing elit.
					Incidunt molestiae vero vel nesciunt reprehenderit explicabo
					quasi, 
					recusandae deleniti officia non vitae quia voluptatibus
					dolor, amet obcaecati at eaque? Consectetur, incidunt
					veritatis facere officiis neque ex nostrum 
					cupiditate doloremque asperiores voluptates laudantium,
					doloribus laboriosam reprehenderit debitis saepe nulla ut
					eos laborum!"
				jbtnlabel="Call to action!"
			/>
			<div className="d-flex">
				<Card
					title="first card on react!"
					description="first content made with react,check it out!"
					buttonLabel="Click here!"
					buttonURL="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
					imageURL="https://picsum.photos/id/237/200/300"
				/>
				<Card
					title="first card on react!"
					description="first content made with react,check it out!"
					buttonLabel="Click here!"
					buttonURL="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
					imageURL="https://picsum.photos/id/237/200/300"
				/>
				<Card
					title="first card on react!"
					description="first content made with react,check it out!"
					buttonLabel="Click here!"
					buttonURL="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
					imageURL="https://picsum.photos/id/237/200/300"
				/>
				<Card
					title="first card on react!"
					description="first content made with react,check it out!"
					buttonLabel="Click here!"
					buttonURL="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
					imageURL="https://picsum.photos/id/237/200/300"
				/>
			</div>
			<Footer devinitials="J.M" date="2022" />
		</div>
	);
};
