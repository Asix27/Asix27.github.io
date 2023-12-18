import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import styles from './Pagination.module.css'; // Импортируйте модуль CSS

function AdvancedExample() {
        return (
            <div className={styles.paginationContainer}>
                    <Pagination>
                            <Pagination.First />
                            <Pagination.Prev />
                            <Pagination.Item>{1}</Pagination.Item>
                            <Pagination.Ellipsis />

                            <Pagination.Item>{10}</Pagination.Item>
                            <Pagination.Item>{11}</Pagination.Item>
                            <Pagination.Item className={styles.paginationActive} active>{12}</Pagination.Item>
                            <Pagination.Item>{13}</Pagination.Item>
                            <Pagination.Item className={styles.paginationDisabled} disabled>{14}</Pagination.Item>

                            <Pagination.Ellipsis />
                            <Pagination.Item>{20}</Pagination.Item>
                            <Pagination.Next />
                            <Pagination.Last />
                    </Pagination>
            </div>
        );
}

export default AdvancedExample;
