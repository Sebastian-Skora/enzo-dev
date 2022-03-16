import React, { Component } from "react";
import * as styles from "./TecSection.module.scss";
import Fade from "react-reveal/Fade";
import Tile from "./Tile/Tile.js";
import JavaScriptImage from "../../../assets/imgs/tiles/html-js-css.webp";
import ReactImage from "../../../assets/imgs/tiles/react-js-blog-header.webp";
import WordpressImage from "../../../assets/imgs/tiles/WordPresssvg.webp";
import NodeJSImage from "../../../assets/imgs/tiles/node.webp";
import MongoDBImage from "../../../assets/imgs/tiles/mongodb-logo.webp";
import Popup from "./Popup/Popup";
import { connect } from "react-redux";

const items_array = [
  {
    id: 1,
    icon: ReactImage,
  },
  {
    id: 2,
    icon: JavaScriptImage,
  },
  {
    id: 3,
    icon: MongoDBImage,
  },
  {
    id: 4,
    icon: NodeJSImage,
  },
  // {
  //   id: 5,
  //   icon: ExpressImage,
  // },
  {
    id: 6,
    icon: WordpressImage,
  },
];

class TecSection extends Component {
  state = {
    isPopupOpen: false,
    itemId: 0,
  };

  handlePopupClose = () => {
    this.setState((prevState) => ({
      isPopupOpen: !prevState.isPopupOpen,
    }));
  };

  render() {
    const { modeRedux } = this.props;
    return (
      <section
        id="technology"
        className={`${styles.tec_section_container} ${
          modeRedux && styles.dark_mode
        }`}
      >
        <Fade bottom>
          <div className={`${styles.title} ${modeRedux && styles.dark_mode}`}>
            <h2>Technologie</h2>
          </div>
          <div className="full_container">
            <div
              className={`${styles.description} ${
                modeRedux && styles.dark_mode
              }}`}
            >
              <p>
                Korzystamy z najbardziej nowoczesnych technologii, aby Twoja
                strona internetowa/aplikacja mobilna była jak najbardziej
                wydajna.
              </p>
            </div>
            <div className={styles.tiles_container}>
              {items_array.map((item) => (
                <Tile
                  key={item.icon}
                  img={item.icon}
                  handlePopupOpen={() => {
                    this.setState((prevState) => ({
                      itemId: item.id,
                      isPopupOpen: !prevState.isPopupOpen,
                    }));
                  }}
                >
                  {/* {item.main_text} */}
                </Tile>
              ))}
            </div>
          </div>
        </Fade>
        <Popup
          isPopupOpen={this.state.isPopupOpen}
          handlePopupClose={this.handlePopupClose}
          currentID={this.state.itemId}
        />
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    modeRedux: state.toggleMode,
  };
};

export default connect(mapStateToProps, null)(TecSection);
