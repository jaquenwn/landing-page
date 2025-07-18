import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Card from './Card';
// import Navbar from './Navbar';
import Jumbotron from './Jumbotron';

//create your first component
const Home = () => {
	return (
		<div className="text-center ">
            
			<div>
				
				
			</div>

			<div className= "container">
				<Jumbotron 
				title= "A Warm Welcome!" 
				text= "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis nihil ipsum eius sint nulla. Quis necessitatibus, voluptatem, officiis accusamus veniam, animi ipsum illo beatae dolorum reprehenderit vel nostrum? Deserunt, laudantium."
				buttonLabel= "Call to action!"
				/>
			
				<div className= "row">
					<div className="col-md-3">
						<Card
						title= "Card title"
						text= "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis nihil ipsum eius sint nulla. Quis necessitatibus, voluptatem, officiis accusamus veniam, animi ipsum illo beatae dolorum reprehenderit vel nostrum? Deserunt, laudantium."
						buttonLabel= "Find out more!"
						imageUrl= "https://static.desygner.com/wp-content/uploads/sites/13/2022/05/04141642/Free-Stock-Photos-01.jpg"
						/>
					</div>
					<div className="col-md-3">
						<Card
						title= "Card title"
						text= "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis nihil ipsum eius sint nulla. Quis necessitatibus, voluptatem, officiis accusamus veniam, animi ipsum illo beatae dolorum reprehenderit vel nostrum? Deserunt, laudantium."
						buttonLabel= "Find out more!"
						imageUrl= "https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?s=612x612&w=0&k=20&c=i4HYO7xhao7CkGy7Zc_8XSNX_iqG0vAwNsrH1ERmw2Q="
						/>
					</div>
					<div className="col-md-3">
						<Card
						title= "Card title"
						text= "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis nihil ipsum eius sint nulla. Quis necessitatibus, voluptatem, officiis accusamus veniam, animi ipsum illo beatae dolorum reprehenderit vel nostrum? Deserunt, laudantium."
						buttonLabel= "Find out more!"
						imageUrl= "https://s1.1zoom.me/prev/587/Waves_Closeup_Water_586392_612x400.jpg"
						/>
					</div>
					<div className="col-md-3">
						<Card
						title= "Card title"
						text= "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis nihil ipsum eius sint nulla. Quis necessitatibus, voluptatem, officiis accusamus veniam, animi ipsum illo beatae dolorum reprehenderit vel nostrum? Deserunt, laudantium."
						buttonLabel= "Find out more!"
						imageUrl= "https://media.istockphoto.com/id/901134626/photo/sun-shining-in-a-forest.jpg?s=612x612&w=0&k=20&c=Z1GPER9EE6BQK_efVKaSO7WODScQYOMPX3TFFPCZt88="
						/>
					</div>
				</div>
			</div>

			<div>
				
				
			</div>
			
			
		</div>
	);
};

export default Home;