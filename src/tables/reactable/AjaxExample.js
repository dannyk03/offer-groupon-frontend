import React, {Component} from 'react'
import Table from './DefaultTable'

class AjaxExample extends Component {
  constructor() {
    super()
    this.onSearch = this.onSearch.bind(this)
    this.onChangeItemsPerPage = this.onChangeItemsPerPage.bind(this)
    this.state = {
      items: [],
      search: '',
      itemsPerPage: 10
    }
    this.columns = [
      'numericCode',
      'name',
      'gini',
      'region',
      'area',
      'area',
      'population',
      'capital',
      'relevance'
    ]
    this.columnNames = [
      'ID',
      'Name',
      'Version',
      'Category',
      'Created Date',
      'Updated Date',
      'Amount',
      'Store Name',
      'Redemption',
    ]
  }
  componentDidMount() {
    let url = '/json/countries.json'
    this.setState({
      loading: true
    })
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: false,
          items: Array.from(data)
        })
      })
  }
  onSearch(e) {
    e.preventDefault()
    this.setState({
      search: e.target.value
    })
    return false
  }
  onChangeItemsPerPage(e) {
    e.preventDefault()
    this.setState({
      itemsPerPage: e.target.value
    })
    return false
  }
  render() {
    return (
      <Table
        items={this.state.items}
        columns={this.columns}
        columnNames={this.columnNames}
        itemsPerPage={this.state.itemsPerPage}
        search={this.state.search}
        onSearch={this.onSearch}
        onChangeItemsPerPage={this.onChangeItemsPerPage}
      />
    )
  }
}
export default AjaxExample
