import React, { useState } from "react";
import {
    Button,
    Col,
    FormGroup,
    Input,
    Label,
    Row,
    FormFeedback,
} from "reactstrap";
import { Form } from "react-router-dom";

const HiringForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phoneNumber: "",
        age: 21,
    });

    const [errors, setErrors] = useState({});

    const validateField = (name, value) => {
        let error = "";

        switch (name) {
            case "firstName":
                if (!value.trim()) error = "First name is required.";
                else if (value.length > 20) error = "Max 20 characters.";
                break;

            case "email":
                if (!value.trim()) error = "Email is required.";
                else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
                    error = "Invalid email format.";
                break;

            case "password":
                if (!value.trim()) error = "Password is required.";
                else if (
                    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,12}$/.test(
                        value
                    )
                )
                    error =
                        "8–12 chars, incl. uppercase, lowercase, number, and symbol.";
                break;

            case "phoneNumber":
                if (!value.trim()) error = "Phone number is required.";
                else if (!/^\d{3}-\d{3}-\d{4}$/.test(value))
                    error = "Format must be 111-222-3333.";
                break;

            case "age":
                if (!value) error = "Age is required.";
                else if (value < 21) error = "Must be 21 or older.";
                break;

            default:
                break;
        }

        setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        validateField(name, value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        Object.entries(formData).forEach(([key, value]) =>
            validateField(key, value)
        );

        const hasErrors = Object.values(errors).some((err) => err);
        if (hasErrors) {
            alert("Please fix errors before submitting.");
            return;
        }

        const submittedData = new FormData(e.target);
        for (let [name, value] of submittedData.entries()) {
            console.log(name, ":", value);
        }

        alert("Form submitted! Check console for data.");
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col md={6}>
                    <FormGroup>
                        <Label for="firstName">First Name</Label>
                        <Input
                            id="firstName"
                            name="firstName"
                            placeholder="1–20 characters"
                            type="text"
                            required
                            minLength={1}
                            maxLength={20}
                            value={formData.firstName}
                            onChange={handleChange}
                            invalid={!!errors.firstName}
                        />
                        <FormFeedback>{errors.firstName}</FormFeedback>
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="lastName">Last Name</Label>
                        <Input
                            id="lastName"
                            name="lastName"
                            placeholder="optional; 1–20 characters"
                            type="text"
                            minLength={1}
                            maxLength={20}
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                    </FormGroup>
                </Col>
            </Row>

            <FormGroup>
                <Label for="address">Address</Label>
                <Input
                    id="address"
                    name="address"
                    placeholder="1234 Main St (max 50 char.)"
                    required
                    maxLength={50}
                />
            </FormGroup>

            <FormGroup>
                <Label for="address2">Address 2</Label>
                <Input
                    id="address2"
                    name="address2"
                    placeholder="Apartment, studio, or floor"
                />
            </FormGroup>

            <Row>
                <Col md={6}>
                    <FormGroup>
                        <Label for="city">City</Label>
                        <Input
                            id="city"
                            name="city"
                            placeholder="maximum 29 characters"
                            required
                            maxLength={29}
                        />
                    </FormGroup>
                </Col>

                <Col md={4}>
                    <FormGroup>
                        <Label for="state">State</Label>
                        <Input id="state" name="state" type="select" required>
                            <option value="">Select...</option>
                            <option value="WY">WY</option>
                            <option value="UT">UT</option>
                            <option value="HI">HI</option>
                        </Input>
                    </FormGroup>
                </Col>

                <Col md={2}>
                    <FormGroup>
                        <Label for="zip">Zip</Label>
                        <Input id="zip" name="zip" />
                    </FormGroup>
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <FormGroup>
                        <Label for="age">Age</Label>
                        <Input
                            id="age"
                            name="age"
                            placeholder="Your Age"
                            type="number"
                            required
                            min={21}
                            max={99}
                            value={formData.age}
                            onChange={handleChange}
                            invalid={!!errors.age}
                        />
                        <FormFeedback>{errors.age}</FormFeedback>
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="phoneNumber">Phone Number</Label>
                        <Input
                            id="phoneNumber"
                            name="phoneNumber"
                            placeholder="111-222-3333"
                            type="tel"
                            required
                            pattern="\d{3}-\d{3}-\d{4}"
                            title="Phone number must be in the format 111-222-3333"
                            maxLength={12}
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            invalid={!!errors.phoneNumber}
                        />
                        <FormFeedback>{errors.phoneNumber}</FormFeedback>
                    </FormGroup>
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input
                            id="email"
                            name="email"
                            placeholder="What's your Email Address"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            invalid={!!errors.email}
                        />
                        <FormFeedback>{errors.email}</FormFeedback>
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input
                            id="password"
                            name="password"
                            placeholder="8–12 chars; incl uppercase, lowercase, number, special"
                            type="password"
                            required
                            minLength={8}
                            maxLength={12}
                            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,12}$"
                            title="Password must be 8-12 characters, include uppercase, lowercase, number, and special symbol"
                            value={formData.password}
                            onChange={handleChange}
                            invalid={!!errors.password}
                        />
                        <FormFeedback>{errors.password}</FormFeedback>
                    </FormGroup>
                </Col>
            </Row>

            <FormGroup tag="fieldset">
                <legend>Are you Married</legend>
                <FormGroup check>
                    <Input name="married" type="radio" value="yes" id="marriedYes" />
                    <Label check for="marriedYes">
                        Yes, I am Married
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Input
                        name="married"
                        type="radio"
                        value="no"
                        id="marriedNo"
                        defaultChecked
                    />
                    <Label check for="marriedNo">
                        No, I am Single
                    </Label>
                </FormGroup>
            </FormGroup>

            <FormGroup row>
                <Label lg={10} className="text-center">
                    What is your Favorite Color?
                </Label>
                {["Blue", "Red", "Green", "Pink", "Purple"].map((color) => (
                    <Col sm={6} key={color}>
                        <FormGroup check>
                            <Input
                                id={color.toLowerCase()}
                                name="favoriteColors"
                                type="checkbox"
                                value={color}
                            />
                            <Label check for={color.toLowerCase()}>
                                {color}
                            </Label>
                        </FormGroup>
                    </Col>
                ))}
            </FormGroup>

            <FormGroup row>
                <Label for="exampleText" sm={2}>
                    Text Area
                </Label>
                <Col sm={10}>
                    <Input id="exampleText" name="text" type="textarea" />
                </Col>
            </FormGroup>

            <Button type="submit" color="primary" className="me-2">
                Submit
            </Button>
            <Button type="reset" color="secondary">
                Reset
            </Button>
        </Form>
    );
};

export default HiringForm;
