import React from 'react';
import PropTypes from 'prop-types';


class Spaceship extends React.Component {
    static propTpes = {
        name: PropTypes.string,
        // children: PropTypes.element.isRequired // use element if only requiring one child only
        children: PropTypes.node.isRequired, //'node' is anything renderable
        commanderType: PropTypes.element.isRequired
    };


    static defaultProps = {
        commanderType: CrewMember({name:'', rank:''})
    }

    render() {
        const { name, children, commanderType } = this.props;

        const creatureOnboard = children.map((child, idx) => {
            if (child.type.name === "CrewMember") {
                return child;
            } else {
                return (
                    <div className="alert-alert">
                        {child}
                    </div>
                );
            }
        });


       return (
            <div>
                <h1>{name}</h1>
                {creatureOnboard}
            </div>
       )
    }
}

export default Spaceship;