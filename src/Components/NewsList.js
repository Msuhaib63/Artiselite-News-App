import { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import useNewsData from "../Hooks/useNewsData";
import CustomPagination from "./CustomPaginations";

const NewsList = (props) => {
    const {category, searchTerm} = props;
    const[currentPage, setCurrentPage] = useState(1);
    const pageSize = 6;

    const onPageChange = (pageNumber) => setCurrentPage(pageNumber);

    const {newsData, loading, error} = useNewsData(category, searchTerm);

    if (loading) {
        return <div>Loading...</div>;
    }

    if(error) {
        return <div>Error: {error.message}</div>;
    }

    const totalArticles = newsData.length;
    const totalPages = Math.ceil(totalArticles / pageSize);
    const startIndex = (currentPage-1) * pageSize;
    const endIndex = startIndex + pageSize;
    const currentArticles = newsData.slice(startIndex, endIndex);

    return (
        <Container>
            <Row>
                {currentArticles?.map((article) => (
                    <Col xs={12} ms={6} lg={4} key={article.url}>
                        <Card>
                            {article.urlToImage && (
                                <Card.Img variant="top" src={article.urlToImage} />
                            )}
                            <Card.Body>
                                <Card.Title>{article.title ? article.title.slice(0, 50) : "No title available"}</Card.Title>
                                <Card.Text>{article.description ? article.description.slice(0, 90) : "No content available"}</Card.Text>
                                <Card.Link href={article.url} target="_blank" rel="noopener noreferrer">Read More</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            <CustomPagination currentPage = {currentPage} totalPages={totalPages} onPageChange={onPageChange}/>
        </Container>
    );
};

export default NewsList;