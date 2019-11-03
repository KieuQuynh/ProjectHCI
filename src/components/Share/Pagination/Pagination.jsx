import './Pagination.scss'
import React, { Component } from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import classnames from 'classnames'

class PaginationComponent extends Component {
  state = {
    totalPage: 0,
    arrayPage: [],
    activePage: 1,
    indexActive: 0,
    pageAmount: 12
  }
  componentDidMount() {
    let totalPage = 10
    this.setState({
      totalPage: totalPage
    })
    let arrayPage = []
    if (totalPage < 5) {
      for (let i = 0; i < totalPage; i++) {
        arrayPage.push(i + 1)
      }
      this.setState({
        arrayPage: arrayPage
      })
    } else {
      for (let i = 0; i < 5; i++) {
        arrayPage.push(i + 1)
      }
      this.setState({
        arrayPage: arrayPage
      })
    }
  }

  handlePageClick = async (index, value) => {
    if (this.state.activePage !== value) {
      await this.setState({
        activePage: value
      })
      if (index < 2 && value !== 1 && value !== 2) {
        let arrayPage
        if (index === 1) {
          arrayPage = this.state.arrayPage.map(page => {
            return page - 1
          })
        }
        if (index === 0) {
          arrayPage = this.state.arrayPage.map(page => {
            return page - 2
          })
        }
        this.setState({
          arrayPage: arrayPage
        })
      }
      if (index > 2 && value !== this.state.totalPage - 1 && value !== this.state.totalPage) {
        let arrayPage
        if (index === 3) {
          arrayPage = this.state.arrayPage.map(page => {
            return page + 1
          })
        }
        if (index === 4) {
          arrayPage = this.state.arrayPage.map(page => {
            return page + 2
          })
        }
        this.setState({
          arrayPage: arrayPage
        })
      }
      if (index === 0 && value === 2) {
        let arrayPage
        arrayPage = this.state.arrayPage.map(page => {
          return page - 1
        })
        this.setState({
          arrayPage: arrayPage
        })
      }
      if (index === 4 && value === this.state.totalPage - 1) {
        let arrayPage
        arrayPage = this.state.arrayPage.map(page => {
          return page + 1
        })
        this.setState({
          arrayPage: arrayPage
        })
      }
    }
  }
  handleClickPrev = async () => {
    if (this.state.activePage > 3 && this.state.activePage < this.state.totalPage - 1) {
      let arrayPage
      arrayPage = this.state.arrayPage.map(page => {
        return page - 1
      })
      await this.setState({
        arrayPage: arrayPage,
        activePage: this.state.activePage - 1
      })
    } else {
      await this.setState({
        activePage: this.state.activePage - 1
      })
    }
  }
  handleClickNext = async () => {
    if (this.state.activePage < this.state.totalPage - 2 && this.state.activePage > 2) {
      let arrayPage
      arrayPage = this.state.arrayPage.map(page => {
        return page + 1
      })
      await this.setState({
        arrayPage: arrayPage,
        activePage: this.state.activePage + 1
      })
    } else {
      await this.setState({
        activePage: this.state.activePage + 1
      })
    }
  }
  render() {
    return (
      <div>
        {this.state.totalPage > 0 ? (
          <div className="pagination-home-vendor">
            <Pagination aria-label="Page navigation example">
              {this.state.activePage > 1 ? (
                <PaginationItem onClick={this.handleClickPrev} className="direction">
                  <i className="far fa-chevron-left" />
                </PaginationItem>
              ) : (
                <PaginationItem className="direction-disable">
                  <i className="far fa-chevron-left" />
                </PaginationItem>
              )}
              {this.state.arrayPage.map((pageNumber, i) => {
                return (
                  <PaginationItem key={pageNumber}>
                    <PaginationLink
                      className={classnames({
                        active: this.state.activePage === pageNumber
                      })}
                      onClick={() => {
                        this.handlePageClick(i, pageNumber)
                      }}
                    >
                      {pageNumber}
                    </PaginationLink>
                  </PaginationItem>
                )
              })}
              {this.state.activePage < this.state.totalPage ? (
                <PaginationItem onClick={this.handleClickNext} className="direction">
                  <i className="far fa-chevron-right" />
                </PaginationItem>
              ) : (
                <PaginationItem className="direction-disable">
                  <i className="far fa-chevron-right" />
                </PaginationItem>
              )}
            </Pagination>
          </div>
        ) : null}
      </div>
    )
  }
}

export default PaginationComponent
