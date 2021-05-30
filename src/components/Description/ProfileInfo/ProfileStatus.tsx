import React from "react";

type ProfileStatusPropsType = {
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editMode: false
    }

    activateEdiMode () {
        this.setState({
            editMode: true
        })
        // this.state.editMode = true
        // this.forceUpdate()
    }
    deactivateEdiMode () {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <>
                <div>
                    {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEdiMode.bind(this)}>{this.props.status}</span>
                    </div>
                    }
                    {this.state.editMode &&
                    <div>
                        <input type="text" autoFocus={true} value={this.props.status} onBlur={this.deactivateEdiMode.bind(this)}/>
                    </div>
                    }
                </div>
            </>
        )
    }
}