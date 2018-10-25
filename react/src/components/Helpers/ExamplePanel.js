import React, { Component } from 'react';

import { Panel, PanelUser, PanelAction, PanelActionWrapper, PanelList, PanelListItem, PanelListTitle, PanelListWrapper } from '../UI/Panel';

export default class ExamplePanel extends Component {
    render() {
        return (
            <Panel>
                <PanelUser name="John Bohn" subtitle="Copywriter" image="/img/tmp/user-8.jpg" />

                <PanelListWrapper>
                    <PanelListTitle>Todays Tasks</PanelListTitle>

                    <PanelList>
                        <PanelListItem>Contact <a>John Doe</a> for website wireframes.</PanelListItem>
                        <PanelListItem>Make the code reviews for project <a>Awesome Startup</a>.</PanelListItem>
                        <PanelListItem>Discuss about new scrum workflow to your colleagues.</PanelListItem>
                    </PanelList>

                    <PanelListTitle>Sticky Notes</PanelListTitle>

                    <PanelList>
                        <PanelListItem>Here you can find <a>all passwords</a>.</PanelListItem>
                        <PanelListItem>All <a>contact information</a> are stored here.</PanelListItem>
                        <PanelListItem>Never make production deployment <a>at Friday</a>.</PanelListItem>
                        <PanelListItem>General shared terminals commands list is available <a>in notes</a>.</PanelListItem>
                    </PanelList>
                </PanelListWrapper>

                <PanelActionWrapper>
                    <PanelAction title="Create" icon="bookmark_border" />
                    <PanelAction title="Phone" icon="phone" />
                    <PanelAction title="Status" icon="show_chart" />
                    <PanelAction title="Search" icon="search" />
                    <PanelAction title="Create" icon="group_add" />
                    <PanelAction title="Chat" icon="chat_bubble_outline" />
                </PanelActionWrapper>
            </Panel>
        );
    }
}
