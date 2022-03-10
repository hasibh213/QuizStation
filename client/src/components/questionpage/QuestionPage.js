import React from "react";
import axios from "axios";

let api = "/";

class QuestionPage extends React.Component {
  state = {
    allVideos: [],
    chosenVideo: undefined,
    loading: true,
  };

  componentDidMount() {
    this.loadAllVideos();
  }

  loadAllVideos = () => {
    axios.get(api + "videos/").then((response) => {
      this.setState({ allVideos: response.data });
      this.setChosenVideoById(response.data[0].id);
    });
  };

  setChosenVideoById = (videoId) => {
    axios.get(api + "videos/" + videoId).then((response) => {
      this.setState({ loading: true });
      this.setState({ chosenVideo: response.data, loading: false });
    });
  };

  componentDidUpdate(prevProps) {
    let newVideoId = this.props.match.params.id;
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.setChosenVideoById(newVideoId);
    }
  }

  render() {
    if (this.state.loading) {
      return <div>Loading</div>;
    }
    return (
      <div className="app">
        <Header></Header>
        <Hero
          videos={this.state.allVideos}
          videodetails={this.state.chosenVideo}
          specificVideo={this.state.chosenVideo}
        />
        <VideoDetails
          videos={this.state.allVideos}
          videodetails={this.state.chosenVideo}
          specificVideo={this.state.chosenVideo}
        />
        <CommentDisplay
          videos={this.state.allVideos}
          videodetails={this.state.chosenVideo}
          specificVideo={this.state.chosenVideo}
        />
        <OtherVideos
          videos={this.state.allVideos}
          videodetails={this.state.chosenVideo}
          specificVideo={this.state.chosenVideo}
        />
      </div>
    );
  }
}

export default QuestionPage;
