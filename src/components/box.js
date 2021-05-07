import React, { useEffect, useState } from 'react';

const Box = (props) => {
    console.log(props.names)
    const [width, setWidth] = useState(0)
    useEffect(() => {
        setWidth(document.getElementById('testBox').offsetWidth)
    }, [document.getElementById('testBox')])
    
    return (
        <div className="box-outer" id="testBox">
          
            {width ? props.names.map((name, i) => {
                return <div
                    className="box-con"
                    style={{
                        width: width / (props.names.length +1) + 36 + 'px',
                        borderRight: i !== props.names.length -1 ? '1px solid #D3D3D3' : null
                        }}>
                        <div className="inner-container">
                            {/* <div className="name-con"> */}
                                <div className="title">{name}</div>
                            {/* </div> */}
                            <div className="text">38%</div>
                        </div>
                        </div>
            }) : null}

        </div>
    );

};

export default Box;