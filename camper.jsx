//https://fcctop100.herokuapp.com/api/fccusers/top/alltime.
class Main extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {
            leaders: []
        };
    }

    componentDidMount() {
        this.getLeaders();
    }
    getLeaders() {
        $.ajax({
            url: "https://fcctop100.herokuapp.com/api/fccusers/top/recent",
            dataType: 'json',
            cache: false,
            success: function(data){
                var users = data;
                this.setState({leaders: users});
            }.bind(this),
            error: function(xhr, status, err){
                console.log("a");
            }.bind(this)
        });
    }

    render() {
        const toaster = [0,1,2,3,4]

        return (                       
            <LeaderList leaders={this.state.leaders} />
        );
    }
}
//https://stackoverflow.com/questions/33242378/rendering-react-components-with-promises-inside-the-render-method
ReactDOM.render(
    <Main />,
    document.getElementById('root')
)

function LeaderList(props){
    const leaders = props.leaders;
    const listItems = leaders.map((number)=>
        <li>{number.username}</li>
    );
    return(
        <ul>{listItems}</ul>
    );
}


class Row extends React.Component {
    constructor(prop) {
        super(prop)
        this.state = {
            username: '',
            img: '',
            alltime: '',
            recent: '',
            lastUpdate: ''
        }
    }

    // populateRow(prop){
    //     setState({
    //         username: prop.username,
    //         img: prop.img,
    //         alltime: prop.alltime,
    //         recent: prop.recent,
    //         lastUpdate: prop.lastUpdate
    //     }
    //     );
    // }

    render(){
        const username = this.props.username;
        const img = this.props.img;
        const alltime = this.props.alltime;
        const recent = this.props.recent;
        const lastUpdate = this.props.lastUpdate;
        return(
            <div>
                {username} {alltime}
            </div>
        );
    }
}




var leaderData = [];
const recentTop = "https://fcctop100.herokuapp.com/api/fccusers/top/recent"