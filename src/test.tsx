import React from 'react'

export const Test = ({
    str, num, bool
}:{str: string, num: number, bool: boolean}): React.ReactElement => {
    return <div>
        <div>
            String: <div>{str}</div>
        </div>
        <div>
            Number: <div>{num}</div>
        </div>
        <div>
            Boolean: <div>{bool}</div>
        </div>
    </div>
}

type FooProps = {
    str: string, num: number, bool: boolean
}

class Foo extends React.Component<FooProps> {
    render() {
        return (<div>
        <div>
            String: <div>{this.props.str}</div>
        </div>
        <div>
            Number: <div>{this.props.num}</div>
        </div>
        <div>
            Boolean: <div>{this.props.bool}</div>
        </div>
    </div> )  
    }
  }