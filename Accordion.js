import React from 'react';

class Accordion extends React.Component {
    static defaultProps = { 
        sections: [], 
    };
    state = {
        currentSectionIndex: null,
    };
    
    handleButtonClick = (sectionIndex) => {
        //console.log('button was clicked!', {index})
        this.setState({ currentSectionIndex: sectionIndex })
    }
    /*
    renderSections () {
        return this.props.Accordion.map((section, index) => (
            <button key={index} onClick={() => this.handleButtonClick(index)}>
                {tab.name}
            </button>
        ))
    }
    */

   renderContent() {
    const currentSection = this.props.sections[this.state.currentSectionIndex]
    return (
        <div className='content'>
            {currentSection.content}
        </div>
    )
}

    render() {
        return (
            <ul>

            </ul>
        )
    }
}

export default Accordion;