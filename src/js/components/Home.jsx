import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Card from './Card';
// import Navbar from './Navbar';
import Jumbotron from './Jumbotron';

//create your first component
const Home = () => {
	return (
		<div className="text-center">
            

			
			<Jumbotron 
			title= "A Warm Welcome!" 
			text= "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis nihil ipsum eius sint nulla. Quis necessitatibus, voluptatem, officiis accusamus veniam, animi ipsum illo beatae dolorum reprehenderit vel nostrum? Deserunt, laudantium."
			buttonLabel= "Call to action!"
			/>
			<div className="d-flex">
				<Card
				title= "Card title"
				text= "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis nihil ipsum eius sint nulla. Quis necessitatibus, voluptatem, officiis accusamus veniam, animi ipsum illo beatae dolorum reprehenderit vel nostrum? Deserunt, laudantium."
				buttonLabel= "Go somewhere"
				imageUrl= "..."
				/>
				<Card
				title= "Card title"
				text= "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis nihil ipsum eius sint nulla. Quis necessitatibus, voluptatem, officiis accusamus veniam, animi ipsum illo beatae dolorum reprehenderit vel nostrum? Deserunt, laudantium."
				buttonLabel= "Go somewhere"
				imageUrl= "..."
				/>
				<Card
				title= "Card title"
				text= "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis nihil ipsum eius sint nulla. Quis necessitatibus, voluptatem, officiis accusamus veniam, animi ipsum illo beatae dolorum reprehenderit vel nostrum? Deserunt, laudantium."
				buttonLabel= "Go somewhere"
				imageUrl= "..."
				/>
			</div>
			<p>
				<img src={rigoImage} />
				
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
};

export default Home;