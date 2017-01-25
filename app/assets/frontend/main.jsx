// import Greet from './greet';
import TweetBox from './component/TweetBox';
import TweetList from './component/TweetList';
import TweetStore from "./stores/TweetStore";
import TweetActions from "./actions/TweetActions";

TweetActions.getAllTweets();

let getAppState = () => {
  return { tweetsList: TweetStore.getAll() };
}

let mockTweets = [
  {id: 1, name: 'Leo Cheung', body: 'My #FirstTweet'},
  {id: 2, name: 'Leo Cheung', body: 'My #SecondTweet'},
  {id: 3, name: 'Leo Cheung', body: 'My #ThirdTweet'}
];

class Main extends React.Component{
  constructor(props) {
    super(props);
    this.state = getAppState();
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    TweetStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    TweetStore.removeChangeListener(this._onChange);
  }

  _onChange(){
    console.log(5,"Main._onChange");
    this.setState(getAppState());
  }

  render() {
    return(
      <div className="container">
        <TweetBox />
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