import React from 'react'
import ReactDOM from 'react-dom'

class Application extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            attendees: [],
        }

        this.fetchData = this.fetchData.bind(this)
    }

    render() {
        return (
            <div>
                <h1>Hello from our first React App!</h1>
                <button onClick={this.fetchData}>Fetch Attendees</button>
                <ul>
                    {this.state.attendees.map(el => {
                        return (
                            <li>
                                {el.name} - <a href={el.website}>Website</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }

    fetchData() {
        fetch('/gerlent')
            .then(response => {
                return response.json()
            })
            .then(result => {
                this.setState({
                    attendees: result,
                })
            })
    }
}

ReactDOM.render(<Application />, document.getElementById('app'))
