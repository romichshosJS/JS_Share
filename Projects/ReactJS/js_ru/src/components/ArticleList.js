import React, {Component} from 'react'
import Article from './Article'
import accordion from '../decorators/accordion'
import PropTypes from 'prop-types'

class ArticleList extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired,
    //from accordion
    toggleOpenItem: PropTypes.func.isRequired,
    openItemId: PropTypes.string
  }

  render() {
    const { articles, toggleOpenItem, openItemId } = this.props
    const articleElements = articles.map((article) => <li key={article.id}>
      <Article
        article = {article}
        isOpen = {article.id === openItemId}
        toggleOpen = {toggleOpenItem(article.id)}
      />
    </li>)

    return (
      <ul>
        {articleElements}
      </ul>
    )
  }
}

export default accordion(ArticleList)
