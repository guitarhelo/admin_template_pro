import React,{useState,useEffect} from "react";
import * as ProType from "prop-types";

const PortletComponent = (props) => {

    const [content, setContent] = useState();
    const [collapsed,SetCollapsed]= useState(false);
    const [closed,SetClosed]= useState(false);


    const {
        title="",
        data="",
        headerTheme="",
        contentTheme="",


    }=props;

    const handleCollapsedClick=() =>{


        SetCollapsed(collapsed =>!collapsed);

        /*
        SetCollapsed(prevState => ({

            collapsed:!prevState
        }));
       */

    }
    const handleClosedClick=() =>{



        SetClosed(prevState => ({

            closed:!prevState
        }));


    }

    useEffect(() => {
        setContent({content:data});
    }, []);


    if(closed){
        return null;
    }
    return (


        <div class="card">
            <div class="card-header bg-transparent py-3">
                <div class="card-widgets">
                    <a href="javascript:;" data-toggle="reload"><i class="mdi mdi-refresh"></i></a>
                    <a className={!collapsed?"":"collapsed"} data-toggle="collapse" href="#cardCollpase1" role="button" aria-expanded={collapsed?"true":"false"} aria-controls="cardCollpase2" onClick={handleCollapsedClick}><i class="mdi mdi-minus"></i></a>
                    <a href="#" data-toggle="remove" onClick={handleClosedClick}><i class="mdi mdi-close"></i></a>
                </div>
                <h5 class="card-title mb-0">{props.title}</h5>
            </div>
            <div id="cardCollpase1" className={!collapsed?"collapse pt-3 show":"collapse pt-3"}>
                <div class="card-body">
                    {props.data}
                </div>
            </div>
        </div>


    );
};
PortletComponent.prototype={
    title:ProType.string.isRequired,
    data: ProType.string.isRequired,
}
export default PortletComponent;