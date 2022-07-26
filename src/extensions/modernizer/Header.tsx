import * as React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUp, faCircleDown } from '@fortawesome/free-solid-svg-icons';
import "./Styles.scss";
require("../modernizer/Styles.css");

// export interface IReactHeaderProps { }

export default class Header extends React.Component<any, any> {
    spElements = [{Name:"sp-appBar",prop:"Id"},{Name:"SuiteNavWrapper",prop:"Id"},{Name:"spCommandBar",prop:"Id"},{Name:"headerRow-45",prop:"Class"}];
    constructor(props: any) {
        super(props);
        this.state = {
            showSpRibbon: true,
            showLoader:true
        };
        this.showHideSpRibbon = this.showHideSpRibbon.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
    }

    componentDidMount(){
        setTimeout(() => {
            this.showHideSpRibbon();
            this.onKeyUp();
        }, 2000);
    }
    onKeyUp() {
          this.setState({ showLoader: false });
      }

    Loader = () => (
        <div id="loading" className="Loader"></div>
    )
    showHideSpRibbon = () => {
        let visibility;
        if( document.getElementsByTagName("footer")[0] != undefined){
            document.getElementsByTagName("footer")[0].style.display = "none";
        }
        if(this.state.showSpRibbon){
            visibility = "none";
        }
        else{
            visibility = "block";
        }
        this.spElements.map((element,index) => {
            if(element.prop == "Id"){
                if(document.getElementById(element.Name) != undefined){
                    document.getElementById(element.Name).style.display = visibility;
                }
            }
            else if(element.prop == "Class"){
                let element1 = document.getElementsByClassName(element.Name)[0] as HTMLElement;
                if(element1 != undefined){
                    element1.style.display = visibility; 
                }
            }
        })
        this.setState({
            showSpRibbon: !this.state.showSpRibbon
        });
    }
    public render(): any {
        return (
            <div>
                 { this.state.showLoader ? <this.Loader /> : null }
                <div className={"ms-bgColor-themeDark ms-fontColor-white"} style={{position:"absolute",top:"0px",right:"10px",zIndex:"999999",fontSize:"20px"}} onClick={this.showHideSpRibbon}>
                <FontAwesomeIcon icon={this.state.showSpRibbon? faCircleUp : faCircleDown} title="Show/Hide SP Ribbon"/>
            </div>
            </div>
        );
    }
} 