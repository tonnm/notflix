import React from 'react';

function ButtonLink(props){
    // props =>  { className: "é o que alguem vai passar", href: "/" }
    console.log(props);
    return (
        <a href={props.href} className={props.className}>
            {props.children}
        </a>
    );
}

export default ButtonLink;