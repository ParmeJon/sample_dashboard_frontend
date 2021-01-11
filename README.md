# sample_dashboard_frontend

This is a React application made to provide a user interface for sample dashboard data.
It also uses the [recharts](https://recharts.org/en-US/) react library for it's data visual representation.

Demo: https://sample-dashboard-frontend.herokuapp.com/ 

## Setup and Run

1. Clone Repository
2. Move into the repository folder.
3. In the root folder Run
    ```
    npm install
    ```
4. Configure your `.env` file
    Make sure you set your REACT_API_APP_URI variable.
    My variable is currently pointing to my heroku backend application.
    ```
    REACT_APP_API_URI: https://serene-sea-63303.herokuapp.com/
    ```
5. Run the application. It should show up on port 3000.
    ```
    npm run start
    ```
