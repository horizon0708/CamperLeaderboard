//https://fcctop100.herokuapp.com/api/fccusers/top/alltime.
class Main extends React.Component{
    constructor(prop){
      super(prop);
      this.state = {
            leaders: []
        };
    }

    componentDidMount(){
        getLeaders(recentTop).then(this.setState({leaders: leaderData}));      
    }

    render(){
        const listLeaders = this.state.leaders.map((x)=> <li>{x}</li>);
        return(
            
            <div>
                <ul>{listLeaders}</ul>
            </div>
        );
    }
}
//https://stackoverflow.com/questions/33242378/rendering-react-components-with-promises-inside-the-render-method
ReactDOM.render(
    <Main />,
    document.getElementById('root')
)

class Row extends React.Component{
    constructor(prop){
        super(prop)
        this.state = {
            number: this.number,
            name: this.name,
        }
    }
}



var leaderData = [];
const recentTop = "https://fcctop100.herokuapp.com/api/fccusers/top/recent"

function getLeaders(dataUrl){
    return new Promise(function (resolve,reject){
        $.ajax({
            url: dataUrl,
            type: 'GET',
            dataType: 'json'
        }).done((data)=>{leaders = data;}).fail(reject);
    });
}
