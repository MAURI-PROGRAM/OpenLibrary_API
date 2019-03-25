import "@babel/polyfill";

import React,{Component} from 'react';
import {render} from 'react-dom';
import data from './data.json';
import App from './App';


const headings=['When',"Who","Description"];

render(<App data={data} title='OpenLibrary API' headings={headings}/>,document.getElementById('app'));