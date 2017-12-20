import React, { Component } from 'react'
import { connect } from 'react-redux'

class BookList extends Component {

    renderList (){
        return this.props.books.map((book) => {
            return(
                <li key={book.title}>{book.title}</li>
            )
        })
    }

    render(){

//        console.log(this.props.asdf)  will return 123
        <ul>
            {this.renderList}
        </ul>
    }
}

const mapStateToProps = (state) => {
    // whatever is returned will show up as props inside of BookList
    return {
        asdf: '123',
        books: state.books
    }
}

export default  connect(mapStateToProps)(BookList)
