import React from 'react'
import "./TswitsBox.css"
import {Button} from '@material-ui/core'

function TswitsBox() {
    return(
        <div className="tswitsbox">
            <form>
                <div className="tswitsinput">
                    <input placeholder="Hello people, tell us something" name="input-box" id="input-box"/>
                </div>
                <Button className="tswitsbutton">Tswits</Button>
            </form>
        </div>
    )
}

export default TswitsBox