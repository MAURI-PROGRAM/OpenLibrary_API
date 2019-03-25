import React,{Component} from 'react';

class Heading extends Component{
    render(){
        return(
                <thead>
                        <tr>
                            {
                                this.props.headings.map((heading,i) =>{
                                    return <th key={i}>{heading}</th>
                                })
                            }
                        </tr>
                </thead>
            )
    }
};

export default Heading;