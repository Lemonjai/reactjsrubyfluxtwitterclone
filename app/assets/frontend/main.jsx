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

  formattedTweets(tweetsList){
    let formattedList = tweetsList.map(tweet => {
      tweet.formattedDate = moment(tweet.created_at).fromNow();
      return tweet;
    }); 

    return{
      tweetsList: tweetsList
    }; 
  }

  addTweet(tweetToAdd){

    $.post("/tweets", {body: tweetToAdd})
    .success( savedTweet => {
      let newTweetsList = this.state.tweetsList;
      newTweetsList.unshift(savedTweet);
      this.setState(this.formattedTweets(newTweetsList));
    })
    .error(error => console.log(error));    
  }

  componentDidMount() {
    $.ajax("/tweets")
    .success(data => this.setState(this.formattedTweets(data)))
    .error(error => console.log(error));
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