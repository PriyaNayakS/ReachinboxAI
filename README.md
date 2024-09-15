ReachinboxAI is a project designed to manage email communication by organizing, displaying, and interacting with email data in a structured, user-friendly format. The system fetches emails from a data source, processes them, and displays them in a web interface.

*Project Overview*
This project is built using HTML, CSS, JavaScript, and JSON. It simulates email interactions by fetching email data from a local JSON file and rendering it in a styled web interface. The email data includes sender details, email body, and other metadata. Users can view the email list and interact with it using the sidebar navigation.

*Features*
Google Sign-Up Integration: Allows users to sign up using Google authentication.
Dynamic Email Display: Emails are dynamically fetched and displayed from a JSON data source.
Navigation Sidebar: Sidebar includes options for navigating between home, contact, inbox, and other sections.
Profile and Workspace Information: Displays user information and workspace details.
Responsive Design: The layout is designed to be user-friendly and responsive across devices.

*Project Flow*

*Login Page*
The login page includes an option to sign up with Google or create an account manually.
Users who already have an account can navigate to the sign-in page.
Google Sign Up: Users can sign up or log in using their Google account. Upon clicking the "Sign Up with Google" button, users are redirected to:
https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://frontend.com
After successful authentication, they are redirected to the frontend.com web page.

*Sidebar Navigation*
Once logged in, users can access different sections of the app via the sidebar navigation.
The sidebar contains icons for home, telecommunication, contact, messages, view list, and an inbox.
When the inbox is clicked, the system fetches emails from a local JSON file and displays them dynamically.

*Email Fetching and Display*
Upon clicking the inbox icon, a JavaScript function is triggered to fetch email data from the mail.json file.
The email data includes the sender’s name, email, subject, body, and metadata such as sentAt date and time.
The fetched data is processed and displayed dynamically in the main content section.

*Email List Rendering*
The emails are rendered in a structured format, displaying details such as:
Subject
From Name and Email
To Email
Date and Time
Email Body
Error Handling

In case of any issues with data fetching or rendering, appropriate error messages are displayed in the console for debugging purposes.
Technologies Used
HTML: For structuring the web pages.
CSS: For styling the pages and ensuring a responsive layout.
JavaScript: For fetching and displaying email data dynamically.
JSON: For storing and simulating email data.
Google Authentication: For allowing users to sign up using their Google account.

*Code Explanation*
*HTML Structure*
Login Page (login.html): Contains the login form and options for signing up with Google or creating an account.
Main Page (onebox.html): Includes the sidebar navigation and the main content area where emails are displayed dynamically.

*CSS*
Styling: Ensures that the layout is user-friendly, with a focus on responsive design. It manages the look and feel of the navigation bar, email display, and various UI components.

*JavaScript*
fetchData(): Fetches email data from the mail.json file using the fetch API.
displayEmails(): Dynamically generates HTML content based on the fetched email data and inserts it into the DOM.
Event Listeners: Handles user interactions like clicking the profile icon to trigger the email fetching process.
