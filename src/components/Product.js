import React from 'react';
class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  showProduct = (product) => {
      console.log(product)
  }

  render() {
    return (
          <div>
              <form>
                <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="text" className="form-control"  aria-describedby="emailHelp" placeholder="Enter name" />
                <input type="number" className="form-control"  aria-describedby="emailHelp" placeholder="Enter price" />
                </div>
                <button type="button" className="btn btn-primary">Them</button>
            </form>
              <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                         this.props.products.map((product, index) =>                
                         <tr key={index}>
                            <th scope="row">1</th>
                            <td>{ product.name }</td>
                            <td>{ product.price }</td>
                            <td>
                            <button type="button" onClick={() => this.showProduct(product) } className="btn btn-default">CLick </button>
                            </td>
                        </tr>
                    )
                    }
                </tbody>
                </table>
        </div>
    );
  }
}

export default Product;
