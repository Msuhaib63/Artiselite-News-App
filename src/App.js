import { useState } from "react";
import { Navbar, Container, Nav, Button, Form, FormControl } from "react-bootstrap";
import artiseliteLogo from './Assets/download.png';
import NewsList from "./Components/NewsList";

function App() {
    const [category, setCategory] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [activeButton, setActiveButton] = useState("");

    const handleCategoryClick = (category) => {
        setActiveButton(category);
        setCategory(category);
        setSearchTerm("");
    };

    const handleSearch = (event) => {
        event.preventDefault();
        setCategory("");
        setSearchTerm(event.target.search.value);
    };

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
                <Container>
                    <Navbar.Brand href="https://www.artiselite.net/" className="fw-bold" style={{ color: "white" }}>
                    <img
                            src={artiseliteLogo}
                            alt="Artiselite Logo"
                            height="50"
                            className="d-inline-block align-top"
                            style={{ marginRight: "10px" }}
                        />
                        <span style={{ marginLeft: "auto", marginRight: "auto", marginBlock: "auto" }}>Artiselite News Fetcher</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-nav" />
                    <Navbar.Collapse id="navbar-nav">
                        <Nav className="me-auto">
                            <Button
                                variant="transparent"
                                onClick={() => handleCategoryClick("")}
                                style={{
                                    color: activeButton === "" ? "black" : "white",
                                    background: activeButton === "" ? "white" : "transparent",
                                    marginRight: "10px"
                                }}
                            >
                                Home
                            </Button>
                            <Button
                                variant="transparent"
                                onClick={() => handleCategoryClick("business")}
                                style={{
                                    color: activeButton === "business" ? "black" : "white",
                                    background: activeButton === "business" ? "white" : "transparent",
                                    marginRight: "10px"
                                }}
                            >
                                Business
                            </Button>
                            <Button
                                variant="transparent"
                                onClick={() => handleCategoryClick("technology")}
                                style={{
                                    color: activeButton === "technology" ? "black" : "white",
                                    background: activeButton === "technology" ? "white" : "transparent",
                                    marginRight: "10px"
                                }}
                            >
                                Technology
                            </Button>
                            <Button
                                variant="transparent"
                                onClick={() => handleCategoryClick("sports")}
                                style={{
                                    color: activeButton === "sports" ? "black" : "white",
                                    background: activeButton === "sports" ? "white" : "transparent",
                                    marginRight: "10px"
                                }}
                            >
                                Sports
                            </Button>
                            <Button
                                variant="transparent"
                                onClick={() => handleCategoryClick("entertainment")}
                                style={{
                                    color: activeButton === "entertainment" ? "black" : "white",
                                    background: activeButton === "entertainment" ? "white" : "transparent",
                                    marginRight: "10px"
                                }}
                            >
                                Entertainment
                            </Button>
                        </Nav>
                        <Nav className="ms-auto">
                            <Form onSubmit={handleSearch} className="d-flex">
                                <FormControl type="text" placeholder="Search" className="me-2" name="search" />
                                <Button variant="transparent" type="submit" style={{ color: "white", backgroundColor: "blue" }}>
                                    Search
                                </Button>
                            </Form>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <h3 className="latest-news-heading text-center mb-4">
                Latest <span className="badge bg-danger">News</span>
            </h3>
            <Container>
                <NewsList category={category} searchTerm={searchTerm} />
            </Container>

            {/* Footer */}
            <footer className="bg-dark text-white text-center py-4">
                <div>
                    <h5>Artiselite News Fetcher</h5>
                    <p>Your trusted source for the latest news and updates.</p>
                </div>
                <div className="mt-3">
                    <p>&copy; {new Date().getFullYear()} Artiselite. All rights reserved.</p>
                    <p>Privacy Policy | Terms of Use</p>
                </div>
            </footer>
        </>
    );
}

export default App;
