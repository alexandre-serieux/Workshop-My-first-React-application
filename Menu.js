import React, { Component } from 'react'
import data  from "./data.json";

var Pizza = data.Pizza;
var Array = [];
var AllData = {};
for (var i in Pizza) {
    var item = Pizza[i];
    Array.push({        
        "name": item.name,
        "price" : item.price,
        "ingredients" : item.ingredients,
        "image" : item.image
    })
}
AllData.Pizza = Pizza;

export default class Menu extends Component {
    render() {
        return (            
                <p style={{color:"black"}}>
                {Array.map(item => (
                    <div>
                    <h1>{item.name}</h1>
                    <h4>{item.price}</h4>
                    <p>{item.ingredients}</p>
                    </div>
                ))}
                </p>

        )
    }
}
