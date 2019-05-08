import React,{Component} from 'react';
import {Breadcrumb} from 'semantic-ui-react'

class UserBreadCrumb extends Component{
    static defaultProps={
        tables:[]
    }
    constructor(props){
        super(props);
        this.state={
            tables : props
        }
    }
    render(){
        const {tables} = this.props;
        const sizes = tables.length -1 ;
        return(
            <Breadcrumb style={{ height:"20px",padding: "0px" }}>
                {
                    tables.map(
                        (name , i) =>(sizes===i)?(
                            <><Breadcrumb.Section link>{name}</Breadcrumb.Section></>
                        ):(
                            <><Breadcrumb.Section active>{name}</Breadcrumb.Section><Breadcrumb.Divider /></>
                        )
                    )

                }                
            </Breadcrumb>
        )
    }

}
export default UserBreadCrumb;