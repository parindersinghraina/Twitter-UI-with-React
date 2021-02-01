import React from "react"
import './TimeLine.css'
import TswitsBox from './TswitsBox'
import TswitsPost from './TswitsPost'
import './temp_pic.png'

function TimeLine(){
    return (
        <div className="timeline">
            <div className="timelinestickyheader">
                <h1>Tswitser - Home</h1>
            </div>
            <TswitsBox/>
            
            <div className="posts">
                <TswitsPost
                    key={"Text"}
                    displayName={"Ruben Rudov"}
                    username={"rubenrudov"}
                    verified
                    text={"Example text"}
                    avatar
                    image={'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'}
                />
            </div>
            <div className="posts">
                <TswitsPost
                    key={"Text"}
                    displayName={"Adam Livne"}
                    username={"livne_adam_the_gever"}
                    verified
                    text={"Example text"}
                    avatar
                    image={'https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636_960_720.jpg'}
                />
            </div>
            <div className="posts">
                <TswitsPost
                    key={"Text"}
                    displayName={"Ruben Rudov"}
                    username={"rubenrudov"}
                    verified
                    text={"Example text"}
                    avatar
                    image={'https://cdn.pixabay.com/photo/2018/02/08/22/27/flower-3140492_960_720.jpg'}
                />
            </div>
        </div>
    )
}

export default TimeLine