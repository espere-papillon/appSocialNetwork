import React, {ChangeEvent} from "react";

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEdiMode = () => {
        this.setState({
            editMode: true
        })
        // this.state.editMode = true
        // this.forceUpdate()
    }
    deactivateEdiMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: event.currentTarget.value
        })
    }
    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <>
                <div>
                    {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEdiMode}>{this.props.status ? this.props.status : '----'}</span>
                    </div>
                    }
                    {this.state.editMode &&
                    <div>
                        <input type="text" onChange={this.onStatusChange} autoFocus={true} value={this.state.status} onBlur={this.deactivateEdiMode}/>
                    </div>
                    }
                </div>
            </>
        )
    }
}