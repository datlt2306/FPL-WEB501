function Products() {
    return (
        <div className="tw-grid md:tw-grid-cols-3 tw-gap-8 tw-py-10">
            <div className="card">
                <img src="https://picsum.photos/id/1/400/400" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                        Go somewhere
                    </a>
                </div>
            </div>
            <div className="card">
                <img src="https://picsum.photos/id/1/400/400" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                        Go somewhere
                    </a>
                </div>
            </div>
            <div className="card">
                <img src="https://picsum.photos/id/3/400/400" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                        Go somewhere
                    </a>
                </div>
            </div>
        </div>
    );
}
export default Products;
