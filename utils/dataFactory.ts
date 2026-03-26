export const generateUser = () => { 
const timestamp = Date.now();
const countries = [
    'India',
    'United States',
    'Canada',
    'Australia'
];

return {
    name: `User${timestamp}`,
    email: `test${timestamp}@mail.com`,
    password: '123456',
    firstName: `User${timestamp}`,
    lastName: `User${timestamp}`,
    company: "CompanyTest",
    address: "test",
    country: countries[Math.floor(Math.random() * countries.length)],
    state: "Washington",
    city: "Washington",
    zipCode: "27300",
    mobileNumber: "2025551234"
};
}