// import Greet from './greet';
import TweetBox from './component/TweetBox';
import TweetList from './component/TweetList';

let mockTweets = [
  {id: 1, name: 'Leo Cheung', body: 'My #FirstTweet'},
  {id: 2, name: 'Leo Cheung', body: 'My #SecondTweet'},
  {id: 3, name: 'Leo Cheung', body: 'My #ThirdTweet'}
];

class Main extends React.Component{
  constructor(props) {
    super(props);
    this.state = { tweetsList: [] };
  }
  addTweet(tweetToAdd){
    let newTweetsList = this.state.tweetsList;
    newTweetsList.unshift({ id: Date.now(), name: 'Guest', body: tweetToAdd });

    this.setState({ tweetsList: newTweetsList});
  }
  render() {
    return(
      <div className="container">
        <TweetBox sendTweet={this.addTweet.bind(this)} />
        <TweetList tweets={this.state.tweetsList} />
      </div>
    );
  }
}

let documentReady = () => {
  let reactNode = document.getElementById('react');
  if(reactNode){
    ReactDOM.render(
      <Main />, 
      reactNode
    );
  }
};

$(documentReady);