import React, { Component } from 'react'
import { setTodoVisibility} from '../actions'
import { connect } from 'react-redux'
import styles from './styles.module.scss';
import { ALL_FILTER, DONE_FILTER, UNDONE_FILTER } from '../definitions'

class TodoFilter extends Component {
  render = () =>
    <div id={styles.filterHolder}>
      {[ ALL_FILTER, DONE_FILTER, UNDONE_FILTER ].map(filter => 
        <div 
          className={filter === this.props.filter ? styles.selectedFilter : styles.unselectedFilter}
          key={filter}
          onClick={ () => this.props.setTodoVisibility(filter) }
        >
          {filter}
        </div>
      )}
    </div>

}

const mapStateToProps = ({ filter }) => ({ filter })

export default connect(mapStateToProps, { setTodoVisibility })(TodoFilter)