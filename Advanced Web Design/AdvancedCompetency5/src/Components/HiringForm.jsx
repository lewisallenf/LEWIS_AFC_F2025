import React from "react";
import {
    Button,
    Col,
    FormGroup,
    Input,
    Label,
    Row,
    FormFeedback,
    Form,
} from "reactstrap";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const userSchema = yup.object().shape({
    firstName: yup
        .string()
        .required("First Name is required")
        .min(1, "First Name must be at least 1 character")
        .max(20, "First Name cannot exceed 20 characters"),
    lastName: yup
        .string()
        .notRequired()
        .test(
            "len",
            "Last Name must be between 1 and 20 characters",
            (val) => !val || (val.length >= 1 && val.length <= 20)
        ),
    address: yup
        .string()
        .required("Address is required")
        .min(10, "Address must be at least 10 characters")
        .max(50, "Address cannot exceed 50 characters"),
    address2: yup.string().notRequired(),
    city: yup.string().required("City is required").max(29, "City too long"),
    state: yup
        .string()
        .required("State is required")
        .oneOf(["WY", "UT", "HI"], "Invalid state"),
    zip: yup
        .string()
        .notRequired()
        .matches(/^\d{5}$/, "Zip must be exactly 5 digits"),
    age: yup
        .number()
        .typeError("Age must be a number")
        .required("Age is required")
        .min(25, "Age must be at least 25")
        .max(89, "Age must be at most 89"),
    phoneNumber: yup
        .string()
        .required("Phone Number is required")
        .matches(/^\d{3}-\d{3}-\d{4}$/, "Phone must match format 111-222-3333"),
    email: yup.string().required("Email is required").email("Invalid email"),
    password: yup
        .string()
        .required("Password is required")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,12}$/,
            "Password must be 8–12 chars, include uppercase, lowercase, number, and special char"
        ),
    married: yup
        .string()
        .required("Marital status is required")
        .oneOf(["single", "married"], "Must select married or single"),
    favoriteColors: yup.array(),
    exampleText: yup.string().notRequired(),
});

function HiringForm() {
    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(userSchema),
        mode: "onChange",
        defaultValues: {
            firstName: "",
            lastName: "",
            address: "",
            address2: "",
            city: "",
            state: "",
            zip: "",
            age: 25,
            phoneNumber: "",
            email: "",
            password: "",
            married: "single",
            favoriteColors: [],
            exampleText: "",
        },
    });

    const onSubmit = (data) => {
        console.log(JSON.stringify(data, null, 2));
        reset();
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
                <Col md={6}>
                    <FormGroup>
                        <Label for="firstName">First Name</Label>
                        <Controller
                            control={control}
                            name="firstName"
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    id="firstName"
                                    placeholder="1–20 characters"
                                    invalid={!!errors.firstName}
                                />
                            )}
                        />
                        <FormFeedback>{errors.firstName?.message}</FormFeedback>
                    </FormGroup>
                </Col>

                <Col md={6}>
                    <FormGroup>
                        <Label for="lastName">Last Name</Label>
                        <Controller
                            control={control}
                            name="lastName"
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    id="lastName"
                                    placeholder="1–20 characters (optional)"
                                    invalid={!!errors.lastName}
                                />
                            )}
                        />
                        <FormFeedback>{errors.lastName?.message}</FormFeedback>
                    </FormGroup>
                </Col>
            </Row>

            <FormGroup>
                <Label for="address">Address 1</Label>
                <Controller
                    control={control}
                    name="address"
                    render={({ field }) => (
                        <Input
                            {...field}
                            id="address"
                            placeholder="1234 Main St (10-50 char.)"
                            invalid={!!errors.address}
                        />
                    )}
                />
                <FormFeedback>{errors.address?.message}</FormFeedback>
            </FormGroup>

            <FormGroup>
                <Label for="address2">Address 2</Label>
                <Controller
                    control={control}
                    name="address2"
                    render={({ field }) => (
                        <Input
                            {...field}
                            id="address2"
                            placeholder="Apartment, studio, or floor (optional)"
                            invalid={!!errors.address2}
                        />
                    )}
                />
                <FormFeedback>{errors.address2?.message}</FormFeedback>
            </FormGroup>

            <Row>
                <Col md={6}>
                    <FormGroup>
                        <Label for="city">City</Label>
                        <Controller
                            control={control}
                            name="city"
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    id="city"
                                    placeholder="max 29 characters"
                                    invalid={!!errors.city}
                                />
                            )}
                        />
                        <FormFeedback>{errors.city?.message}</FormFeedback>
                    </FormGroup>
                </Col>

                <Col md={4}>
                    <FormGroup>
                        <Label for="state">State</Label>
                        <Controller
                            control={control}
                            name="state"
                            render={({ field }) => (
                                <Input {...field} type="select" id="state" invalid={!!errors.state}>
                                    <option value="">Select...</option>
                                    <option value="WY">WY</option>
                                    <option value="UT">UT</option>
                                    <option value="HI">HI</option>
                                </Input>
                            )}
                        />
                        <FormFeedback>{errors.state?.message}</FormFeedback>
                    </FormGroup>
                </Col>

                <Col md={2}>
                    <FormGroup>
                        <Label for="zip">Zip</Label>
                        <Controller
                            control={control}
                            name="zip"
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    id="zip"
                                    placeholder="Optional 5-digit zip"
                                    invalid={!!errors.zip}
                                />
                            )}
                        />
                        <FormFeedback>{errors.zip?.message}</FormFeedback>
                    </FormGroup>
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <FormGroup>
                        <Label for="age">Age</Label>
                        <Controller
                            control={control}
                            name="age"
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    id="age"
                                    type="number"
                                    placeholder="25-89"
                                    invalid={!!errors.age}
                                />
                            )}
                        />
                        <FormFeedback>{errors.age?.message}</FormFeedback>
                    </FormGroup>
                </Col>

                <Col md={6}>
                    <FormGroup>
                        <Label for="phoneNumber">Phone Number</Label>
                        <Controller
                            control={control}
                            name="phoneNumber"
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    id="phoneNumber"
                                    placeholder="111-222-3333"
                                    type="tel"
                                    invalid={!!errors.phoneNumber}
                                />
                            )}
                        />
                        <FormFeedback>{errors.phoneNumber?.message}</FormFeedback>
                    </FormGroup>
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Controller
                            control={control}
                            name="email"
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    id="email"
                                    placeholder="Your email"
                                    type="email"
                                    invalid={!!errors.email}
                                />
                            )}
                        />
                        <FormFeedback>{errors.email?.message}</FormFeedback>
                    </FormGroup>
                </Col>

                <Col md={6}>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Controller
                            control={control}
                            name="password"
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    id="password"
                                    placeholder="8–12 chars; incl uppercase, lowercase, number, special"
                                    type="password"
                                    invalid={!!errors.password}
                                />
                            )}
                        />
                        <FormFeedback>{errors.password?.message}</FormFeedback>
                    </FormGroup>
                </Col>
            </Row>

            <FormGroup tag="fieldset">
                <legend>Are you Married?</legend>
                <FormGroup check>
                    <Controller
                        control={control}
                        name="married"
                        render={({ field }) => (
                            <Input
                                {...field}
                                type="radio"
                                value="married"
                                id="marriedYes"
                                checked={field.value === "married"}
                            />
                        )}
                    />
                    <Label check for="marriedYes">
                        Yes, I am Married
                    </Label>
                </FormGroup>

                <FormGroup check>
                    <Controller
                        control={control}
                        name="married"
                        render={({ field }) => (
                            <Input
                                {...field}
                                type="radio"
                                value="single"
                                id="marriedNo"
                                checked={field.value === "single"}
                            />
                        )}
                    />
                    <Label check for="marriedNo">
                        No, I am Single
                    </Label>
                </FormGroup>

                <FormFeedback className="d-block">{errors.married?.message}</FormFeedback>
            </FormGroup>

            <FormGroup row>
                <Label lg={10} className="text-center">
                    What is your Favorite Color?
                </Label>
                {["Blue", "Red", "Green", "Pink", "Purple"].map((color) => (
                    <Col sm={6} key={color}>
                        <FormGroup check>
                            <Controller
                                control={control}
                                name="favoriteColors"
                                render={({ field }) => {
                                    const checked = field.value.includes(color);
                                    return (
                                        <Input
                                            type="checkbox"
                                            id={color.toLowerCase()}
                                            value={color}
                                            checked={checked}
                                            onChange={(e) => {
                                                if (e.target.checked) {
                                                    field.onChange([...field.value, color]);
                                                } else {
                                                    field.onChange(field.value.filter((c) => c !== color));
                                                }
                                            }}
                                        />
                                    );
                                }}
                            />
                            <Label check for={color.toLowerCase()}>{color}</Label>
                        </FormGroup>
                    </Col>
                ))}
                <FormFeedback className="d-block">{errors.favoriteColors?.message}</FormFeedback>
            </FormGroup>

            <FormGroup row>
                <Label for="exampleText" sm={2}>
                    Text Area
                </Label>
                <Col sm={10}>
                    <Controller
                        control={control}
                        name="exampleText"
                        render={({ field }) => (
                            <Input {...field} type="textarea" id="exampleText" />
                        )}
                    />
                </Col>
            </FormGroup>

            <Button type="submit" color="primary" className="me-2">
                Submit
            </Button>
            <Button type="button" color="secondary" onClick={() => reset()}>
                Reset
            </Button>
        </Form>
    );
}

export default HiringForm;
