import React, { Component } from 'react'
import { connect } from 'react-redux'


 class FormMovie extends Component {
    

    renderMangND =()=>{
        let stt = 1;
        return this.props.mangND.map((ghe) => {
            return <tr key={ghe.name}>
                <td>{stt++}</td>
                <td>{ghe.name}</td>
                <td>{ghe.number}</td>
                <td>{ghe.seats}</td>
               
            </tr>

        })
    }







    render() {
        return (
            <div className='py-5'>
                <table classname="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>name</th>
                            
                            <th>number of seats</th>
                            <th>seats</th>
                        </tr>
                    </thead>
                    <tbody>
                       {this.renderMangND()}
                    </tbody>
                </table>

            </div>
        )
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        mangND:rootReducer.MovieReduce.mangND
    }
}


export default connect(mapStateToProps)(FormMovie)


