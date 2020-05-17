import React, { Component } from 'react';

class DisplayFavMovie extends Component{
	render() {
    	return (
        	<ul>
          		{
            		this.props.profiles.map((profile) => {
                    	let name = this.props.users[profile.userID].name;
                    	let favMovie = this.props.movies[profile.favoriteMovieID].name;
          				return (<li>{`${name}'s favorite movie is ${favMovie}`}</li>)
        			})
                }
          	</ul>
        )
    }
}

export default DisplayFavMovie;