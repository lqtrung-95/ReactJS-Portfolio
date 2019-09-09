import React from "react"
import Projects from "./Projects.js"
import SocialProfiles from "./SocialProfiles.js"
import profile from "./assets/profile.png"

class App extends React.Component {
    constructor(){
        super()
        this.state = ({
            displayBio : false
        })
        this.toggleDisplayBio = this.toggleDisplayBio.bind(this)
    }

    toggleDisplayBio() {
        this.setState({
            displayBio: !this.state.displayBio
        })
            
    }
    render() {
        return(
            <div>
                <img src ={profile} alt = "profile" className = "profile" />
                <h1>Hello!</h1>
                <p>My name is Trung. I'm a fresher developer</p>
                <p>I'm always looking forward to create meaningful projects.</p>
                {
                    this.state.displayBio ? (
                        <div> 
                            <p>I live in Saigon, and code every day.</p>
                            <p>My favorite language is JavaScript, and I think React.js is awesome.</p>
                            <p>Besides coding, I also love football and hutieu.</p>
                            <button onClick = {this.toggleDisplayBio}>Show less</button>
                        </div>
                    ) :
                    <div>
                        <button onClick = {this.toggleDisplayBio}>Read more</button>
                    </div>
                }
                <hr/>
                <Projects/>
                <hr/>
                <SocialProfiles/>
            </div>
        )
    }
}

export default App