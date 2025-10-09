import React from "react";
import { Table, Container as MenuContainer } from "reactstrap";

const formatPrice = (price) =>
    Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(price);

const MenuTable = ({ items }) => {
    return (
        <MenuContainer>
            <h1 className="text-center">PUPPY CHOW MENU</h1>
            <h2 className="text-center mb-4">
                PLEASE REVIEW MENU BELOW BEFORE ORDERING
            </h2>

            <Table bordered dark striped responsive>
                <thead className="text-center">
                <tr>
                    <th>#</th>
                    <th>Image</th>
                    <th>Item Name</th>
                    <th>Description</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                {items.map((item, index) => (
                    <tr key={item.name}>
                        <th scope="row">{index + 1}</th>
                        <td className="text-center">
                            <img
                                src={item.image}
                                alt={`Image of ${item.name}`}
                                style={{
                                    width: "100px",
                                    height: "100px",
                                    objectFit: "cover",
                                    borderRadius: "8px"
                                }}
                            />
                        </td>
                        <td>{item.name}</td>
                        <td>{item.description}</td>
                        <td>{formatPrice(item.price)}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </MenuContainer>
    );
};

export default MenuTable;
