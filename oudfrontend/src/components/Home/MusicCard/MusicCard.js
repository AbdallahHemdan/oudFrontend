import React, { Component } from "react";
import "./MusicCard.css";
import { Link, withRouter } from "react-router-dom"


/**
 * Music card component which render and display the playlist card of a specific category 
 * 
 * @author Abdallah Hemdan
 * 
 * @component
 * 
 */

class MusicCard extends Component {
  /**
   * @constructor
   * 
   * @param {object} props - get musicItem (playlist date and props from the MusicItems component)
   * @param {string} id - The id of the playlist
   * @param {string} name - The name of the playlist
   * @param {string} owner - The owner of the playlist
   * @param {boolean} collaborative - Variable to check if the owner allows other users to modify the playlist.
   * @param {string} description - The description of the playlist
   * @param {string} isPublic - The playlist’s public/private status: true the playlist is public, false the playlist is private
   * @param {string} image - The image of the playlist
   * @param {string} type - The type of the playlist
   */
  constructor(props) {
    super(props)
    const
      {
        id,
        name,
        owner,
        collaborative,
        description,
        isPublic,
        image,
        type
      } = this.props.item;

    this.state = {

      /**
       * The id of the playlist
       * 
       * @type {string}
       */
      id: id,

      /**
       * The name of the playlist
       * 
       * @type {string}
       */
      name: name,

      /**
       * The owner of the playlist
       * 
       * @type {string}
       */
      owner: owner,

      /**
       * Variable to check if the owner allows other users to modify the playlist.
       * 
       * @type {boolean}
       */
      collaborative: collaborative,

      /**
       * The description of the playlist
       * 
       * @type {string}
       */
      description: description,

      /**
       * The playlist’s public/private status: true the playlist is public,
       * false the playlist is private
       * 
       * @type {boolean}
       */
      public: isPublic,

      /**
       * The image of the playlist
       * 
       * @type {string}
       */
      image: image,

      /**
       * 	The object type: “playlist”
       * 
       * @type {string}
       */
      type: type
    }
  }

  /**
   * Function to handle navigation to the playlist page
   * on clicking on the music card
   * 
   * @function
   * 
   * @return {void}
   * 
   */
  handlePlaylistClick = () => {
    this.props.history.push('playlist');
  }

  /**
   * Function to handle playing music on clicking on
   * play icon the music card
   * 
   * @function
   * 
   * @param {object} event - an event to use it in
   * disabling the default of the propagation 
   */
  handlePlayClick = (e) => {
    e.stopPropagation();
    console.log("🎵 music is playing now");
  }

  /**
   * @function
   * 
   * @name render
   * 
   * @description Render Music card components..
   * 
   * @returns {JSX} Component for App
   */
  render() {
    return (
      <div className="card-container">
        <div className="card">
          <div className="overlayer" onClick={this.handlePlaylistClick}>
            <button
              className="play-btn"
              onClick={this.handlePlayClick}>
              <i className="fa fa-play-circle play-circle">
              </i></button>
          </div>
          <img src={this.state.image} alt="playlist cover" />
          <div className="title">
            <Link to="/playlist" className="playlist-link">{this.state.name}</Link>
          </div>
        </div>
      </div >
    );
  }
}

export default withRouter(MusicCard);
