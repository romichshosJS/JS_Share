import React, { Component, PureComponent } from 'react'
import PropTypes from 'prop-types'
import CommentList from './CommentList'
import toggleOpen from '../decorators/toggleOpen'
import { CSSTransitionGroup } from 'react-transition-group'
import './article.css'

class Article extends PureComponent {
  static propTypes = {
    article: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string
    }).isRequired,
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps.isOpen !== this.props.isOpen
  // }

  render() {
    const {article, isOpen, toggleOpen} = this.props
    return (
      <div>
        <h3>{article.title}</h3>
        <button onClick = {toggleOpen}>
          {isOpen ? 'close' : 'open'}
        </button>
        <CSSTransitionGroup
          transitionName = "article"
          transitionEnterTimeout = {500}
          transitionLeaveTimeout = {300}>
          {this.getBody()}
        </CSSTransitionGroup>
      </div>
    )
  }

  getBody() {
    const {article, isOpen} = this.props
    if (!isOpen) return null
    return (
      <section>
        {article.text}
        <CommentList comments = {article.comments}/>
      </section>
    )
  }

}

export default Article
