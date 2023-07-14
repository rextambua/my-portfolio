import React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {School, Work, Laptop} from "@mui/icons-material";

function Experience(props) {
    return (
        <div className='experience'>
            <VerticalTimeline lineColor='#3e497a'>
                <VerticalTimelineElement
                className='vertical-timeline-element--education'
                date='2016-2017'
                iconStyle ={{background: '#3e497a', color:'white'}}
                icon={<School/>}
                >
                    <h3 className='vertical-timeline-element-title'> RUDN </h3>
                    <p>Russian Language Course</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
            <VerticalTimeline lineColor='#3e497a'>
                <VerticalTimelineElement
                className='vertical-timeline-element--education'
                date='2019-2021'
                iconStyle ={{background: '#c5f542', color:'#171a11'}}
                icon={<Laptop/>}
                >
                    <h3 className='vertical-timeline-element-title'> Freelance </h3>
                    <p>Front-end Web Development</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
            <VerticalTimeline lineColor='#3e497a'>
                <VerticalTimelineElement
                className='vertical-timeline-element--education'
                date='2017-2021'
                iconStyle ={{background: '#3e497a', color:'white'}}
                icon={<School/>}
                >
                    <h3 className='vertical-timeline-element-title'> RUDN </h3>
                    <h4>Barchelor's Degree</h4>
                    <p>Applied Mathematics and Informatics</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
            <VerticalTimeline lineColor='#3e497a'>
                <VerticalTimelineElement
                className='vertical-timeline-element--work'
                date='2022-2023'
                iconStyle ={{background: '#70bf26', color:'#bf26ad'}}
                icon={<Work/>}
                >
                    <h3 className='vertical-timeline-element-title'> TradeLink </h3>
                    <h4>Front-end web developer</h4>
                </VerticalTimelineElement>
            </VerticalTimeline>
            <VerticalTimeline lineColor='#3e497a'>
                <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    date='2016-2017'
                    iconStyle ={{background: '#3e497a', color:'white'}}
                    icon={<School/>}
                >
                    <h3 className='vertical-timeline-element-title'> RUDN </h3>
                    <h4>Master's Degree</h4>
                    <h5>Applied Mathematics and Informatics</h5>
                    <p>Mathematical Models in Interdisciplinary Research</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
            <VerticalTimeline lineColor='#3e497a'>
                <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    date='2023...'
                    iconStyle ={{background: '#26a6bf', color:'#bf3826'}}
                    icon={<Laptop/>}
                >
                    <h3 className='vertical-timeline-element-title'> Freelance </h3>
                    <p>Front-end Web Development</p>
                </VerticalTimelineElement>
            </VerticalTimeline>


        </div>
    );
}

export default Experience;