import React from "react";

export const Hoge = (props: any): JSX.Element => {
    console.log(props.list);
    const [hello, world] = [props.list.exampleA, props.list.exampleB];

    return <div>{hello}, {world}</div>;
};
