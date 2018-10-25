import React, { Component } from 'react';

import Stat, { StatsWrapper } from '../UI/Stat';
import Progress, { ProgressWrapper } from '../UI/Progress';
import Box from '../UI/Box';
import Card, { CardsWrapper } from '../UI/Card';

import Backend from '../Layouts/Backend';
import Chart from '../Helpers/ChartBars';
import PageHeader from '../Helpers/PageHeader';

export default class Dashboard extends Component {
    render() {
        return (
            <Backend>
                <div className="content-inner no-padding-top no-padding-left no-padding-right">
                    <PageHeader/>

                    <Box classes="border-bottom side-margins no-vertical-distance">
                        <StatsWrapper>
                            <Stat title="Total Revenue" subtitle="Avg. $458.77"  value="$5,256" label="+24%" labelClass="raising"/>
                            <Stat title="Units Sold" subtitle="Avg. 351 per wekk"  value="5269" label="-12%" labelClass="descreasing"/>
                            <Stat title="New Registrations" subtitle="Total: 5987"  value="+589" label="+6%" labelClass="raising"/>
                            <Stat title="Server Uptime" subtitle="Last 1 month ago" value="98.75%" label="Good"/>
                        </StatsWrapper>
                    </Box>

                    <Box title="Current Tasks &amp; Projects Overview" classes="border-bottom side-margins">
                        <ProgressWrapper>
                            <Progress size={56} description="Project: Client Workflows" showStatus={true}/>
                            <Progress size={79} description="Task: Homepage Webdesign" showStatus={true}/>
                            <Progress size={75} description="Project: CRM System" showStatus={true}/>
                            <Progress size={69} description="Task: Workflow Diagrams" showStatus={true}/>
                            <Progress size={92} description="Task: Support Platform" showStatus={true}/>
                            <Progress size={66} description="Task: Server Configuration" showStatus={true}/>
                        </ProgressWrapper>
                    </Box>

                    <Box title="Bar Chart Using Chartist Library" classes="border-bottom side-margins">
                        <Chart/>
                    </Box>

                    <Box title="Most Recently Uploaded Files" classes="side-margins">
                        <CardsWrapper>
                            <Card title="Eraesent ut ex a felis imperdiet mollis sit amet nec erat"
                                  subtitle="Quisque tristique erat ut volutpat vehicula"
                                  image="/img/tmp/listing-1.jpg"
                                  date="14/07/2017 13:15"/>

                            <Card title="Eraesent ut ex a felis imperdiet mollis sit amet nec erat"
                                  subtitle="Quisque tristique erat ut volutpat vehicula"
                                  image="/img/tmp/listing-2.jpg"
                                  date="14/07/2017 12:30"/>

                            <Card title="Eraesent ut ex a felis imperdiet mollis sit amet nec erat"
                                  subtitle="Quisque tristique erat ut volutpat vehicula"
                                  filetype="picture_as_pdf"
                                  date="14/07/2017 12:30"/>

                            <Card title="Eraesent ut ex a felis imperdiet mollis sit amet nec erat"
                                  subtitle="Quisque tristique erat ut volutpat vehicula"
                                  filetype="image"
                                  date="14/07/2017 13:15"/>
                        </CardsWrapper>
                    </Box>
                </div>
            </Backend>
        );
    }
}
