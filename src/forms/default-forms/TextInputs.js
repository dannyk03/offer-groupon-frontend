import React, {Component} from 'react'

class TextInputs extends Component {
  constructor() {
    super()

    this.state = {
      sale_type: "discount"
    }
  }

  onSaleChanged(e) {
    this.setState({
      sale_type: e.currentTarget.value
    });
  }

  render() {
    return (
      <form onSubmit={e => e.preventDefault()}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" placeholder="Enter Offer Name" />
          <small className="form-text text-muted">Please enter offer name</small>
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea className="form-control" rows="6" />
          <small className="form-text text-muted">Please type description</small>
        </div>
        
        <div className="form-group">
          <label>Story</label>
          <input type="text" className="form-control" placeholder="Enter Story" />
          <small className="form-text text-muted">Please enter story</small>
        </div>

        <div className="form-group">
          <label>Image Urls</label>
          <textarea className="form-control" rows="6" />
          <small className="form-text text-muted">Please images urls</small>
        </div>

        <div className="form-group">
          <label>Video Url</label>
          <input type="text" className="form-control" placeholder="Enter Video Url" />
          <small className="form-text text-muted">Please enter video url</small>
        </div>

        <div className="form-group">
          <label>Barcode Url</label>
          <input type="text" className="form-control" placeholder="Enter Barcode Url" />
          <small className="form-text text-muted">Please enter barcode url</small>
        </div>

        <div className="form-group">
          <label>Version</label>
          <input type="text" className="form-control" placeholder="Enter version" />
          <small className="form-text text-muted">Please enter version</small>
        </div>

        <div className="title">
          Pricing Offer
        </div>

        <div className="form-group">
          <label className="custom-control custom-radio">
            <input
              name="radio"
              type="radio"
              className="custom-control-input"
              value="discount"
              onChange={this.onSaleChanged.bind(this)}
            />
            <span className="custom-control-indicator" />
            <span className="custom-control-description">Discount</span>
          </label>
          <label className="custom-control custom-radio">
            <input 
              name="radio" 
              type="radio" 
              className="custom-control-input"
              value="bxgx"
              onChange={this.onSaleChanged.bind(this)} 
            />
            <span className="custom-control-indicator" />
            <span className="custom-control-description">BXGX</span>
          </label>
          <label className="custom-control custom-radio">
            <input 
              name="radio" 
              type="radio" 
              className="custom-control-input" 
              value="poff"
              onChange={this.onSaleChanged.bind(this)} 
            />
            <span className="custom-control-indicator" />
            <span className="custom-control-description">Percent Off</span>
          </label>
          <label className="custom-control custom-radio">
            <input 
              name="radio" 
              type="radio" 
              className="custom-control-input" 
              value="fb"
              onChange={this.onSaleChanged.bind(this)} 
            />
            <span className="custom-control-indicator" />
            <span className="custom-control-description">Freebie</span>
          </label>
        </div>

        {this.state.sale_type == 'discount' ? 
        <div className="form-group row">
          <div className="col-6">
            <label>Original Price</label>
            <input type="number" className="form-control" placeholder="Enter Original Price for discount" />
            <small className="form-text text-muted">Please enter original price</small>
          </div>
          <div className="col-6">
            <label>Sale Price</label>
            <input type="number" className="form-control" placeholder="Enter Sale Price for discount" />
            <small className="form-text text-muted">Please enter sale price</small>
          </div>
        </div>
        :
        ''
        }

        {this.state.sale_type == 'bxgx' ? 
        <div className="form-group row">
          <div className="col-6">
            <label>But Qty</label>
            <input type="number" className="form-control" placeholder="Enter Buy QTY for BXGX" />
            <small className="form-text text-muted">Please enter buy quantity</small>
          </div>
          <div className="col-6">
            <label>Get Qty</label>
            <input type="number" className="form-control" placeholder="Enter Get QTY for BXGX" />
            <small className="form-text text-muted">Please enter get quantity</small>
          </div>
        </div>
        :
        ''
        }

        {this.state.sale_type == 'poff' ? 
        <div className="form-group row">
          <div className="col-6">
            <label>Original Price</label>
            <input type="number" className="form-control" placeholder="Enter Original Price for Percentage off" />
            <small className="form-text text-muted">Please enter original price</small>
          </div>
          <div className="col-6">
            <label>Percentage Off</label>
            <input type="number" className="form-control" placeholder="Enter percentage amount for Percentage Off" />
            <small className="form-text text-muted">Please enter percentage amount</small>
          </div>
        </div>
        :
        ''
        }

        {this.state.sale_type == 'fb' ? 
        <div className="form-group row">
          <div className="col-6">
            <label>Freebie Value</label>
            <input type="number" className="form-control" placeholder="Enter Value for freebie " />
            <small className="form-text text-muted">Please enter value</small>
          </div>
          <div className="col-6">
            <label>Sale Price</label>
            <input type="text" className="form-control" placeholder="Enter Description for freebie" />
            <small className="form-text text-muted">Please enter description</small>
          </div>
        </div>
        :
        ''
        }
        
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
          Submit
        </button>
        </div>

      </form>
    );
  }
}
export default TextInputs
