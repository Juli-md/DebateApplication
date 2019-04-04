import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import { HomeMenu } from './HomeMenu';
import { Profile } from './Profile';
import { PersonalData } from './PersonalData';
import { PlannedRounds } from './PlannedRounds';
import { Judging } from './Judging';


export class HomeLayout extends Component {
    static displayName = HomeLayout.name;
    constructor(props) {
        super(props)
        this.state = {
            activeItem: 'профиль'  // if this.state == выйти -- return  не сегмент, а другое
        }
        this.changeActiveItem = this.changeActiveItem.bind(this)
    }

    changeActiveItem(activeItemName) {
        
        this.setState({ activeItem: activeItemName })
     
    }

    render() {
        const ActiveSegmentName = this.state.activeItem;
        const SegmentItems = {
            профиль: <Profile />,
            информация: <PersonalData />,
            запланированные_раунды: <PlannedRounds />,
            судейство: <Judging />

        }

        
            function show({ ActiveSegmentName }) {
                return (
                    <div>
                        {SegmentItems[ActiveSegmentName]}
                    </div>
                );
            }
        

        return (
            <div>
                <HomeMenu func={this.changeActiveItem} />

                <Segment>
                    {show({ ActiveSegmentName })}
                </Segment>
            </div>
        );
    }
}
