import * as React from "react";
import { ethers } from "ethers";
import "./App.css";

export default function App() {
    const gm = () => {};

    return (
        <div className="mainContainer">
            <div className="dataContainer">
                <div className="header">👋 Hey there!</div>

                <button className="gmButton" onClick={gm}>
                    gm at Me
                </button>
            </div>
        </div>
    );
}
