import {Dropdown, Form, FormGroup, DropdownToggle, DropdownMenu} from "react-bootstrap";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGear} from "@fortawesome/free-solid-svg-icons";

function Home() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [filters, setFilters] = useState([]);
    const [key, setKey] = useState(Math.random());

    useEffect(() => {
        setKey(Math.random());
    }, [filters]);

    const algorithms = [
        { name: 'Binary Search', route: '/binary-search', type: ['search', 'divide and conquer'] },
        { name: 'Sliding Window', route: '/sliding-window', type: ['window', 'array'] },
    ];

    const possibleFilters = ['search', 'window', 'divide and conquer', 'array'];

    const handleFilterChange = (filter, event) => {
        event.stopPropagation();
        if (filters.includes(filter)) {
            setFilters(prevFilters => prevFilters.filter(f => f !== filter));
        } else {
            setFilters(prevFilters => [...prevFilters, filter]);
        }
    };

    return(
        <>
            <h1>Algorithms visualised</h1>
            <div className={"filter"}>
                <Dropdown>
                <Dropdown.Toggle
                    id={"dropdown-filters"}
                    drop="down-centered"
                    title={"Filters"}
                    key={key}
                >
                    <FontAwesomeIcon icon={faGear} />
                </Dropdown.Toggle>
                    <Dropdown.Menu id={"menu-filters"}>
                    <FormGroup>
                    {possibleFilters.map(filter => (
                        <Dropdown.Item as="checkbox" className={"filter-item"} key={filter} onClick={(e) => e.stopPropagation()}>
                            <Form.Check
                                id={`filter-item`}
                                checked={filters.includes(filter)}
                                onChange={(event) => handleFilterChange(filter, event)}
                                label={filter}
                            />
                        </Dropdown.Item>
                    ))}
                    </FormGroup>
                    </Dropdown.Menu>
                </Dropdown>
                <input
                    id={"search-bar"}
                    type="text"
                    placeholder="Search..."
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className={"algorithm-list"}>
                {algorithms.filter(algorithm => (filters.length === 0 || algorithm.type.some(type => filters.includes(type))) && algorithm.name.toLowerCase().includes(searchTerm.toLowerCase())).map(algorithm => (
                    <div
                        key={algorithm.name}
                        className={"algorithm"}
                        onClick={() => navigate(algorithm.route)}
                    >
                        {algorithm.name}
                    </div>
                ))}
            </div>
        </>
    );
}

export default Home