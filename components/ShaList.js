import React from 'react'

class ShaList extends React.Component {
    render(props) {
        return (
            <ul>
                {this.props.shas.map(sha => (
                    <li key={sha.created}>
                            <a>{sha.sha}</a>
                    </li>
                ))}
            </ul>
          );
    }
}

export default ShaList