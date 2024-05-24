import { Pagination } from "react-bootstrap";

function CustomPagination (props) {
    const {currentPages, totalPages, onPageChange} = props;

    const handlePageClick = (pageNumber) => {
        onPageChange(pageNumber);
    }

    const renderPageItems = () => {
        const pageItems = [];

        for (let i = 1; i <= totalPages; i++) {
            pageItems.push(
            <Pagination.Item key={i} active={i === currentPages} onClick={ () => handlePageClick(i) }>
                {i}
                </Pagination.Item>);
        }

        return pageItems;
    };

    return <div className="d-flex justify-content-center">
        <Pagination>
            <Pagination.Prev disabled={currentPages === 1} onClick={() => handlePageClick(currentPages - 1)}/>
              {renderPageItems()}
            <Pagination.Next disabled={currentPages === totalPages} onClick={() => handlePageClick(currentPages + 1)} />
        </Pagination>
    </div>
}

export default CustomPagination