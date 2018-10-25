import React, { Component } from 'react';

import { Stack, StackActions, StackAction } from '../UI/Stack';
import Backend from '../Layouts/Backend';

export default class Headquarters extends Component {
    render() {
        return (
            <Backend>
                <div className="content-inner">
                    <div className="stacks">
                        <Stack classes="secondary" title="CRM & Project Management">
                            <h3>Module Actions</h3>

                            <StackActions>
                                <StackAction title="Seach Companies" link="#" icon="search"/>
                                <StackAction title="Recent Chats" link="#" icon="chat"/>
                                <StackAction title="Manage Bookmarks" link="#" icon="bookmark_border"/>
                                <StackAction title="Add New Group" link="#" icon="group_add"/>
                                <StackAction title="Set Homepage" link="#" icon="home"/>
                            </StackActions>
                        </Stack>

                        <Stack classes="green" title="ERP & Collaboration">
                            <h3>Module Actions</h3>

                            <StackActions>
                                <StackAction title="Accessibility Options" link="#" icon="accessibility"/>
                                <StackAction title="Configure Notifications" link="#" icon="alarm"/>
                                <StackAction title="Refresh All " link="#" icon="refresh"/>
                                <StackAction title="Upcoming Events" link="#" icon="event"/>
                            </StackActions>
                        </Stack>

                        <Stack classes="red" title="Development Tools">
                            <h3>Module Actions</h3>

                            <StackActions>
                                <StackAction title="Favorite Tools" link="#" icon="favorite_border"/>
                                <StackAction title="Manage Extensions" link="#" icon="extension"/>
                                <StackAction title="DNS Options" link="#" icon="dns"/>
                                <StackAction title="Download Repository" link="#" icon="get_app"/>
                                <StackAction title="Configure Permissions" link="#" icon="perm_identity"/>
                                <StackAction title="System Settings" link="#" icon="settings"/>
                            </StackActions>
                        </Stack>
                    </div>
                </div>
            </Backend>
        )
    }
}
