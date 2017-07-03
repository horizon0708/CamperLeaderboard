
//https://fcctop100.herokuapp.com/api/fccusers/top/alltime.
// User Story: I can see a table of the freeCodeCamp campers who've earned the most brownie points in the past 30 days.
// User Story: I can see how many brownie points they've earned in the past 30 days, and how many they've earned total.
// User Story: I can toggle between sorting the list by how many brownie points they've earned in the past 30 days and by how many brownie points they've earned total.
class Main extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {
            leaders: [],
            sorter: "recent"
        };
    }
    componentDidMount() {
        this.getLeaders();
    }

    toggleSortTo(string){
        console.log("toggle!");
        if (this.state.leaders === "recent" && string === "alltime"){
            this.setState("alltime");
        }
        if (this.state.leaders === "alltime" && string === "recent"){
            this.setState("alltime");
        }  
    }

    getLeaders(sorter) {
        $.ajax({
            url: "https://fcctop100.herokuapp.com/api/fccusers/top/" + this.state.sorter,
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
        return (                       
            <LeaderList leaders={this.state.leaders} allTime={this.toggleSortTo('alltime')} recent={this.toggleSortTo('recent')} />
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
    const allTime= props.alltime;
    const recent = props.recent
    const listItems = leaders.map((number, index)=>
        {
        return <tr>
            <td>{index + 1}</td> 
            <td>{number.username}</td> 
            <td><img src={number.img} className="user-image"/></td>
            <td>{number.alltime}</td>
            <td>{number.recent}</td>
            </tr>
        }
    );
    return(
        <table className="user-table">
            <tr>
                <th>Rank</th>
                <th>Username</th>
                <th>Pic</th>
                <th onClick={console.log("click")}>All time</th>
                <th onClick={recent}>Recent</th>
            </tr>
            {listItems}
            </table>
    );
}