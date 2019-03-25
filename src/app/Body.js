import React,{Component} from 'react';

class Body extends Component{
    render(){
        return(
                    <tbody>
                        {
                            this.props.data.map((row,i)=>{
                                return <tr key={i}>
                                    <td>{row.when}</td>
                                    <td>{row.who}</td>
                                    <td>{row.description}</td>
                                </tr>
                            })
                        }
                    </tbody>
        )
    }
};

export default Body;