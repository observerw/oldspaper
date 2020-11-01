import React from 'react';
import Moment from "moment";


export interface IReadPage {
    title: string,
    date: Moment.Moment,
    content: string,

    prev?: string,
    next?: string,
}

export default (props: IReadPage) => {

    return (<div>

    </div>);
}