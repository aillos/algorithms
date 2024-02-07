import {Dropdown, Form, FormGroup, OverlayTrigger, Tooltip} from "react-bootstrap";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock, faGear, faThumbtack} from "@fortawesome/free-solid-svg-icons";

function Home() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [filters, setFilters] = useState([]);
    const [key, setKey] = useState(Math.random());

    useEffect(() => {
        setKey(Math.random());
    }, [filters]);

    const algorithms = [
        { name: 'Binary Search', route: '/binary-search', type: ['search', 'divide and conquer'], time: 'logN'},
        { name: 'Sliding Window', route: '/sliding-window', type: ['window', 'array'], time: 'n'},
        { name: 'Bubble Sort', route: '/bubble-sort', type: ['sorting', 'array'], time: 'n²'},
        { name: 'Quick Sort', route: '/quick-sort', type: ['sorting', 'divide and conquer'], time: 'nlogN'},
    ];

    const possibleFilters = ['search', 'window', 'divide and conquer', 'array', 'sorting' ];
    const timeComplexityFilters = ['logN', 'n', 'nlogN', 'n²', 'n³', '2ⁿ', 'n!'];

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
            <div className={"main-menu"}>
                <h1>Algorithms visualised</h1>
                <h2>by Andreas Sandvik Solli</h2>
            </div>
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
                        <Dropdown.Item as="checkbox" className={"filter-item"} key={"all"} onClick={(e) => e.stopPropagation()}>
                            <Form.Check
                                id={`filter-item`}
                                checked={filters.length === possibleFilters.length}
                                onChange={() => {
                                    if (filters.length === possibleFilters.length) {
                                        setFilters([]);
                                    } else {
                                        setFilters(possibleFilters);
                                    }
                                }}
                                label={"select all"}
                            />
                        </Dropdown.Item>
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
                        <Dropdown.Divider />
                        {timeComplexityFilters.map(filter => (
                            <Dropdown.Item as="checkbox" className={"filter-item"} key={filter} onClick={(e) => e.stopPropagation()}>
                                <Form.Check
                                    id={`filter-item`}
                                    checked={filters.includes(filter)}
                                    onChange={(event) => handleFilterChange(filter, event)}
                                    label={`O(${filter})`}
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
                {algorithms.filter(algorithm =>
                    (filters.length === 0 ||
                        algorithm.type.some(type => filters.includes(type)) ||
                        filters.includes(algorithm.time)) &&
                    algorithm.name.toLowerCase().includes(searchTerm.toLowerCase())
                ).map(algorithm => (
                    <div
                        key={algorithm.name}
                        className={"algorithm"}
                        onClick={() => navigate(algorithm.route)}
                    >
                    <OverlayTrigger
                        placement="top"
                        overlay={
                            <Tooltip
                                id={`tooltip-top`}>
                                <b>Tags:</b> {algorithm.type.join(', ')}
                            </Tooltip>
                        }
                    >
                        <div className={"algorithmIcon"}>
                            <FontAwesomeIcon icon={faThumbtack} />
                        </div>
                    </OverlayTrigger>
                        <div className={"algorithmName"}>
                            {algorithm.name}
                        </div>
                        <OverlayTrigger
                            placement="top"
                                        overlay={
                                            <Tooltip
                                                id={`tooltip-top`}>
                                                <b>Time complexity:</b> O({algorithm.time})
                                            </Tooltip>
                                        }
                            >

                        <div className={"algorithmTime"}>
                            <FontAwesomeIcon icon={faClock} />
                        </div>
                        </OverlayTrigger>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Home