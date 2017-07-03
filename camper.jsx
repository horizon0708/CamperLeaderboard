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
        const listLeaders = this.state.leaders;
        console.log(this.state.leaders);
        return (

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

class Row extends React.Component {
    constructor(prop) {
        super(prop)
        this.state = {
            number: this.number,
            name: this.name,
        }
    }
}



var leaderData = [];
const recentTop = "https://fcctop100.herokuapp.com/api/fccusers/top/recent"