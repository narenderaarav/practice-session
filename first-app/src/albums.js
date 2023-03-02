//import React, { useState, useEffect } from 'react'
import React from 'react'

import Birth from './birth'
//import axios from 'axios';

const App = () => {

	// const [loading, setLoading] = useState(false);
	// const [posts, setPosts] = useState([]);

	// useEffect(() => {
	// 	const loadPost = async () => {
	// 		setLoading(true);
	// 		const response = await axios.get(
	// 		"https://jsonplaceholder.typicode.com/photos");
	// 		setPosts(response.data);
	// 		setLoading(false);
	// 	}
	// 	loadPost();
	// }, []);


	return (
		<>
			{/* <div className="App">
				{loading ? (
					<div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>) :
					(posts.slice(0, 5).map((item, id) =>
						<>
                        <div key={id}>
                        <h4>{item.title}</h4>
                        <img src={item.thumbnailUrl} />
                        </div>
                        </>
                        )
					)
				}
			</div> */}

			<Birth/>
		</>
	);
}

export default App;
