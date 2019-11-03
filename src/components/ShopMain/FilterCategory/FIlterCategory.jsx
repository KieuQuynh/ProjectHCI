import './FilterCategory.scss'
import { useState } from 'react'
import InputRange from 'react-input-range'

const FilterCategory = props => {
  const [state, setState] = useState({ value: { min: 10, max: 500 } })

  return (
    <div className="filter">
      <div className="filter_button">
        <h6>FILTER BY PRICE</h6>
        <div className="filter_input">
          <InputRange
            step={10}
            maxValue={500}
            minValue={10}
            value={state.value}
            onChange={value => setState({ ...state, value: value })}
          />
          <div className="filter_number">
            <span className="filter_number_detail">Price: {`${state.value.min}$ - ${state.value.max}$`}</span>
            <button type="button" className="btn btn-dark">
              FILTER
            </button>
          </div>
        </div>
      </div>
      <div className="filter_category">
        <div className="filter_category_title">
          <h6>CATEGORIES</h6>
        </div>
        <div className="filter_category_item">Accessories</div>
        <div className="filter_category_item">Bags</div>
        <div className="filter_category_item">Bestsellers</div>
        <div className="filter_category_item">BOYS & GIRLS</div>
        <div className="filter_category_item">Clothes</div>
        <div className="filter_category_item">Dresses</div>
        <div className="filter_category_item">E-Gift</div>
        <div className="filter_category_item">Shoes</div>
        <div className="filter_category_item">Sweaters</div>
        <div className="filter_category_item">Trend</div>
        <div className="filter_category_item">Women</div>
      </div>
      <div className="filter_category">
        <div className="filter_category_title">
          <h6>COLOR</h6>
        </div>
        <div className="filter_category_item">Accessories</div>
        <div className="filter_category_item">Bags</div>
        <div className="filter_category_item">Bestsellers</div>
        <div className="filter_category_item">BOYS & GIRLS</div>
        <div className="filter_category_item">Clothes</div>
        <div className="filter_category_item">Dresses</div>
        <div className="filter_category_item">E-Gift</div>
        <div className="filter_category_item">Shoes</div>
        <div className="filter_category_item">Sweaters</div>
        <div className="filter_category_item">Trend</div>
        <div className="filter_category_item">Women</div>
      </div>
      <div className="filter_category">
        <div className="filter_category_title">
          <h6>PRODUCT TAGS</h6>
        </div>
        <div className="filter_category_item">Accessories</div>
        <div className="filter_category_item">Bags</div>
        <div className="filter_category_item">Bestsellers</div>
        <div className="filter_category_item">BOYS & GIRLS</div>
        <div className="filter_category_item">Clothes</div>
        <div className="filter_category_item">Dresses</div>
        <div className="filter_category_item">E-Gift</div>
        <div className="filter_category_item">Shoes</div>
        <div className="filter_category_item">Sweaters</div>
        <div className="filter_category_item">Trend</div>
        <div className="filter_category_item">Women</div>
      </div>
      <div className="filter_category">
        <div className="filter_category_title">
          <h6>SIZES</h6>
        </div>
        <div className="filter_category_item">Accessories</div>
        <div className="filter_category_item">Bags</div>
        <div className="filter_category_item">Bestsellers</div>
        <div className="filter_category_item">BOYS & GIRLS</div>
        <div className="filter_category_item">Clothes</div>
        <div className="filter_category_item">Dresses</div>
        <div className="filter_category_item">E-Gift</div>
        <div className="filter_category_item">Shoes</div>
        <div className="filter_category_item">Sweaters</div>
        <div className="filter_category_item">Trend</div>
        <div className="filter_category_item">Women</div>
      </div>
    </div>
  )
}

export default FilterCategory
